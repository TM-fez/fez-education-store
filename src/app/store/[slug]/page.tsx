import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText, Briefcase, Target, Users } from "lucide-react";
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
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resource Store
        </Link>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div>
            <div className="relative aspect-[16/9] md:aspect-[2/1] w-full rounded-sm overflow-hidden border border-[var(--color-dark-600)] mb-10 shadow-xl">
              <Image 
                src={product.image_url} 
                alt={product.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white leading-tight">
              {product.title}
            </h1>
            
            {product.subtitle && (
              <p className="text-xl text-gray-400 font-medium mb-8">
                {product.subtitle}
              </p>
            )}

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 mb-12">
              <p>{product.description}</p>
            </div>

            {/* Workplace Outcomes / Key Learning Outcomes */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-500" />
                Key Learning Outcomes
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {product.key_learning_outcomes?.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 corporate-card p-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Target Audience */}
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                Target Audience
              </h3>
              <div className="corporate-card p-6 border-l-4 border-l-emerald-500">
                <p className="text-gray-300 font-medium">{product.target_audience}</p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-[var(--color-dark-600)]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-gray-400" />
                <div>
                  <h4 className="font-semibold text-white">Botswana Framework</h4>
                  <p className="text-sm text-gray-400">Aligned with SADC business practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-gray-400" />
                <div>
                  <h4 className="font-semibold text-white">Practical Formats</h4>
                  <p className="text-sm text-gray-400">PDF, Excel templates, Checklists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Procurement Panel */}
          <div className="relative space-y-6">
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

            {/* B2B Lead Gen Panel */}
            <div className="corporate-card p-8 bg-[var(--color-dark-800)] border-l-4 border-l-emerald-500">
              <h3 className="text-xl font-heading font-bold text-white mb-3">Need this for your entire team?</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                We facilitate customized corporate workshops based on this framework. Transform your workforce rapidly with expert-led training sessions.
              </p>
              <Link 
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-transparent border border-emerald-500/50 text-white py-3.5 rounded-sm font-semibold hover:bg-emerald-500/10 transition-colors"
              >
                Request Training Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
