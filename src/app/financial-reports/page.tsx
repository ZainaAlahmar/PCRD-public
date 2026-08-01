import type { Metadata } from "next";
import { DocumentCard } from "@/components/cards/DocumentCard";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Access the official financial report of PCRD.",
};

export default function FinancialReportsPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
            Financial Report
          </h1>
          <p className="text-lg text-[#0D0D0D]/70 max-w-2xl mx-auto">
            Access the official financial report of PCRD.
          </p>
        </div>

        <DocumentCard
          title="Financial Report 2025"
          pdfUrl="/documents/financial-report-2025.pdf"
          thumbnailUrl="/images/documents/financial-report-cover.png"
        />
      </div>
    </div>
  );
}
