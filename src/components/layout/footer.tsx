import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-[var(--color-brand-500)] text-white rounded-md">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="font-heading font-semibold text-lg">Fez Education</span>
          </Link>
          <p className="text-sm text-[var(--foreground)]/60 max-w-xs text-balance">
            Empowering Botswana through practical skills and professional training. Built for the modern workplace.
          </p>
        </div>
        
        <div>
          <h3 className="font-heading font-medium text-sm mb-4">Store</h3>
          <ul className="space-y-3 text-sm text-[var(--foreground)]/60">
            <li><Link href="/store" className="hover:text-[var(--foreground)] transition-colors">Browse Courses</Link></li>
            <li><Link href="/store?category=business" className="hover:text-[var(--foreground)] transition-colors">Business</Link></li>
            <li><Link href="/store?category=technology" className="hover:text-[var(--foreground)] transition-colors">Technology</Link></li>
            <li><Link href="/store?category=management" className="hover:text-[var(--foreground)] transition-colors">Management</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-heading font-medium text-sm mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-[var(--foreground)]/60">
            <li><Link href="/about" className="hover:text-[var(--foreground)] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--foreground)] transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 pt-8 border-t border-[var(--border)] text-sm text-[var(--foreground)]/40 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Fez Education. All rights reserved.</p>
        <p>Gaborone, Botswana</p>
      </div>
    </footer>
  );
}
