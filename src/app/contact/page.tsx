import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: { absolute: "PCRD" },
  description: "Get in touch with the Palestinian Center for Research and Cultural Dialogue.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="text-white/80 mt-3 text-lg max-w-2xl mx-auto">
            We're here to answer your questions and explore collaboration opportunities.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
