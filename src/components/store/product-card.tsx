import Link from "next/link";
import { Product, getCategoryById } from "@/lib/data";
import { ArrowRight, BookText } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category_id);
  
  return (
    <Link href={`/store/${product.slug}`} className="block h-full group">
      <div className="corporate-card flex flex-col h-full hover:border-gray-400 transition-colors">
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-gray-800 text-gray-300 rounded-sm flex items-center justify-center border border-gray-700">
              <BookText className="w-5 h-5" />
            </div>
            {category && (
              <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-2 py-1 rounded-sm border border-gray-700">
                {category.name}
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-heading font-semibold text-white mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {product.title}
          </h3>
          
          <div className="mt-2 mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Workplace Outcome</p>
            <p className="text-sm text-gray-300 line-clamp-3">
              {product.short_description}
            </p>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-700 flex items-center justify-between">
            <span className="text-xl font-bold text-white">
              P{product.price.toFixed(2)}
            </span>
            <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
