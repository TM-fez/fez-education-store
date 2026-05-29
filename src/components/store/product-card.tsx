import Link from "next/link";
import Image from "next/image";
import { Product, getCategoryById } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category_id);
  
  return (
    <Link href={`/store/${product.slug}`} className="block h-full group">
      <div className="corporate-card flex flex-col h-full hover:border-gray-400 transition-colors overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-gray-800 border-b border-gray-700 mb-4 group/image overflow-hidden">
          <Image 
            src={product.image_url} 
            alt={product.title} 
            fill 
            className="object-cover group-hover/image:scale-105 transition-transform duration-500" 
          />
          {category && (
            <div className="absolute top-3 right-3">
              <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded-sm border border-gray-600 uppercase tracking-wider">
                {category.name}
              </span>
            </div>
          )}
        </div>
        
        <div className="px-6 pb-6 flex-1 flex flex-col">
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
