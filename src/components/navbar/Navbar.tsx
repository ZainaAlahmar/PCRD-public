"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-white border-b border-[#0D0D0D]/10"
      )}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        <div className="relative flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
            <div className="relative w-14 h-14">
              <Image
                src="/images/logo/pcrd-logo.png"
                alt={`${siteConfig.shortName} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-extrabold text-[#0D0D0D] leading-tight">
                {siteConfig.shortName}
              </div>
              <div className="text-sm text-[#0D0D0D]/60 leading-tight max-w-[220px]">
                Palestinian Center for Research
              </div>
            </div>
          </Link>

          {/* Desktop Nav — absolutely centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-[58%] -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = item.href 
                ? (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                : item.subItems?.some(sub => pathname.startsWith(sub.href || ""));

              if (item.subItems) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-[#0D0D0D] text-white"
                          : "text-[#0D0D0D]/70 hover:text-[#0D0D0D] hover:bg-neutral-50"
                      )}
                    >
                      {item.label} <ChevronDown size={14} />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-[#0D0D0D]/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href!}
                          className="block px-4 py-2 text-sm text-[#0D0D0D]/70 hover:bg-neutral-50 hover:text-[#0D0D0D]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#0D0D0D] text-white"
                      : "text-[#0D0D0D]/70 hover:text-[#0D0D0D] hover:bg-neutral-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden ml-auto p-2 rounded-lg text-[#0D0D0D]/70 hover:bg-neutral-100 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#0D0D0D]/10 shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.subItems) {
                  return (
                    <div key={item.label} className="flex flex-col gap-1">
                      <div className="px-4 py-2.5 text-sm font-bold text-[#0D0D0D]/50 uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.subItems.map(subItem => {
                        const isSubActive = pathname.startsWith(subItem.href || "");
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href!}
                            className={cn(
                              "pl-8 pr-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                              isSubActive
                                ? "bg-[#0D0D0D] text-white"
                                : "text-[#0D0D0D]/80 hover:bg-neutral-50 hover:text-[#0D0D0D]"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }

                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href || "");
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={cn(
                      "px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "bg-[#0D0D0D] text-white"
                        : "text-[#0D0D0D]/80 hover:bg-neutral-50 hover:text-[#0D0D0D]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
