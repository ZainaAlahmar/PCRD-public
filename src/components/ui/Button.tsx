"use client";

import { cn } from "@/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-[#0D0D0D] text-white hover:bg-[#1a1a1a] focus:ring-[#0D0D0D]":
              variant === "primary",
            "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400":
              variant === "secondary",
            "text-[#0D0D0D] hover:bg-white focus:ring-[#0D0D0D]":
              variant === "ghost",
            "border-2 border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white focus:ring-[#0D0D0D]":
              variant === "outline",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-7 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
