"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2, TrendingDown, AlertTriangle, BarChart3, Users, Shield, Zap, Building2, ShoppingCart, Truck, HeadphonesIcon, Briefcase, Landmark, HardHat, BadgeDollarSign } from "lucide-react";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { products } from "@/lib/data";
import Image from "next/image";
import { ProductCard } from "@/components/store/product-card";

// ── INDUSTRY DATA ──────────────────────────────────────────────────────
const INDUSTRIES = [
  { id: "retail", label: "Retail", icon: ShoppingCart, challenges: ["Stock loss & shrinkage", "Poor customer service", "Weak supervisory skills", "Low staff accountability", "Communication breakdowns"] },
  { id: "hospitality", label: "Hospitality", icon: HeadphonesIcon, challenges: ["Inconsistent service quality", "High staff turnover", "Guest complaint handling", "Upselling deficiencies", "Hygiene non-compliance"] },
  { id: "logistics", label: "Logistics", icon: Truck, challenges: ["Operational delays & errors", "OHS non-compliance", "Poor team coordination", "Inventory inaccuracies", "Driver conduct issues"] },
  { id: "admin", label: "Administration", icon: Briefcase, challenges: ["Inefficient workflows", "Poor written communication", "Low productivity levels", "Weak time management", "Unclear accountability"] },
  { id: "customer-service", label: "Customer Service", icon: Users, challenges: ["High complaint volumes", "Escalation mismanagement", "Low satisfaction scores", "Inconsistent responses", "Poor empathy skills"] },
  { id: "public-sector", label: "Public Sector", icon: Landmark, challenges: ["Service delivery gaps", "Low citizen satisfaction", "Procurement irregularities", "Policy non-compliance", "Leadership capacity"] },
  { id: "mining", label: "Mining & Resources", icon: HardHat, challenges: ["OHS culture weaknesses", "High incident rates", "Supervisor competency", "Communication failures", "Risk management gaps"] },
  { id: "financial", label: "Financial Services", icon: BadgeDollarSign, challenges: ["Regulatory compliance gaps", "Customer relations risks", "Ethics & conduct issues", "Credit risk errors", "Data security awareness"] },
];

// ── CAPABILITY AREAS ───────────────────────────────────────────────────
const CAPABILITIES = [
  {
    id: "leadership",
    title: "Leadership & Management",
    icon: "🏛️",
    challenges: ["Poor delegation and micromanagement", "Low team accountability", "Weak conflict resolution", "Inability to motivate staff"],
    training: ["Leadership Development Workshop", "Management Essentials Program", "Team Building Facilitation"],
    resources: ["Leadership Toolkit & Workbook", "Management Essentials Guide"],
    outcomes: ["Higher team productivity", "Stronger accountability culture", "Reduced staff turnover", "Better organizational performance"],
  },
  {
    id: "customer-service",
    title: "Customer Service Excellence",
    icon: "🤝",
    challenges: ["Rising complaint volumes", "Inconsistent service quality", "Weak complaint resolution", "Poor brand perception"],
    training: ["Customer Service Excellence Workshop", "Customer Relations Management Program"],
    resources: ["Customer Service Training Manual", "CRM Implementation Guide"],
    outcomes: ["Reduced customer complaints", "Higher satisfaction scores", "Improved brand loyalty", "Increased repeat business"],
  },
  {
    id: "operations",
    title: "Operational Performance",
    icon: "⚙️",
    challenges: ["Uncontrolled stock shrinkage", "Weak QA processes", "OHS non-compliance", "Process inefficiencies"],
    training: ["Stock Loss & Shrinkage Mitigation", "Quality Assurance Fundamentals", "Occupational Health & Safety"],
    resources: ["Stock Loss Audit Toolkit", "Quality Assurance Manual"],
    outcomes: ["Measurable reduction in losses", "Improved process compliance", "Safer working environments", "Consistent service delivery"],
  },
  {
    id: "communication",
    title: "Business Communication",
    icon: "💬",
    challenges: ["Poor written communication quality", "Ineffective meetings", "Cross-department misalignment", "Unclear reporting chains"],
    training: ["Business Communication Workshop", "Workplace Etiquette & Professionalism", "Critical Thinking for Supervisors"],
    resources: ["Business Communication Workbook", "Workplace Etiquette Handbook"],
    outcomes: ["Clearer organizational communication", "Higher professionalism standards", "Better decision-making", "Improved interdepartmental collaboration"],
  },
];

