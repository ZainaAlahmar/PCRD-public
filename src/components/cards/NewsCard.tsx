import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { News } from "@/types";
import { formatDate } from "@/utils";

interface NewsCardProps {
  news: News;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-[#0D0D0D]/10 hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xs text-[#0D0D0D]/50">
        <Calendar size={13} />
        <time dateTime={news.date}>{formatDate(news.date)}</time>
      </div>
      <h3 className="font-bold text-[#0D0D0D] leading-snug line-clamp-2 text-base">
        {news.title}
      </h3>
      <p className="text-sm text-[#0D0D0D]/70 leading-relaxed line-clamp-3 flex-1">
        {news.excerpt}
      </p>
      <Link
        href={`/news/${news.id}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0D0D0D] hover:text-neutral-700 transition-colors mt-auto"
      >
        Read More <ArrowRight size={14} />
      </Link>
    </article>
  );
}
