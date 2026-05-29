import Link from "next/link";
import { GraduationCap, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-2 bg-[var(--color-brand-navy)] text-white rounded-sm group-hover:bg-[var(--color-brand-navy-light)] transition-colors">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-base tracking-tight text-slate-900">Fez Education</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Workforce Development</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/#solutions" className="text-slate-600 hover:text-[var(--color-brand-navy)] transition-colors">Solutions</Link>
          <Link href="/store" className="text-slate-600 hover:text-[var(--color-brand-navy)] transition-colors">Resources</Link>
          <Link href="/contact" className="text-slate-600 hover:text-[var(--color-brand-navy)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold bg-[var(--color-brand-navy)] text-white px-5 py-2.5 rounded-sm hover:bg-[var(--color-brand-navy-light)] transition-colors"
          >
            Request Proposal
          </Link>
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
