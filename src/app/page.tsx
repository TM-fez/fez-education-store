import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, CheckCircle2, Shield, Star, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[var(--color-brand-900)]/20 to-transparent opacity-50 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[var(--color-brand-600)]/10 to-transparent opacity-40 blur-3xl pointer-events-none -z-10 rounded-full" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] glass text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-brand-500)]"></span>
            <span>Trusted by 500+ professionals in Botswana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-balance mx-auto max-w-4xl leading-[1.1] mb-6">
            Professional Training Built For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-500)] to-cyan-400">Real Workplace</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto text-balance mb-10">
            Elevate your career with premium digital courses designed specifically for Botswana's corporate landscape. Downloadable, actionable, and proven.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/store" 
              className="inline-flex items-center justify-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform w-full sm:w-auto"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-[var(--border)] text-[var(--foreground)] px-8 py-4 rounded-full font-medium hover:bg-[var(--foreground)]/5 transition-colors w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* STATISTICS GRID */}
      <section className="py-20 border-y border-[var(--border)] bg-[var(--card)]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center">
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm font-medium text-[var(--foreground)]/60">Active Students</dt>
              <dd className="text-4xl font-heading font-bold tracking-tight text-[var(--foreground)]">2,500+</dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm font-medium text-[var(--foreground)]/60">Digital Courses</dt>
              <dd className="text-4xl font-heading font-bold tracking-tight text-[var(--foreground)]">45+</dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm font-medium text-[var(--foreground)]/60">Corporate Partners</dt>
              <dd className="text-4xl font-heading font-bold tracking-tight text-[var(--foreground)]">120+</dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm font-medium text-[var(--foreground)]/60">Satisfaction Rate</dt>
              <dd className="text-4xl font-heading font-bold tracking-tight text-[var(--foreground)]">98%</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-semibold text-[var(--color-brand-500)] tracking-wide uppercase mb-3">Why Fez Education</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">A standard of excellence for African professionals.</p>
            <p className="text-[var(--foreground)]/70 text-lg text-balance">We don't just sell PDFs. We deliver structured knowledge that translates directly into career advancement and business growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl hover:border-[var(--color-brand-500)]/30 transition-colors">
              <div className="w-12 h-12 bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Industry Aligned</h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed">Courses structured around the real demands of the corporate sector in Botswana and SADC.</p>
            </div>
            
            <div className="glass p-8 rounded-2xl hover:border-[var(--color-brand-500)]/30 transition-colors">
              <div className="w-12 h-12 bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed">Bank-grade security for your purchases with robust offline payment verification tailored for local transactions.</p>
            </div>

            <div className="glass p-8 rounded-2xl hover:border-[var(--color-brand-500)]/30 transition-colors">
              <div className="w-12 h-12 bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Lifetime Access</h3>
              <p className="text-[var(--foreground)]/70 leading-relaxed">Download your resources instantly and keep them forever. Premium PDFs designed for easy reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-brand-900)]/10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="glass border-[var(--color-brand-500)]/20 p-12 md:p-20 rounded-3xl text-center flex flex-col items-center">
            <Trophy className="w-12 h-12 text-[var(--color-brand-500)] mb-6" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-6 max-w-2xl">
              Ready to accelerate your career?
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 mb-10 max-w-xl text-balance">
              Join thousands of professionals who have upgraded their skills with Fez Education's premium digital resources.
            </p>
            <Link 
              href="/store" 
              className="bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-500)] text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Browse Digital Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
