import { User } from "lucide-react";
import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0D0D0D]/10 hover:shadow-md transition-shadow duration-300 text-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-[#0D0D0D] flex items-center justify-center mx-auto mb-4">
        <User size={36} className="text-white" />
      </div>
      <h3 className="font-bold text-[#0D0D0D] text-base">{member.name}</h3>
      <p className="text-sm text-neutral-700 font-medium mt-1">{member.role}</p>
      <p className="text-sm text-[#0D0D0D]/60 mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
    </div>
  );
}
