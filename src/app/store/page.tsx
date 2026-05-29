import { Suspense } from "react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/store/product-card";
import { CategoryFilter } from "@/components/store/category-filter";

interface StorePageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function StorePage({ searchParams }: StorePageProps) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category;

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category_id === activeCategory)
    : products;

  return (
    <div className="flex-1 py-12 border-b border-slate-200" style={{ backgroundColor: "var(--color-surface-200)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Implementation Resources</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">
            Workforce Performance Resource Library
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Professionally developed training manuals, toolkits, and workbooks designed to reinforce every training initiative. These are the practical implementation tools of the Fez Performance System™.
          </p>
        </div>
      </div>

      {/* Catalog Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Suspense fallback={<div className="h-10 mb-10 bg-slate-200 animate-pulse rounded-sm w-full max-w-md" />}>
            <CategoryFilter categories={categories} />
          </Suspense>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="corporate-card rounded-sm p-12 text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-heading font-semibold mb-2 text-slate-900">No resources found</h3>
              <p className="text-slate-500">We couldn&apos;t find any resources matching this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
