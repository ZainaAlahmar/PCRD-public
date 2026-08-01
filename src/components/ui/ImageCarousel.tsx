"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="relative w-full h-80 rounded-xl overflow-hidden">
        <Image src={images[0]} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image src={images[current]} alt={`${alt} - ${current + 1}`} fill className="object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
