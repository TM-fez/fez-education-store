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
    <div className="flex-1 bg-[var(--color-dark-900)] py-12 border-b border-[var(--color-dark-600)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Training Resource Store
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Equip your teams with premium, outcome-driven professional development materials and practical implementation guides.
            </p>
          </div>
        </div>
      </div>

      {/* Catalog Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <Suspense fallback={<div className="h-10 mb-10 bg-[var(--card)] animate-pulse rounded-full w-full max-w-md"></div>}>
            <CategoryFilter categories={categories} />
          </Suspense>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="glass rounded-2xl p-12 text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-heading font-semibold mb-2">No courses found</h3>
              <p className="text-[var(--foreground)]/60">We couldn't find any courses matching this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
