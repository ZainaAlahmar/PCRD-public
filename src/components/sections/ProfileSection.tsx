import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="bg-[#f9f9f9] py-16">
      <section className="bg-[#0D0D0D] py-16 sm:py-20 rounded-[2rem] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Our Profile
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
            Learn more about our organization, our vision for a just and lasting peace, and our extensive research and dialogue initiatives.
          </p>
          
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 bg-white text-[#0D0D0D] px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors shadow-sm hover:shadow-md"
          >
            View Profile
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
