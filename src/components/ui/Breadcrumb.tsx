"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[#0D0D0D]/60">
      <Link href="/" className="flex items-center gap-1 hover:text-[#0D0D0D] transition-colors">
        <Home size={14} />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight size={14} className="text-[#0D0D0D]/50" />
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-[#0D0D0D] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
