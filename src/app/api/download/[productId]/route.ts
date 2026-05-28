import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  const resolvedParams = await params;
  const productId = resolvedParams.productId;
  const supabase = await createClient();

  // 1. Verify Authentication Server-Side
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  // 2. Verify Order Ownership & Approval Status
  // We query order_items joining orders to ensure the user owns an approved order for THIS product.
  const { data: orderItem, error: dbError } = await supabase
    .from("order_items")
    .select(`
      id,
      products ( pdf_path ),
      orders!inner ( user_id, status )
    `)
    .eq("product_id", productId)
    .eq("orders.user_id", user.id)
    .eq("orders.status", "approved")
    .single();

  if (dbError || !orderItem) {
    // Return 403 Forbidden. The user either hasn't bought it, or the order is still pending.
    return NextResponse.json(
      { error: "Forbidden: You do not have an approved order for this product." },
      { status: 403 }
    );
  }

  // Type narrowing for the joined product data
  const pdfPath = (orderItem.products as any)?.pdf_path;
  
  if (!pdfPath) {
    return NextResponse.json({ error: "Product file not configured." }, { status: 404 });
  }

  // 3. Generate Temporary Signed URL (valid for 60 seconds)
  const { data: signedUrlData, error: storageError } = await supabase.storage
    .from("private-downloads")
    .createSignedUrl(pdfPath, 60, {
      download: true, // Forces the browser to download the file rather than render it inline
    });

  if (storageError || !signedUrlData?.signedUrl) {
    return NextResponse.json({ error: "Failed to generate secure download link." }, { status: 500 });
  }

  // 4. Redirect the user securely to the signed URL
  return NextResponse.redirect(signedUrlData.signedUrl);
}
