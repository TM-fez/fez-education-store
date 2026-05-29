import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, Briefcase, Target, Users, ArrowRight } from "lucide-react";
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
    <div className="flex-1 py-12" style={{ backgroundColor: "var(--color-surface-200)" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Link
          href="/store"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resource Library
        </Link>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div>
            <div className="relative aspect-[16/9] md:aspect-[2/1] w-full rounded-sm overflow-hidden border border-slate-200 mb-10 shadow-md">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-brand-navy)]/10 text-[var(--color-brand-navy)] text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
              Implementation Resource
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900 leading-tight">
              {product.title}
            </h1>

            {product.subtitle && (
              <p className="text-lg text-slate-500 font-medium mb-8 border-l-4 border-[var(--color-brand-navy)] pl-4">
                {product.subtitle}
              </p>
            )}

            <div className="prose prose-slate prose-lg max-w-none mb-12">
              <p>{product.description}</p>
            </div>

            {/* Key Learning Outcomes */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-[var(--color-brand-navy)]" />
                Key Learning Outcomes
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {product.key_learning_outcomes?.map((outcome: string, idx: number) => (
                  <li key={idx} className="corporate-card p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--color-brand-navy)]" />
                Target Audience
              </h3>
              <div className="corporate-card p-6 border-l-4 border-l-[var(--color-brand-navy)]">
                <p className="text-slate-700 font-medium">{product.target_audience}</p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-slate-400" />
                <div>
                  <h4 className="font-semibold text-slate-900">Botswana Framework</h4>
                  <p className="text-sm text-slate-500">Aligned with SADC business practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-slate-400" />
                <div>
                  <h4 className="font-semibold text-slate-900">Practical Formats</h4>
                  <p className="text-sm text-slate-500">PDF, Excel templates, Checklists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Unified Procurement & Implementation Panel */}
          <div className="relative space-y-6">
            <div className="sticky top-24 corporate-card p-8 shadow-lg">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">
                Procurement & Implementation
              </div>

              {/* Primary Action: Direct Purchase */}
              <div className="mb-8">
                <div className="flex items-end justify-between mb-4">
                  <span className="text-sm text-slate-500 font-medium">Digital Resource</span>
                  <span className="text-3xl font-bold text-slate-900">P{product.price.toFixed(2)}</span>
                </div>

                <Link
                  href={`/checkout?product=${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-brand-navy)] text-white py-4 rounded-sm font-bold text-base hover:bg-[var(--color-brand-navy-light)] transition-colors shadow-md"
                >
                  Purchase Resource
                </Link>
                <p className="text-xs text-center text-slate-400 mt-3">
                  Instant access upon administrative verification.
                </p>
              </div>

              {/* Secondary Action: Corporate Training */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs font-bold text-[var(--color-brand-navy)] uppercase tracking-wider mb-2">Corporate Implementation</p>
                <h4 className="text-base font-heading font-bold text-slate-900 mb-3">Need this for your entire team?</h4>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                  We deliver customized, expert-led workshops based on this framework across your organization.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-slate-300 text-slate-700 py-3 rounded-sm font-semibold text-sm hover:border-[var(--color-brand-navy)] hover:text-[var(--color-brand-navy)] transition-colors"
                >
                  Request Corporate Training Proposal
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="space-y-4 pt-6 mt-6 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">Secure Transaction</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Verified via FNB or Orange Money.</p>
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
