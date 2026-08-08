export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        {index} / {eyebrow}
      </p>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}
