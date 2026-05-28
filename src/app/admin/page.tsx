import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { AdminOrderTable } from "@/components/admin/admin-order-table";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch pending orders with nested profile and payment relations
  const { data: pendingOrders, error } = await supabase
    .from("orders")
    .select(`
      id,
      total_price,
      payment_method,
      created_at,
      profiles ( full_name, email ),
      payments ( id, proof_url, sender_name, status )
    `)
    .eq("status", "pending")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return <div className="text-red-500">Failed to load orders.</div>;
  }

  // Calculate some basic overview stats
  const totalPendingValue = pendingOrders?.reduce((acc, order) => acc + Number(order.total_price), 0) || 0;

  return (
    <div className="space-y-8">
      {/* Overview Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6 border border-[var(--border)]">
          <p className="text-sm font-medium text-[var(--foreground)]/60 mb-2">Pending Review</p>
          <p className="text-4xl font-heading font-bold text-[var(--foreground)]">{pendingOrders?.length || 0}</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[var(--border)]">
          <p className="text-sm font-medium text-[var(--foreground)]/60 mb-2">Value Pending</p>
          <p className="text-4xl font-heading font-bold text-[var(--color-brand-500)]">P{totalPendingValue.toFixed(2)}</p>
        </div>
        <div className="glass rounded-2xl p-6 border border-[var(--border)] opacity-50">
          <p className="text-sm font-medium text-[var(--foreground)]/60 mb-2">Today's Approvals</p>
          <p className="text-4xl font-heading font-bold text-[var(--foreground)]">--</p>
        </div>
      </div>

      {/* Pending Orders Table Component */}
      <div className="glass rounded-2xl border border-[var(--border)] overflow-hidden">
        <div className="p-6 border-b border-[var(--border)]">
          <h2 className="font-heading font-semibold text-lg text-[var(--foreground)]">Action Required</h2>
          <p className="text-sm text-[var(--foreground)]/60">Orders awaiting payment proof verification.</p>
        </div>
        
        {/* We pass the raw data to a Client Component to handle modals and action triggers seamlessly */}
        {pendingOrders && pendingOrders.length > 0 ? (
          <AdminOrderTable orders={pendingOrders} />
        ) : (
          <div className="p-12 text-center text-[var(--foreground)]/50">
            No pending orders found. You're all caught up!
          </div>
        )}
      </div>
    </div>
  );
}
