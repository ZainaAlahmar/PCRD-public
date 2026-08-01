import type { Metadata } from "next";
import { CheckCircle, Users, Award, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Learn about the Palestinian Center for Research and Cultural Dialogue (PCRD), its history, objectives, and organizational structure.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl">
            Learn about our center's history, mission, and the principles that guide our work.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 border border-[#0D0D0D]/10">
              <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">Our Mission</h2>
              <p className="text-[#0D0D0D]/70 leading-relaxed">{aboutData.mission}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#0D0D0D]/10">
              <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">Our Vision</h2>
              <p className="text-[#0D0D0D]/70 leading-relaxed">{aboutData.vision}</p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-8 border border-[#0D0D0D]/10 shadow-sm">
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-3">Our History</h2>
            <p className="text-[#0D0D0D]/70 leading-relaxed">{aboutData.history}</p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader title="Center Objectives" subtitle="The core principles and goals that define our work." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutData.objectives.map((obj) => (
              <div
                key={obj.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#0D0D0D]/10 hover:border-[#0D0D0D]/20 transition-colors flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-[#0D0D0D] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {obj.id}
                </div>
                <div>
                  <h3 className="font-bold text-[#0D0D0D] mb-1">{obj.title}</h3>
                  <p className="text-sm text-[#0D0D0D]/70 leading-relaxed">{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader title="Organizational Structure" subtitle="How the center is organized and governed." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.structure.map((item, i) => {
              const icons = [Users, Layers, Award, CheckCircle];
              const Icon = icons[i] || CheckCircle;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#0D0D0D]/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-[#0D0D0D] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0D0D0D]/60 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader title="Membership" subtitle="Who can join the center and what is required." />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#0D0D0D]/10 shadow-sm">
              <h3 className="font-bold text-[#0D0D0D] mb-4">Membership Types</h3>
              <ul className="space-y-2">
                {aboutData.membership.types.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[#0D0D0D]/70 text-sm">
                    <CheckCircle size={16} className="text-[#0D0D0D] flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#0D0D0D]/10 shadow-sm">
              <h3 className="font-bold text-[#0D0D0D] mb-4">Requirements</h3>
              <ul className="space-y-3">
                {aboutData.membership.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[#0D0D0D]/70 text-sm">
                    <CheckCircle size={16} className="text-[#0D0D0D] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#0D0D0D]/50 italic">{aboutData.membership.note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
