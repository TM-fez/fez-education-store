"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function submitOrder(formData: FormData) {
  const supabase = await createClient();

  // 1. Verify Authentication
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login?error=You must be logged in to checkout.");
  }

  // 2. Extract and Validate Input
  const productId = formData.get("productId") as string;
  const price = parseFloat(formData.get("price") as string);
  const paymentMethod = formData.get("paymentMethod") as string;
  const senderName = formData.get("senderName") as string;
  const proofFile = formData.get("proofFile") as File;

  if (!productId || isNaN(price) || !paymentMethod || !senderName || !proofFile) {
    throw new Error("Missing required checkout fields.");
  }

  // 3. File Validation (5MB max, basic type check)
  if (proofFile.size > 5 * 1024 * 1024) {
    throw new Error("File exceeds 5MB limit.");
  }
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  if (!allowedTypes.includes(proofFile.type)) {
    throw new Error("Invalid file type. Please upload a JPG, PNG, or PDF.");
  }

  // 4. File Upload
  const fileExt = proofFile.name.split('.').pop();
  const fileName = `${user.id}-${Date.now()}.${fileExt}`;
  const filePath = `${user.id}/${fileName}`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("public-payment-proofs")
    .upload(filePath, proofFile, {
      contentType: proofFile.type,
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Failed to upload payment proof: ${uploadError.message}`);
  }

  const { data: { publicUrl } } = supabase.storage
    .from("public-payment-proofs")
    .getPublicUrl(filePath);

  // 5. Database Transaction Flow
  // For V1, we do sequential inserts. If an insert fails, the previously created rows
  // could become orphaned, but Supabase SDK doesn't natively support multi-table 
  // transactions without custom Postgres RPCs. We rely on standard exception bubbling.
  
  // Create Order
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: user.id,
      total_price: price,
      payment_method: paymentMethod,
      status: "pending"
    })
    .select()
    .single();

  if (orderError || !order) {
    // Basic rollback attempt for storage
    await supabase.storage.from("public-payment-proofs").remove([filePath]);
    throw new Error("Failed to create order. Please try again.");
  }

  // Create Order Item
  const { error: itemError } = await supabase
    .from("order_items")
    .insert({
      order_id: order.id,
      product_id: productId,
      price: price
    });

  if (itemError) {
    throw new Error("Failed to create order item details.");
  }

  // Create Payment Record
  const { error: paymentError } = await supabase
    .from("payments")
    .insert({
      order_id: order.id,
      proof_url: publicUrl,
      sender_name: senderName,
      status: "pending"
    });

  if (paymentError) {
    throw new Error("Failed to attach payment proof to order.");
  }

  // 6. Redirect to Success
  redirect("/checkout/success");
}
