import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatDate } from "@/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return newsItems.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = newsItems.find((n) => n.id === id);
  if (!news) return { title: "Not Found" };
  return { title: news.title, description: news.excerpt };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = newsItems.find((n) => n.id === id);
  if (!news) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#0D0D0D] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "News", href: "/news" }, { label: news.title }]} />
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
              <Calendar size={14} />
              <time dateTime={news.date}>{formatDate(news.date)}</time>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{news.title}</h1>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          {news.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </article>
        <div className="mt-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm text-[#0D0D0D] font-medium hover:underline">
            <ArrowLeft size={16} /> Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}
