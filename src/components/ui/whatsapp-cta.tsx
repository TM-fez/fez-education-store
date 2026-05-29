import { Phone } from "lucide-react";

export function WhatsAppCTA() {
  const whatsappNumber = "+26771000000"; // Placeholder for actual number
  const message = "Hi Fez Education, I would like to request a corporate training consultation.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-105 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <Phone className="w-7 h-7 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-[var(--color-dark-900)] text-sm font-semibold px-3 py-2 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap pointer-events-none origin-right transform scale-95 group-hover:scale-100">
        Chat with a Training Expert
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></span>
      </span>
    </a>
  );
}
