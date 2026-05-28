import Link from "next/link";
import { ArrowRight, Building2, Briefcase, ShieldCheck, PieChart, Users, BarChart3, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-dark-900)]">
      {/* EXECUTIVE HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[85vh] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-[var(--color-dark-600)] bg-[var(--color-dark-800)] text-sm font-medium mb-8 text-gray-300">
            <span className="flex h-2 w-2 bg-emerald-500"></span>
            <span>Trusted Workforce Development Partner</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6">
            Professional Training Solutions for Botswana
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-balance mb-10 leading-relaxed">
            Equipping organizations and professionals with practical, outcome-driven skills in Leadership, Customer Excellence, and Operational Management across the SADC region.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/store" 
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-dark-900)] px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              View Training Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-8 py-4 rounded-sm font-medium hover:bg-[var(--color-dark-800)] transition-colors w-full sm:w-auto"
            >
              Consult with Our Experts
            </Link>
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE AREAS */}
      <section className="py-24 bg-[var(--color-dark-800)] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Core Competencies</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Workplace Skills Development</p>
            <p className="text-gray-400 text-lg">We deliver structured knowledge that translates directly into measurable business outcomes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <Users className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Leadership Development</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Programs designed for managers and executives to drive team performance and navigate organizational change.</p>
            </div>
            
            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <Building2 className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Customer Service Excellence</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Strategies tailored for the local market to elevate service standards, manage expectations, and build brand loyalty.</p>
            </div>

            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <ShieldCheck className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Stock Loss & Shrinkage</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Practical methodologies for retail and warehousing operations to mitigate inventory loss and secure supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SUPPORT */}
      <section className="py-24 bg-[var(--color-dark-900)] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Sector Expertise</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Industries We Support</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="corporate-card p-6 flex flex-col items-center text-center">
              <Briefcase className="w-6 h-6 text-gray-300 mb-3" />
              <span className="font-semibold text-white text-sm">Financial Services</span>
            </div>
            <div className="corporate-card p-6 flex flex-col items-center text-center">
              <PieChart className="w-6 h-6 text-gray-300 mb-3" />
              <span className="font-semibold text-white text-sm">Public Sector & Gov</span>
            </div>
            <div className="corporate-card p-6 flex flex-col items-center text-center">
              <BarChart3 className="w-6 h-6 text-gray-300 mb-3" />
              <span className="font-semibold text-white text-sm">Mining & Resources</span>
            </div>
            <div className="corporate-card p-6 flex flex-col items-center text-center">
              <GraduationCap className="w-6 h-6 text-gray-300 mb-3" />
              <span className="font-semibold text-white text-sm">Tourism & Hospitality</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING CTA */}
      <section className="py-24 bg-[var(--color-dark-800)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="corporate-card p-12 md:p-16 border-l-4 border-l-white">
            <div className="md:flex items-center justify-between gap-12">
              <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  Corporate Training Services
                </h2>
                <p className="text-gray-400 max-w-xl text-lg">
                  Require bespoke workshops or bulk procurement of our training resources for your team? Partner with Fez Education for customized workforce development.
                </p>
              </div>
              <div className="shrink-0">
                <Link 
                  href="/contact" 
                  className="inline-flex bg-white text-[var(--color-dark-900)] px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Corporate Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
