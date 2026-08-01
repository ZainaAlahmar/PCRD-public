import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getActivityBySlug, activities } from "@/data/activities";
import { Badge } from "@/components/ui/Badge";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { formatDate } from "@/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return { title: "PCRD" };
  return {
    title: { absolute: "PCRD" },
    description: activity.description,
  };
}

export default async function ActivityDetailPage({ params }: Props) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0D0D0D] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-6 space-y-3">
            <Badge label={activity.category} />
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{activity.title}</h1>
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
              <Calendar size={14} />
              <time dateTime={activity.date}>{formatDate(activity.date)}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image Carousel */}
        {activity.images && activity.images.length > 0 && (
          <div className="mb-10">
            <ImageCarousel images={activity.images} alt={activity.title} />
          </div>
        )}

        {/* Article body */}
        <article className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="prose prose-slate max-w-none">
            {activity.contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: activity.contentHtml }} />
            ) : (
              activity.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))
            )}
          </div>
        </article>

        <div className="mt-8">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 text-sm text-[#0D0D0D] font-medium hover:underline"
          >
            <ArrowLeft size={16} /> Back to Activities
          </Link>
        </div>
      </div>
    </div>
  );
}