// ── OUTCOMES DATA ───────────────────────────────────────────────────────
const OUTCOMES = [
  { stat: "↓ 40%", label: "Average reduction in stock loss reported by retail clients after intervention.", icon: TrendingDown },
  { stat: "↑ NPS", label: "Measurable improvement in customer satisfaction scores within 60 days.", icon: BarChart3 },
  { stat: "↑ 3×", label: "Leadership accountability improvement in teams after management training.", icon: Users },
  { stat: "↓ Incidents", label: "Reduction in OHS incidents in logistics clients following safety training.", icon: Shield },
  { stat: "↑ Output", label: "Operational productivity gains achieved through process improvement training.", icon: Zap },
  { stat: "↑ Retention", label: "Staff retention improvement in organizations that invest in development.", icon: Building2 },
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeCapability, setActiveCapability] = useState<string | null>(null);

  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeIndustry);
  const featuredProducts = products.filter((p) => p.is_featured).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "var(--color-surface-200)" }}>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — EXECUTIVE HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-slate-300 overflow-hidden">
        <HeroCarousel />
        <div className="hero-overlay absolute inset-0 z-[1]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-white/20 bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 bg-emerald-400 rounded-full" />
              <span>Botswana&apos;s Trusted Workforce Development Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-[1.08] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              Improve Workforce<br />
              <span className="text-emerald-400">Performance.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              We help organizations across Botswana solve critical people performance challenges — from stock loss and customer service to leadership effectiveness and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
              <Link href="/contact" className="btn-primary shadow-lg">
                Request Training Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#solutions" className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
                Explore Solutions
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-20 pt-8 border-t border-white/20 w-full animate-in fade-in duration-1000 delay-700">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Industries Served</p>
              <div className="flex flex-wrap gap-4 md:gap-8">
                {["Retail", "Hospitality", "Logistics", "Administration", "Financial Services", "Public Sector", "Mining"].map((ind) => (
                  <span key={ind} className="text-gray-300 font-medium text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 + 3 — CHOOSE YOUR INDUSTRY & THE REALITY
      ══════════════════════════════════════════════════════ */}
      <section id="solutions" className="py-24 section-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Your Industry. Your Challenges.</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              What performance challenges are costing your business?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Select your industry to see the most common workforce performance gaps we identify in Botswana businesses — and the true cost of leaving them unaddressed.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(isActive ? null : ind.id)}
                  className={`industry-card p-6 flex flex-col items-center text-center gap-3 transition-all ${isActive ? "active border-[var(--color-brand-navy)] shadow-lg !bg-[var(--color-brand-navy)] text-white" : ""}`}
                >
                  <Icon className={`w-8 h-8 ${isActive ? "text-white" : "text-[var(--color-brand-navy)]"}`} />
                  <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-slate-800"}`}>{ind.label}</span>
                </button>
              );
            })}
          </div>

          {/* THE REALITY — Dynamic Panel */}
          {selectedIndustry && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid lg:grid-cols-2 gap-8">
              {/* Challenges Column */}
              <div className="corporate-card p-8 border-l-4 border-l-[var(--color-brand-navy)]">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-slate-900">
                    Common Challenges in {selectedIndustry.label}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {selectedIndustry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-slate-700 font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Column */}
              <div className="corporate-card p-8 bg-slate-900 border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingDown className="w-6 h-6 text-red-400 shrink-0" />
                  <h3 className="text-xl font-heading font-bold text-white">
                    What These Challenges Cost
                  </h3>
                </div>
                <ul className="space-y-4">
                  {["Uncontrolled revenue leakage", "Increased customer complaints & churn", "Elevated staff turnover costs", "Reduced profitability & margins", "Regulatory and compliance risks"].map((cost) => (
                    <li key={cost} className="flex items-start gap-3">
                      <TrendingDown className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{cost}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <Link href="/contact" className="btn-emerald w-full justify-center">
                    Get a Performance Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — THE FEZ PERFORMANCE SYSTEM
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 section-grey border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Our Proprietary Methodology</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">The Fez Performance System™</h2>
            <p className="text-slate-600 text-lg">
              A structured, five-phase approach to lasting workforce improvement. Not a one-off training event — a complete performance improvement cycle.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {[
              { num: "01", title: "Diagnose", desc: "Identify specific performance gaps through structured needs analysis, operational observation, and stakeholder interviews. Define measurable baseline.", color: "bg-slate-800 text-white" },
              { num: "02", title: "Develop", desc: "Design and deliver targeted training programs — customized workshops, facilitated sessions, and practical skill-building interventions.", color: "bg-[var(--color-brand-navy)] text-white" },
              { num: "03", title: "Implement", desc: "Equip teams with practical implementation resources — toolkits, guides, workbooks, and checklists for immediate workplace application.", color: "bg-[var(--color-brand-navy-light)] text-white" },
              { num: "04", title: "Measure", desc: "Track improvements against defined KPIs. Assess behavioral change, performance metrics, and business impact post-intervention.", color: "bg-emerald-700 text-white" },
              { num: "05", title: "Improve", desc: "Institutionalize learning through continuous development cycles, refresher training, and advanced skill programs for sustained organizational growth.", color: "bg-emerald-600 text-white" },
            ].map((step, i) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-sm ${step.color} flex items-center justify-center text-sm font-bold shrink-0`}>
                    {step.num}
                  </div>
                  {i < 4 && <div className="step-connector my-1" />}
                </div>
                <div className="pb-10 pt-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/contact" className="btn-primary">
              Start with a Diagnostic Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CAPABILITY AREAS (Accordion)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 section-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Training Capability Areas</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Targeted solutions for every performance gap.
            </h2>
            <p className="text-slate-600 text-lg">
              Each capability area connects real workplace challenges to specific training solutions, practical resources, and measurable business outcomes.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {CAPABILITIES.map((cap) => {
              const isOpen = activeCapability === cap.id;
              return (
                <div key={cap.id} className="corporate-card overflow-hidden">
                  <button
                    onClick={() => setActiveCapability(isOpen ? null : cap.id)}
                    className="capability-header w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{cap.icon}</span>
                      <span className="text-lg font-heading font-bold text-slate-900">{cap.title}</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[var(--color-brand-navy)] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Challenges */}
                        <div>
                          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">Challenges</p>
                          <ul className="space-y-2">
                            {cap.challenges.map((c) => (
                              <li key={c} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Training */}
                        <div>
                          <p className="text-xs font-bold text-[var(--color-brand-navy)] uppercase tracking-widest mb-3">Training Programs</p>
                          <ul className="space-y-2">
                            {cap.training.map((t) => (
                              <li key={t} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-navy)] shrink-0" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Resources */}
                        <div>
                          <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Implementation Resources</p>
                          <ul className="space-y-2">
                            {cap.resources.map((r) => (
                              <li key={r} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Outcomes */}
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Business Outcomes</p>
                          <ul className="space-y-2">
                            {cap.outcomes.map((o) => (
                              <li key={o} className="text-sm text-slate-700 font-medium flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                        <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">
                          Request Training Proposal
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link href="/store" className="btn-secondary !py-2.5 !px-5 !text-sm">
                          Browse Resources
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — IMPLEMENTATION RESOURCES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 section-grey border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Implementation Resources</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                Practical tools that reinforce every training initiative.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our professionally developed toolkits, workbooks, and manuals are not standalone products. They are the implementation layer of the Fez Performance System — designed for immediate workplace application.
              </p>
            </div>
            <Link href="/store" className="btn-secondary shrink-0">
              Browse All Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — BUSINESS OUTCOMES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 section-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-14 mx-auto text-center">
            <p className="text-sm font-bold text-[var(--color-brand-navy)] tracking-widest uppercase mb-3">Measurable Impact</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              We measure success by your business results.
            </h2>
            <p className="text-slate-600 text-lg">
              Our interventions are designed to produce quantifiable improvements in operational performance, customer experience, and people management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {OUTCOMES.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.stat} className="outcome-panel">
                  <Icon className="w-6 h-6 text-[var(--color-brand-navy)] mb-4" />
                  <p className="text-3xl font-heading font-bold text-slate-900 mb-2">{o.stat}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{o.label}</p>
                </div>
              );
            })}
          </div>

          {/* Two Ways Section */}
          <div className="border-t border-slate-200 pt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Two Ways To Work With Fez Education</h3>
              <p className="text-slate-600">We provide flexible engagement models for immediate needs and long-term transformation.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="corporate-card p-8 border-t-4 border-t-[var(--color-brand-navy)] flex flex-col">
                <div className="inline-block bg-[var(--color-brand-navy)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5 w-fit">Premium Service</div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Corporate Training Services</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Customized, expert-facilitated workshops and training programs for organizations seeking measurable workforce performance improvement. Tailored to your industry, your challenges, your team.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Enterprise teams & multi-branch organizations", "HR & Learning/Development Managers", "Executive Leadership & Board Level"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Request Training Proposal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="corporate-card p-8 border-t-4 border-t-slate-300 flex flex-col">
                <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5 w-fit border border-slate-300">Resource Library</div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">Implementation Resources</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  Professionally developed training manuals, toolkits, and workbooks. Ideal for immediate deployment and supporting ongoing training initiatives. Trusted by supervisors and managers across Botswana.
                </p>
                <ul className="space-y-2 mb-8">
                  {["Individuals & independent professionals", "Department supervisors & managers", "Entrepreneurs & small teams"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link href="/store" className="btn-secondary w-full justify-center">
                  Browse Resource Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA / CONVERSION
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[var(--color-brand-navy)]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">Take the Next Step</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Improve Workforce Performance?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you are dealing with stock loss, customer complaints, weak leadership, or operational inefficiency — Fez Education has a structured, practical solution designed for the Botswana business environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-emerald !px-10 !py-4 !text-base shadow-lg">
              Request Training Proposal
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/store" className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 !px-10 !py-4 !text-base">
              Browse Implementation Resources
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Complimentary initial consultation for organizations in Botswana.
          </p>
        </div>
      </section>
    </div>
  );
}
