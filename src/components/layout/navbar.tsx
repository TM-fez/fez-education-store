import Link from "next/link";
import { GraduationCap, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-[var(--color-brand-500)] text-white rounded-lg group-hover:bg-[var(--color-brand-600)] transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight">Fez Education</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/store" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors">Digital Store</Link>
          <Link href="/about" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors">About Us</Link>
          <Link href="/contact" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden md:block text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup" 
            className="text-sm font-medium bg-[var(--foreground)] text-[var(--background)] px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <button className="md:hidden p-2 text-[var(--foreground)]">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
