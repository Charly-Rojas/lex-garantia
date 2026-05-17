import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      aria-label={`Abrir WhatsApp de Lex Garantía ${siteConfig.contact.whatsapp}`}
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center gap-2 border border-brand-blue bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors visited:text-white hover:bg-[#142635] hover:text-white"
      href={siteConfig.contact.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      <span>WhatsApp {siteConfig.contact.whatsapp}</span>
    </a>
  );
}
