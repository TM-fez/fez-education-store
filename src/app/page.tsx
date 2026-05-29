import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Briefcase, ShieldCheck, PieChart, Users, BarChart3, GraduationCap, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { HeroCarousel } from "@/components/home/hero-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-dark-900)]">
      {/* FULL-WIDTH HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center border-b border-[var(--color-dark-600)] overflow-hidden">
        <HeroCarousel />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-4xl text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 px-4 py-1.5 rounded-sm border border-gray-500/30 bg-[var(--color-dark-900)]/60 backdrop-blur-md text-sm font-medium mb-8 text-gray-300 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 bg-emerald-500"></span>
              <span>Trusted Botswana Corporate Training Company</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
              Professional Workforce Development & Training Solutions
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-300 text-balance mb-10 leading-relaxed max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
              Helping organizations build leadership capability, customer service excellence, operational effectiveness, and workplace performance through practical training solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 fill-mode-both">
              <Link 
                href="/store" 
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-dark-900)] px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Explore Training Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-400/50 text-white px-8 py-4 rounded-sm font-medium hover:bg-black/30 backdrop-blur-sm transition-colors w-full sm:w-auto"
              >
                Request Corporate Training Consultation
              </Link>
            </div>
          </div>
          
          {/* Trust Bar */}
          <div className="mt-20 pt-8 border-t border-gray-500/30 w-full animate-in fade-in duration-1000 delay-700 fill-mode-both">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center md:text-left">Industries Served</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
              {['Retail', 'Hospitality', 'Logistics', 'Administration', 'Customer Service', 'Leadership Development'].map((industry) => (
                <span key={industry} className="text-gray-300 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ORGANIZATIONS CHOOSE FEZ EDUCATION */}
      <section className="py-24 bg-[var(--color-dark-800)] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Institutional Trust</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why Organizations Choose Fez Education</p>
            <p className="text-gray-400 text-lg">We deliver structured, Botswana-focused learning that translates directly into measurable workforce capability building.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <Users className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Practical Workplace Learning</h3>
              <p className="text-gray-400 leading-relaxed text-sm">We focus on actionable skills and real-world scenarios, moving beyond theory to ensure immediate application in the professional environment.</p>
            </div>
            
            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <Building2 className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Botswana-Focused Delivery</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Our training resources and consulting services are tailored to the unique economic, cultural, and operational realities of the SADC region.</p>
            </div>

            <div className="corporate-card p-8 hover:border-gray-400 transition-colors">
              <ShieldCheck className="w-8 h-8 text-white mb-6" />
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Workforce Capability Building</h3>
              <p className="text-gray-400 leading-relaxed text-sm">We partner with HR managers and business owners to systemize professional development and elevate the baseline of organizational competence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING SERVICES & AREAS */}
      <section className="py-24 bg-[var(--color-dark-900)] border-b border-[var(--color-dark-600)] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Corporate Training Services</h2>
              <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Your Partner in Operational Excellence</p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Fez Education provides more than just training manuals. We are a dedicated workforce development partner, specializing in equipping your staff with the critical skills required to drive your business forward.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-gray-300">Leadership & Management Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-gray-300">Customer Service Excellence Training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-gray-300">Stock Loss & Shrinkage Mitigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-gray-300">Professional Communication & Etiquette</span>
                </li>
              </ul>
            </div>
            
            <div className="corporate-card p-10 bg-[var(--color-dark-800)] border-gray-600">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Need Corporate Training For Your Team?</h3>
              <p className="text-gray-400 mb-8">
                Whether you need a customized workshop for your executive board or a comprehensive frontline staff training program, our experts are ready to assist.
              </p>
              <Link 
                href="/contact" 
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[var(--color-dark-900)] px-6 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
                <MessageSquare className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SUPPORT */}
      <section className="py-24 bg-[var(--color-dark-800)] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Sector Expertise</h2>
            <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Industries We Support</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/industry_retail.png" alt="Retail Operations" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <PieChart className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Retail Operations</span>
              </div>
            </div>
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/industry_hospitality.png" alt="Hospitality & Tourism" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <GraduationCap className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Hospitality & Tourism</span>
              </div>
            </div>
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/industry_logistics.png" alt="Logistics & Warehousing" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <BarChart3 className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Logistics & Warehousing</span>
              </div>
            </div>
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/industry_admin.png" alt="Corporate Administration" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <Briefcase className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Corporate Administration</span>
              </div>
            </div>
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/industry_admin.png" alt="Customer Service Centers" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <Users className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Customer Service Centers</span>
              </div>
            </div>
            <div className="corporate-card relative h-48 flex flex-col items-center justify-center text-center overflow-hidden group">
              <Image src="/images/hero_botswana_training.png" alt="Leadership Development" fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-900)]/90 to-transparent"></div>
              <div className="relative z-10">
                <Building2 className="w-8 h-8 text-white mb-3 mx-auto" />
                <span className="font-semibold text-white text-lg">Executive Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET FEZ EDUCATION */}
      <section className="py-24 bg-[var(--color-dark-900)] border-b border-[var(--color-dark-600)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">About Us</h2>
          <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">Meet Fez Education</p>
          <div className="prose prose-invert prose-lg mx-auto text-gray-400">
            <p className="mb-6">
              Fez Education was established with a singular mission: to bridge the gap between theoretical knowledge and practical workplace execution in Botswana. We understand that modern businesses require more than generic advice—they need structured, actionable training frameworks that directly impact the bottom line.
            </p>
            <p className="mb-6">
              We are a team of corporate training professionals, operational specialists, and curriculum designers dedicated to workforce development. Our philosophy is rooted in practical application. Every resource we publish and every workshop we facilitate is designed to solve real-world operational challenges, from mitigating stock shrinkage to elevating customer service standards to world-class levels.
            </p>
            <p>
              When you partner with Fez Education, you are investing in a structured path to organizational excellence, tailored specifically for the demands of the SADC business landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
