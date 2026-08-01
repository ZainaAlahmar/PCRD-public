import Link from "next/link";
import { ArrowRight, Target, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutData } from "@/data/about";

export function AboutSection() {
  const highlights = [
    { icon: Target, title: "Research", desc: "Conducting studies on Arab and Palestinian civilization" },
    { icon: Users, title: "Dialogue", desc: "Organizing seminars with local and international experts" },
    { icon: Globe, title: "Exchange", desc: "Hosting delegations and promoting cultural exchange" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="About PCRD"
          subtitle={aboutData.mission}
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-[#0D0D0D]/10">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <Icon size={24} className="text-[#0D0D0D]" />
              </div>
              <h4 className="font-semibold text-[#0D0D0D] text-base">{title}</h4>
              <p className="text-sm text-[#0D0D0D]/60 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/about">
            <Button variant="primary" size="lg">
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
