import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, Briefcase } from "lucide-react";
import { getProductBySlug } from "@/lib/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex-1 bg-[var(--color-dark-900)] py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resource Store
        </Link>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              {product.title}
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="corporate-card p-8 mb-8">
              <h2 className="text-xl font-heading font-bold mb-6 text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-400" />
                Key Workplace Outcomes
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-gray-300">Implement immediately actionable strategies in your workplace.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-gray-300">Align team operations with standardized best practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span className="text-gray-300">Mitigate operational risks specific to the SADC region.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-heading font-bold mb-4 text-white">Resource Format</h2>
              <div className="flex items-center gap-3 text-gray-400">
                <FileText className="w-5 h-5" />
                <span>Comprehensive PDF Guide & Executive Toolkit</span>
              </div>
            </div>
          </div>

          {/* Sticky Procurement Panel */}
          <div className="relative">
            <div className="sticky top-24 corporate-card p-8">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                Procurement
              </div>
              <div className="text-4xl font-bold text-white mb-6">
                P{product.price.toFixed(2)}
              </div>
              
              <Link 
                href={`/checkout?product=${product.id}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[var(--color-dark-900)] py-4 rounded-sm font-bold text-lg hover:bg-gray-100 transition-colors mb-4"
              >
                Procure Resource
              </Link>
              
              <p className="text-sm text-center text-gray-500 mb-6">
                Instant access upon administrative verification.
              </p>

              <div className="space-y-4 pt-6 border-t border-gray-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Secure Transaction</h4>
                    <p className="text-xs text-gray-400 mt-1">Verified offline payments via FNB or Orange Money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
