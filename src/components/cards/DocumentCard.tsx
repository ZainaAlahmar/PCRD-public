"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Download, X, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface DocumentCardProps {
  title: string;
  pdfUrl: string;
  thumbnailUrl: string;
  previewLabel?: string;
  downloadLabel?: string;
}

export function DocumentCard({
  title,
  pdfUrl,
  thumbnailUrl,
  previewLabel = "Preview",
  downloadLabel = "Download",
}: DocumentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 border border-[#0D0D0D]/10 overflow-hidden flex flex-col">
        {/* Image Area with Hover Overlay */}
        <div className="relative aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />

          {/* Dark Overlay (Hover) */}
          <div className="absolute inset-0 bg-[#0D0D0D]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            
            {/* Buttons sliding up */}
            <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
              {/* Preview Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white text-[#0D0D0D] px-4 py-2.5 rounded-lg text-sm font-semibold hover:shadow-md transition-shadow"
              >
                <Eye size={16} />
                {previewLabel}
              </button>

              {/* Download Button */}
              <a
                href={pdfUrl}
                download
                className="flex items-center gap-2 bg-transparent border border-white/50 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                {downloadLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Title Area */}
        <div className="p-6 text-center border-t border-[#0D0D0D]/5 bg-white relative z-10">
          <h3 className="font-bold text-[#0D0D0D] text-lg">{title}</h3>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0D0D0D]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#0D0D0D]/10 bg-white">
                <h3 className="text-lg font-bold text-[#0D0D0D] truncate pr-4">
                  {title}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-[#0D0D0D]/50 hover:text-[#0D0D0D] hover:bg-neutral-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* PDF iframe */}
              <div className="flex-1 bg-neutral-100 w-full overflow-hidden relative">
                <iframe
                  src={`${pdfUrl}#view=FitH`}
                  className="absolute inset-0 w-full h-full border-0"
                  title={`Preview of ${title}`}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#0D0D0D]/10 bg-white">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0D0D0D] border border-[#0D0D0D]/20 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <ExternalLink size={16} />
                  Open in New Tab
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0D0D0D] rounded-lg hover:bg-black/80 transition-colors"
                >
                  <Download size={16} />
                  {downloadLabel}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
