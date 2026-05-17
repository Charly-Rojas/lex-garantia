import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

type HeroAction = {
  href: string;
  label: string;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase text-brand-gray">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-brand-blue md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-gray">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
            <ButtonLink href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ButtonLink>
          </div>
        </div>
        <div className="flex items-center justify-center bg-neutral-soft p-8">
          <Image
            src="/brand/lex-garantia-logo-positive.jpeg"
            alt="Logotipo de Lex Garantía Arrendamiento"
            width={520}
            height={520}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
