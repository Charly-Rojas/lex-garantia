import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="/brand/lex-garantia-logo-positive.jpeg"
            alt="Lex Garantía Arrendamiento"
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain"
          />
          <span className="text-sm font-semibold uppercase text-brand-blue">
            Lex Garantía
          </span>
        </Link>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-gray">
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
      </nav>
    </header>
  );
}
