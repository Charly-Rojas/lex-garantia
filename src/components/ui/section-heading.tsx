type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div>
      <p
        className={`text-sm font-semibold uppercase ${
          inverted ? "text-white/70" : "text-brand-gray"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl ${
          inverted ? "text-white" : "text-brand-blue"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-7 ${
            inverted ? "text-white/80" : "text-brand-gray"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
