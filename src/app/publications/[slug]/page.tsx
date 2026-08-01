import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Download, User, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { getPublicationBySlug, publications } from "@/data/publications";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = getPublicationBySlug(slug);
  if (!pub) return { title: "PCRD" };
  return { title: { absolute: "PCRD" }, description: pub.description };
}

export default async function PublicationDetailPage({ params }: Props) {
  const { slug } = await params;
  const pub = getPublicationBySlug(slug);
  if (!pub) notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0D0D0D] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Publications", href: "/publications" }, { label: pub.title }]}
          />
          <div className="mt-6 space-y-3">
            <Badge label={pub.category} />
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug">{pub.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-neutral-300 text-sm">
              <div className="flex items-center gap-1.5"><User size={14} />{pub.author}</div>
              <div className="flex items-center gap-1.5"><Calendar size={14} />{pub.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Abstract</h2>
          <p className="text-slate-700 leading-relaxed">{pub.description}</p>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
            {pub.downloadUrl && (
              <a href={pub.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">
                  <Download size={16} className="mr-2" /> Download Publication
                </Button>
              </a>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/publications" className="inline-flex items-center gap-2 text-sm text-[#0D0D0D] font-medium hover:underline">
            <ArrowLeft size={16} /> Back to Publications
          </Link>
        </div>
      </div>
    </div>
  );
}
