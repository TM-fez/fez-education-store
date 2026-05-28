import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { signup } from "../actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const resolvedParams = await searchParams;

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center p-3 bg-[var(--color-brand-500)] text-white rounded-xl mb-6 hover:scale-105 transition-transform">
            <GraduationCap className="w-8 h-8" />
          </Link>
          <h1 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-2">Create Account</h1>
          <p className="text-[var(--foreground)]/60 text-sm">Join Fez Education to access premium resources</p>
        </div>

        <div className="glass rounded-3xl p-8 shadow-2xl border-[var(--border)]">
          {resolvedParams.error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center">
              {resolvedParams.error}
            </div>
          )}

          <form action={signup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)]/80 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input 
                id="fullName" 
                name="fullName" 
                type="text" 
                required 
                placeholder="Jane Doe"
                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]/50 transition-shadow"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)]/80 mb-2" htmlFor="email">
                Email Address
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="you@company.com"
                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]/50 transition-shadow"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)]/80 mb-2" htmlFor="password">
                Password
              </label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                placeholder="••••••••"
                minLength={8}
                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]/50 transition-shadow"
              />
              <p className="mt-2 text-xs text-[var(--foreground)]/40">Must be at least 8 characters long</p>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] py-4 rounded-xl font-medium mt-2 hover:opacity-90 transition-opacity"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--border)]/50 text-center">
            <p className="text-sm text-[var(--foreground)]/60">
              Already have an account?{" "}
              <Link href="/login" className="text-[var(--foreground)] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
