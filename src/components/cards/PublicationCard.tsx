import Link from "next/link";
import Image from "next/image";
import { Download, User, Calendar } from "lucide-react";
import { Publication } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0D0D0D]/10 hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Cover Image */}
      <div className="relative h-56 bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-white/20 text-8xl font-bold select-none">
          {publication.title.charAt(0)}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">📄</div>
            <div className="text-xs font-medium opacity-80">{publication.category}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        <Badge label={publication.category} />
        <h3 className="font-bold text-[#0D0D0D] leading-snug line-clamp-2">
          {publication.title}
        </h3>
        <div className="flex flex-col gap-1 text-xs text-[#0D0D0D]/60">
          <div className="flex items-center gap-1.5">
            <User size={12} />
            <span>{publication.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={12} />
            <span>{publication.year}</span>
          </div>
        </div>
        <p className="text-sm text-[#0D0D0D]/70 leading-relaxed line-clamp-2 flex-1">
          {publication.description}
        </p>
        <div className="flex gap-2 pt-1">
          <Link href={`/publications/${publication.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          {publication.downloadUrl && (
            <a href={publication.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" className="flex items-center gap-1.5">
                <Download size={14} />
                Download
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
