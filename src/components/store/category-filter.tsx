"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/data";

interface CategoryFilterProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  return (
    <div className="flex flex-wrap items-center gap-3 mb-10">
      <Link
        href="/store"
        className={cn(
          "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
          !activeCategory
            ? "bg-[var(--foreground)] text-[var(--background)] shadow-md"
            : "bg-[var(--card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/30"
        )}
      >
        All Courses
      </Link>
      
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/store?category=${category.slug}`}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category.slug
              ? "bg-[var(--foreground)] text-[var(--background)] shadow-md"
              : "bg-[var(--card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--foreground)]/30"
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
