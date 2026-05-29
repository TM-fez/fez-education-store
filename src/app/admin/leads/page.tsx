import { createClient } from "@/lib/supabase/server";
import { updateLeadStatus } from "@/app/actions/lead";
import { Building2, Mail, Phone, Users, Calendar } from "lucide-react";

export default async function AdminLeadsPage() {
  const supabase = await createClient();

  const { data: leads, error } = await supabase
    .from("corporate_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching leads:", error);
  }

  const formatStatus = (status: string) => {
    switch(status) {
      case 'new': return 'New';
      case 'contacted': return 'Contacted';
      case 'proposal_sent': return 'Proposal Sent';
      case 'won': return 'Won';
      case 'lost': return 'Lost';
      default: return status;
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'contacted': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'proposal_sent': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'won': return 'bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)] border-[var(--color-brand-500)]/20';
      case 'lost': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-white mb-8">Corporate Training Leads</h1>
      
      {(!leads || leads.length === 0) ? (
        <div className="corporate-card p-12 text-center text-gray-400">
          <Building2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium">No corporate leads yet.</p>
          <p className="text-sm">Inquiries submitted via the contact form will appear here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {leads.map((lead) => (
            <div key={lead.id} className="corporate-card p-6 bg-[var(--color-dark-800)] flex flex-col lg:flex-row gap-6 border-l-4" style={{borderLeftColor: lead.status === 'new' ? '#10b981' : 'transparent'}}>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{lead.company_name}</h3>
                    <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                      <span className="font-medium text-gray-300">{lead.contact_person}</span>
                      <span className="text-gray-600">•</span>
                      <span>{lead.organization_type}</span>
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(lead.status)}`}>
                    {formatStatus(lead.status)}
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                  </div>
                  {lead.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${lead.phone}`} className="hover:text-white transition-colors">{lead.phone}</a>
                    </div>
                  )}
                  {lead.employee_count && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{lead.employee_count} employees</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-dark-600)]">
                  <p className="text-sm font-semibold text-white mb-2">Training Interest: <span className="text-emerald-400 font-normal">{lead.training_interest}</span></p>
                  {lead.message && (
                    <div className="p-3 bg-[var(--color-dark-900)] rounded-sm text-sm text-gray-400 border border-[var(--color-dark-600)]">
                      {lead.message}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="lg:w-48 flex flex-col gap-2 shrink-0 border-t lg:border-t-0 lg:border-l border-[var(--color-dark-600)] pt-4 lg:pt-0 lg:pl-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Update Status</p>
                <form action={async () => {
                  "use server";
                  await updateLeadStatus(lead.id, 'contacted');
                }}>
                  <button type="submit" disabled={lead.status === 'contacted'} className="w-full text-left px-3 py-2 text-sm rounded-sm hover:bg-gray-700 transition-colors disabled:opacity-50 text-blue-400">Mark Contacted</button>
                </form>
                <form action={async () => {
                  "use server";
                  await updateLeadStatus(lead.id, 'proposal_sent');
                }}>
                  <button type="submit" disabled={lead.status === 'proposal_sent'} className="w-full text-left px-3 py-2 text-sm rounded-sm hover:bg-gray-700 transition-colors disabled:opacity-50 text-purple-400">Proposal Sent</button>
                </form>
                <form action={async () => {
                  "use server";
                  await updateLeadStatus(lead.id, 'won');
                }}>
                  <button type="submit" disabled={lead.status === 'won'} className="w-full text-left px-3 py-2 text-sm rounded-sm hover:bg-gray-700 transition-colors disabled:opacity-50 text-[var(--color-brand-500)]">Closed Won</button>
                </form>
                <form action={async () => {
                  "use server";
                  await updateLeadStatus(lead.id, 'lost');
                }}>
                  <button type="submit" disabled={lead.status === 'lost'} className="w-full text-left px-3 py-2 text-sm rounded-sm hover:bg-gray-700 transition-colors disabled:opacity-50 text-red-400">Closed Lost</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
