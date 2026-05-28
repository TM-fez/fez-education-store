import { Suspense } from "next";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/store/product-card";
import { CategoryFilter } from "@/components/store/category-filter";

interface StorePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function StorePage({ searchParams }: StorePageProps) {
  const resolvedParams = await searchParams;
  const categorySlug = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
  
  const categoryId = categorySlug 
    ? categories.find(c => c.slug === categorySlug)?.id 
    : undefined;

  const filteredProducts = categoryId 
    ? products.filter(p => p.category_id === categoryId)
    : products;

  return (
    <div className="flex-1 bg-[var(--background)]">
      {/* Store Header */}
      <section className="pt-12 pb-8 border-b border-[var(--border)] bg-[var(--card)]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4 text-[var(--foreground)]">
            Digital Courses
          </h1>
          <p className="text-lg text-[var(--foreground)]/70 max-w-2xl text-balance">
            Premium, downloadable training materials built specifically to accelerate your career in the African corporate sector.
          </p>
        </div>
      </section>

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
