import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { navItems } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image
                  src="/images/logo/pcrd-logo.png"
                  alt="PCRD Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg">{siteConfig.shortName}</div>
                <div className="text-xs text-white/50 leading-tight">
                  Palestinian Center for Research
                  <br />& Cultural Dialogue
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Bridging cultures and promoting dialogue for a just and lasting peace. Founded in 2003, registered under the Palestinian Authority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.flatMap((item) => item.subItems || item).map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href!}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={16} className="mt-0.5 text-white/50 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone size={16} className="text-white/50 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail size={16} className="text-white/50 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
