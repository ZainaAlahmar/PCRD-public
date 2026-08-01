"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition-all duration-200 hover:scale-110"
    >
      <ChevronUp size={22} />
    </button>
  );
}
