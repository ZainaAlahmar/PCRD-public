"use client";

import type { Metadata } from "next";
import { DocumentCard } from "@/components/cards/DocumentCard";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D0D0D] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Publications</h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl mx-auto">
            Browse our collection of books, research papers, and reports.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f9f9f9] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((book) => (
              <DocumentCard
                key={book.id}
                title={book.title}
                pdfUrl={book.downloadUrl}
                thumbnailUrl={book.cover}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
