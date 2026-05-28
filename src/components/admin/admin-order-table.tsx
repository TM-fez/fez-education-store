"use client";

import { useState } from "react";
import { approveOrder, rejectOrder } from "@/app/admin/actions";
import { Check, X, FileText, Loader2 } from "lucide-react";

// The shape matches the joined Supabase query
type PendingOrder = {
  id: string;
  total_price: number;
  payment_method: string;
  created_at: string;
  profiles: { full_name: string; email: string };
  payments: { id: string; proof_url: string; sender_name: string; status: string }[];
};

export function AdminOrderTable({ orders }: { orders: any[] }) {
  const [selectedOrder, setSelectedOrder] = useState<PendingOrder | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = async () => {
    if (!selectedOrder || !selectedOrder.payments[0]) return;
    setIsProcessing(true);
    try {
      await approveOrder(selectedOrder.id, selectedOrder.payments[0].id);
      setSelectedOrder(null);
    } catch (error) {
      console.error(error);
      alert("Failed to approve order.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReject = async () => {
    if (!selectedOrder || !selectedOrder.payments[0]) return;
    const reason = prompt("Reason for rejection (optional):");
    if (reason === null) return; // cancelled prompt
    
    setIsProcessing(true);
    try {
      await rejectOrder(selectedOrder.id, selectedOrder.payments[0].id, reason);
      setSelectedOrder(null);
    } catch (error) {
      console.error(error);
      alert("Failed to reject order.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--foreground)]/5 border-b border-[var(--border)] text-[var(--foreground)]/60">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Method</th>
              <th className="px-6 py-4 font-medium">Value</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {orders.map((order: PendingOrder) => (
              <tr key={order.id} className="hover:bg-[var(--foreground)]/5 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-[var(--foreground)]">{order.profiles.full_name}</p>
                  <p className="text-xs text-[var(--foreground)]/50">{order.profiles.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--foreground)]/10 text-[var(--foreground)] capitalize">
                    {order.payment_method.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold text-[var(--color-brand-500)]">
                  P{order.total_price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-[var(--foreground)]/60">
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => setSelectedOrder(order)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--background)] bg-[var(--foreground)] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Review <FileText className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Review Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[var(--background)] border border-[var(--border)] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-6 border-b border-[var(--border)] flex justify-between items-center bg-[var(--card)]">
              <h3 className="font-heading font-semibold text-xl">Review Payment Proof</h3>
              <button onClick={() => !isProcessing && setSelectedOrder(null)} className="text-[var(--foreground)]/50 hover:text-[var(--foreground)]">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 bg-[var(--foreground)]/5">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass p-4 rounded-xl">
                  <p className="text-xs text-[var(--foreground)]/50 uppercase tracking-wider mb-1">Claimed Sender</p>
                  <p className="font-medium">{selectedOrder.payments[0]?.sender_name || 'N/A'}</p>
                </div>
                <div className="glass p-4 rounded-xl">
                  <p className="text-xs text-[var(--foreground)]/50 uppercase tracking-wider mb-1">Expected Amount</p>
                  <p className="font-medium text-[var(--color-brand-500)]">P{selectedOrder.total_price.toFixed(2)}</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--background)] aspect-[3/4] sm:aspect-video relative">
                {/* Normally we'd use next/image, but since proof_url could be arbitrary Supabase domain, native img is easier for V1 without config overhead */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedOrder.payments[0]?.proof_url} 
                  alt="Payment Proof" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="p-6 border-t border-[var(--border)] flex gap-4 bg-[var(--card)]">
              <button 
                onClick={handleReject}
                disabled={isProcessing}
                className="flex-1 px-6 py-3 rounded-xl font-medium border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-colors disabled:opacity-50"
              >
                Reject
              </button>
              <button 
                onClick={handleApprove}
                disabled={isProcessing}
                className="flex-[2] flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-600)] transition-colors disabled:opacity-50"
              >
                {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Check className="w-5 h-5" />}
                {isProcessing ? 'Processing...' : 'Approve & Release PDF'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
