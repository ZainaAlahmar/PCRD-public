import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/constants/site";

export function Hero() {
  return (
    <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/30" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-white/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" />
              Established in Beit Sahour, Palestine — 2003
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
              {siteConfig.name}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl mb-8">
              We play an essential role in bridging the gap between different peoples and cultures,
              promoting intercultural dialogue, and working towards a just and lasting peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/activities">
                <Button
                  size="lg"
                  className="bg-white text-[#0D0D0D] hover:bg-white focus:ring-white w-full sm:w-auto"
                >
                  <ArrowRight size={18} className="mr-2" />
                  Explore Activities
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#0D0D0D] focus:ring-white w-full sm:w-auto"
                >
                  <BookOpen size={18} className="mr-2" />
                  About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 bg-white/10 backdrop-blur-sm rounded-full p-6 border border-white/20">
              <Image
                src="/images/logo/pcrd-logo.png"
                alt="PCRD Logo"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
          {[
            { label: "Years of Service", value: "23+" },
            { label: "Research Activities", value: "100+" },
            { label: "International Partners", value: "50+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
