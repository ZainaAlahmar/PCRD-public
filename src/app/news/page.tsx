import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NewsCard } from "@/components/cards/NewsCard";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Latest news, announcements, and press releases from PCRD.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">News & Announcements</h1>
          <p className="text-white/80 mt-3 text-lg">
            Stay up to date with the latest from PCRD.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
