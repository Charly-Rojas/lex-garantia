import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_1.5fr] md:px-8">
        <div>
          <Image
            src="/brand/lex-garantia-logo-positive.jpeg"
            alt="Lex Garantía Arrendamiento"
            width={88}
            height={88}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-brand-gray">
            Pólizas jurídicas para contratos de arrendamiento de inmuebles.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-brand-blue">
              Navegación
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-brand-gray">
              {siteConfig.navItems.map((item) => (
                <Link
                  className="transition-colors hover:text-brand-blue"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-brand-blue">Contacto</h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-brand-gray">
              <p>{siteConfig.contact.email}</p>
              <p>Tel. {siteConfig.contact.phone}</p>
              <p>WhatsApp {siteConfig.contact.whatsapp}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
