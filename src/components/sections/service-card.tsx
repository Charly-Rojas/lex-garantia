type ServiceCardProps = {
  title: string;
  description: string;
  items: readonly string[];
};

export function ServiceCard({ title, description, items }: ServiceCardProps) {
  return (
    <article className="border border-neutral-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-brand-blue">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-gray">{description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-blue"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
