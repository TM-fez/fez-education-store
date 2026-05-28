"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function approveOrder(orderId: string, paymentId: string) {
  const supabase = await createClient();

  // 1. Verify Admin Role
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    throw new Error("Forbidden: Admin access required.");
  }

  // 2. Transactional Update (Simulated via sequential awaits for V1)
  // Update Order Status
  const { error: orderError } = await supabase
    .from("orders")
    .update({ status: "approved" })
    .eq("id", orderId);

  if (orderError) throw new Error("Failed to update order status.");

  // Update Payment Status
  const { error: paymentError } = await supabase
    .from("payments")
    .update({ 
      status: "verified",
      reviewed_by: user.id,
      reviewed_at: new Date().toISOString()
    })
    .eq("id", paymentId);

  if (paymentError) throw new Error("Failed to update payment status.");

  // Revalidate the admin dashboard cache
  revalidatePath("/admin");
}

export async function rejectOrder(orderId: string, paymentId: string, notes: string) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  // RLS will enforce admin policy, but explicit checks in Server Actions 
  // provide better error boundaries and defense-in-depth.
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (profile?.role !== "admin") throw new Error("Forbidden");

  // Reject Order
  await supabase.from("orders").update({ status: "rejected" }).eq("id", orderId);
  
  // Reject Payment
  await supabase.from("payments").update({ 
    status: "rejected",
    reviewed_by: user.id,
    reviewed_at: new Date().toISOString(),
    admin_notes: notes
  }).eq("id", paymentId);

  revalidatePath("/admin");
}
