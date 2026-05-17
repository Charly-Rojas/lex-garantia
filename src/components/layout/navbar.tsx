"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl flex-col px-6 py-4 md:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            className="flex items-center gap-3"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/brand/lex-garantia-logo-positive-transparent.png"
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
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center border border-neutral-200 text-brand-blue md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <div className="hidden gap-x-6 text-sm font-medium text-brand-gray md:flex">
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
        {isOpen ? (
          <div
            className="mt-4 grid gap-2 border-t border-neutral-200 pt-4 text-sm font-medium text-brand-gray md:hidden"
            id="mobile-menu"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                className="px-1 py-3 transition-colors hover:text-brand-blue"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
