import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Product } from "@/lib/data";
import { getCategoryById } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryById(product.category_id);

  return (
    <Link href={`/store/${product.slug}`} className="group block h-full">
      <div className="glass h-full flex flex-col rounded-2xl overflow-hidden border-[var(--border)] group-hover:border-[var(--color-brand-500)]/50 transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:-translate-y-1">
        {/* Thumbnail Placeholder */}
        <div className="aspect-[4/3] w-full bg-[var(--color-dark-800)] border-b border-[var(--border)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-900)]/20 to-transparent z-0" />
          <BookOpen className="w-12 h-12 text-[var(--foreground)]/20 z-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center rounded-full bg-[var(--background)]/80 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-[var(--foreground)] border border-[var(--border)]">
              {category?.name}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-heading font-semibold text-xl mb-2 text-[var(--foreground)] group-hover:text-[var(--color-brand-500)] transition-colors line-clamp-2">
            {product.title}
          </h3>
          <p className="text-[var(--foreground)]/70 text-sm leading-relaxed mb-6 line-clamp-3">
            {product.short_description}
          </p>
          
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border)]/50">
            <span className="text-xl font-heading font-bold text-[var(--foreground)]">
              P{product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-brand-500)]">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
