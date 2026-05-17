import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";

type CTAProps = {
  title: string;
  description: string;
  action: {
    href: string;
    label: string;
  };
};

export function CTA({ title, description, action }: CTAProps) {
  return (
    <section className="bg-neutral-soft py-16 md:py-20">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold text-brand-blue md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-brand-gray">
            {description}
          </p>
        </div>
        <ButtonLink href={action.href}>{action.label}</ButtonLink>
      </FadeIn>
    </section>
  );
}
