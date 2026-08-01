interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold text-[#0D0D0D] tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-[#0D0D0D]/70 max-w-2xl leading-relaxed mx-auto text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}
