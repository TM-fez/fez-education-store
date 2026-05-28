import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Download, Clock, Lock, BookOpen } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Fetch all orders and related items for the current user
  const { data: orders, error } = await supabase
    .from("orders")
    .select(`
      id,
      status,
      created_at,
      order_items (
        product_id,
        products ( title, short_description )
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="flex-1 bg-[var(--background)] py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-8 text-[var(--foreground)]">
          My Learning Dashboard
        </h1>

        {(!orders || orders.length === 0) ? (
          <div className="glass rounded-3xl p-12 text-center flex flex-col items-center border-[var(--border)]">
            <BookOpen className="w-16 h-16 text-[var(--foreground)]/20 mb-4" />
            <h2 className="text-xl font-heading font-semibold mb-2">No Courses Yet</h2>
            <p className="text-[var(--foreground)]/60 mb-6">You haven't purchased any training materials.</p>
            <Link 
              href="/store"
              className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:scale-105 transition-transform"
            >
              Browse Catalog
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => {
              const item = order.order_items[0]; // Assuming 1 item per order for V1 simplicity
              if (!item) return null;
              
              const product = item.products as any;
              const isApproved = order.status === "approved";
              const isPending = order.status === "pending";

              return (
                <div key={order.id} className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-[var(--border)] hover:border-[var(--color-brand-500)]/30 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {isApproved ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          Approved
                        </span>
                      ) : isPending ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Review Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-500 border border-red-500/20">
                          Rejected
                        </span>
                      )}
                      <span className="text-xs text-[var(--foreground)]/50">
                        Ordered on {new Date(order.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-xl mb-1">{product?.title || 'Unknown Course'}</h3>
                    <p className="text-sm text-[var(--foreground)]/60 line-clamp-2 max-w-2xl">
                      {product?.short_description}
                    </p>
                  </div>

                  <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-[var(--border)]/50">
                    {isApproved ? (
                      <a 
                        href={`/api/download/${item.product_id}`}
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-brand-500)] text-white rounded-xl font-medium hover:bg-[var(--color-brand-600)] transition-colors shadow-lg shadow-[var(--color-brand-500)]/20"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--foreground)]/5 text-[var(--foreground)]/40 rounded-xl font-medium border border-[var(--border)] cursor-not-allowed"
                      >
                        {isPending ? <Clock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                        {isPending ? 'Awaiting Admin' : 'Locked'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
