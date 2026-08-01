import { cn } from "@/utils";

// All badges use monochrome styling in the black & white theme
interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#0D0D0D]/30 bg-[#f4f4f4] text-neutral-800",
        className
      )}
    >
      {label}
    </span>
  );
}
