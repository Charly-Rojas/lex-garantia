import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      aria-label={`Abrir WhatsApp de Lex Garantía ${siteConfig.contact.whatsapp}`}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25d366] bg-[#25d366] shadow-sm transition-colors hover:bg-[#1ebe5d]"
      href={siteConfig.contact.whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <span
        aria-hidden="true"
        className="h-7 w-7 bg-white"
        style={{
          WebkitMask:
            "url('/icons/whatsapp-brands-solid-full.svg') center / contain no-repeat",
          mask: "url('/icons/whatsapp-brands-solid-full.svg') center / contain no-repeat",
        }}
      />
    </a>
  );
}
