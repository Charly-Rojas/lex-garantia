import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center border border-brand-blue bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#142635]"
      : "inline-flex min-h-12 items-center justify-center border border-brand-gray bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-neutral-soft";

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
