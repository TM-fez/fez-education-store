import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2, ShieldCheck, Download } from "lucide-react";
import { getProductBySlug, getCategoryById } from "@/lib/data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.category_id);

  return (
    <div className="flex-1 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 md:py-12">
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Premium Preview */}
          <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden glass border-[var(--color-brand-500)]/20 shadow-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-900)]/40 to-transparent pointer-events-none" />
            <BookOpen className="w-32 h-32 text-[var(--color-brand-500)]/40" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--border)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-500)]/10 flex items-center justify-center text-[var(--color-brand-500)]">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">Instant PDF Download</p>
                  <p className="text-xs text-[var(--foreground)]/60">Secure, encrypted delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col pt-4 lg:pt-8">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] text-sm font-medium mb-4">
                {category?.name}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4 text-balance">
                {product.title}
              </h1>
              <div className="flex items-end gap-4 mb-6">
                <span className="text-5xl font-heading font-bold text-[var(--color-brand-500)]">
                  P{product.price.toFixed(2)}
                </span>
                <span className="text-[var(--foreground)]/50 pb-2 text-sm font-medium uppercase tracking-widest">
                  Botswana Pula
                </span>
              </div>
              <p className="text-lg text-[var(--foreground)]/80 leading-relaxed text-pretty">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="font-heading font-semibold text-lg">What you'll receive:</h3>
              <ul className="space-y-3">
                {[
                  "Comprehensive training module (PDF format)",
                  "Practical templates and checklists",
                  "Lifetime access to future updates",
                  "Actionable strategies for local implementation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-500)] shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">Secure Botswana Checkout</h4>
                  <p className="text-xs text-[var(--foreground)]/60 leading-relaxed">
                    We accept manual bank transfers (FNB, Absa, Stanbic) and Orange Money. Your purchase will be verified by our team.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={`/checkout?product=${product.id}`}
              className="w-full flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-8 py-5 rounded-full font-medium text-lg hover:scale-[1.02] transition-transform shadow-[0_0_40px_-10px_var(--color-brand-500)]"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
