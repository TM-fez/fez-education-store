"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, CheckCircle2, ShieldCheck, Mail, Phone, ChevronDown } from "lucide-react";
import { submitCorporateLead } from "@/app/actions/lead";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitCorporateLead(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "Something went wrong.");
    }
    
    setIsSubmitting(false);
  }

  return (
    <div className="flex-1 py-12 min-h-screen" style={{ backgroundColor: "var(--color-surface-200)" }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16">
          {/* Left Column: Context */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-slate-300 bg-slate-100 text-sm font-medium mb-8 text-slate-700 w-fit">
              <span className="flex h-2 w-2 bg-[var(--color-brand-navy)] rounded-full"></span>
              <span>Corporate Training Division</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 leading-tight">
              Transform Your Workforce
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Fez Education partners with organizations across the SADC region to deliver actionable, high-impact training. Request a consultation below to discuss your specific operational challenges and how our customized workshops can drive immediate performance improvements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-brand-navy)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Tailored Solutions</h3>
                  <p className="text-slate-500 text-sm">We adapt our frameworks to address your specific industry vulnerabilities and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[var(--color-brand-navy)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">On-Site & Executive Delivery</h3>
                  <p className="text-slate-500 text-sm">Training can be facilitated at your premises or designated corporate venues in Botswana.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Direct Contact</p>
              <div className="flex flex-col gap-3 text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <span>corporate@fezeducation.co.bw</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <span>+267 390 0000</span>
                </div>
              </div>
            </div>

            {/* Cross-Pollination: Secondary Action */}
            <div className="mt-12 p-6 rounded-sm bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">Looking for immediate implementation?</h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                Support your training initiative with practical guides, toolkits, and implementation resources from the Fez Education Resource Library.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-brand-navy)] bg-transparent border border-[var(--color-brand-navy)] px-5 py-2.5 rounded-sm hover:bg-[var(--color-brand-navy)] hover:text-white transition-colors"
              >
                Browse Supporting Resources
              </Link>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="corporate-card p-8 md:p-10 relative overflow-hidden">
            {isSuccess ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-500 z-10">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Proposal Requested</h2>
                <p className="text-slate-600 mb-8 max-w-sm">
                  Thank you for your interest. A dedicated corporate training specialist will review your requirements and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : null}

            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8">Request Training Proposal</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact_person" className="block text-sm font-medium text-slate-700">Full Name *</label>
                  <input required type="text" id="contact_person" name="contact_person" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="e.g. Thabo Modise" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company_name" className="block text-sm font-medium text-slate-700">Company Name *</label>
                  <input required type="text" id="company_name" name="company_name" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="e.g. Acme Logistics" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">Corporate Email *</label>
                  <input required type="email" id="email" name="email" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="thabo@company.co.bw" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="+267 ..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="organization_type" className="block text-sm font-medium text-gray-300">Industry</label>
                  <div className="relative">
                    <select id="organization_type" name="organization_type" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors">
                      <option value="">Select Industry</option>
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality & Tourism</option>
                      <option value="Logistics">Logistics & Warehousing</option>
                      <option value="Financial">Financial Services</option>
                      <option value="Government">Government / Parastatal</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="employee_count" className="block text-sm font-medium text-gray-300">Team Size</label>
                  <div className="relative">
                    <select id="employee_count" name="employee_count" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors">
                      <option value="">Select Size</option>
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="training_interest" className="block text-sm font-medium text-gray-300">Primary Training Interest *</label>
                  <div className="relative">
                    <select required id="training_interest" name="training_interest" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors">
                      <option value="">Select an area of focus</option>
                      <option value="Leadership & Team Building">Leadership & Team Building</option>
                      <option value="Customer Service Excellence">Customer Service Excellence</option>
                      <option value="Stock Loss & Shrinkage">Stock Loss & Shrinkage Mitigation</option>
                      <option value="Workplace Professionalism">Workplace Professionalism & Ethics</option>
                      <option value="Other">Other Custom Requirement</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget_range" className="block text-sm font-medium text-gray-300">Budget Range</label>
                  <div className="relative">
                    <select id="budget_range" name="budget_range" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors">
                      <option value="">Select Budget</option>
                      <option value="Under P10,000">Under P10,000</option>
                      <option value="P10,000 - P25,000">P10,000 - P25,000</option>
                      <option value="P25,000 - P50,000">P25,000 - P50,000</option>
                      <option value="P50,000+">P50,000+</option>
                      <option value="TBD">To Be Discussed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300">Training Location</label>
                  <input type="text" id="location" name="location" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="e.g. Gaborone, Francistown, On-site" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferred_dates" className="block text-sm font-medium text-gray-300">Preferred Dates / Timeline</label>
                  <input type="text" id="preferred_dates" name="preferred_dates" className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="e.g. Next month, Q3 2026" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Additional Details (Optional)</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-white border border-slate-300 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:border-[var(--color-brand-navy)] transition-colors" placeholder="Briefly describe the specific operational challenges your team is facing..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--color-brand-navy)] text-white py-4 rounded-sm font-bold text-lg hover:bg-[var(--color-brand-navy-light)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>Processing Inquiry...</>
                ) : (
                  <>Submit Inquiry</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
