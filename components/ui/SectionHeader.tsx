interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold text-neutral-900">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-neutral-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
