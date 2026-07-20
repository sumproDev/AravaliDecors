export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
