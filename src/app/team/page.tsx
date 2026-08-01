import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Meet the dedicated team behind the Palestinian Center for Research and Cultural Dialogue.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Our Team</h1>
          <p className="text-white/80 mt-3 text-lg">
            Meet the people dedicated to promoting dialogue and research.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionHeader title="Meet Our Team" subtitle="Academics, researchers, and administrators united by a shared mission." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
