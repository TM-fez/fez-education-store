import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-6 bg-[var(--background)] text-center">
      <div className="glass max-w-lg w-full rounded-3xl p-10 border border-[var(--border)] shadow-2xl flex flex-col items-center">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-4">
          Order Submitted!
        </h1>
        
        <p className="text-[var(--foreground)]/70 leading-relaxed mb-8">
          We have received your payment proof successfully. Our administrative team will verify your transaction shortly (usually within 1-2 hours during business hours).
        </p>

        <div className="bg-[var(--background)]/50 rounded-xl p-4 w-full mb-8 border border-[var(--border)] text-left">
          <h3 className="font-semibold text-sm mb-2">What happens next?</h3>
          <ol className="text-sm text-[var(--foreground)]/60 list-decimal pl-4 space-y-1">
            <li>Admin verifies payment proof</li>
            <li>Order status changes to "Approved"</li>
            <li>You receive an email notification</li>
            <li>Your PDF course becomes available for download</li>
          </ol>
        </div>

        <Link 
          href="/dashboard"
          className="w-full flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] py-4 rounded-xl font-medium hover:scale-[1.02] transition-transform"
        >
          Go to My Dashboard
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
