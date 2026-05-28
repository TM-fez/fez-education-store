import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";
import { login } from "../actions";

export default async function LoginPage({
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
          <h1 className="text-3xl font-heading font-bold text-[var(--foreground)] mb-2">Welcome Back</h1>
          <p className="text-[var(--foreground)]/60 text-sm">Sign in to access your digital courses</p>
        </div>

        <div className="glass rounded-3xl p-8 shadow-2xl border-[var(--border)]">
          {resolvedParams.error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center">
              {resolvedParams.error}
            </div>
          )}

          <form action={login} className="space-y-5">
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
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-[var(--foreground)]/80" htmlFor="password">
                  Password
                </label>
                <Link href="#" className="text-xs font-medium text-[var(--color-brand-500)] hover:text-[var(--color-brand-400)] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                placeholder="••••••••"
                className="w-full bg-[var(--background)]/50 border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]/50 transition-shadow"
              />
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] py-4 rounded-xl font-medium mt-2 hover:opacity-90 transition-opacity"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--border)]/50 text-center">
            <p className="text-sm text-[var(--foreground)]/60">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[var(--foreground)] font-medium hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
