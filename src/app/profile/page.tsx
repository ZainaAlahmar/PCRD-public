import type { Metadata } from "next";
import { DocumentCard } from "@/components/cards/DocumentCard";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Learn more about the Palestinian Center for Research and Dialogue of Civilizations.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
            Organization Profile
          </h1>
          <p className="text-lg text-[#0D0D0D]/70 max-w-2xl mx-auto">
            Learn more about the Palestinian Center for Research and Dialogue of
            Civilizations by viewing or downloading the official organizational profile.
          </p>
        </div>

        <DocumentCard
          title="Organization Profile"
          pdfUrl="/documents/pcrd-profile.pdf" 
          thumbnailUrl="/images/logo/pcrd-logo.png" 
        />
      </div>
    </div>
  );
}
