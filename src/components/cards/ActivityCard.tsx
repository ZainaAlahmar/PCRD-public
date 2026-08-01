import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Activity } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/utils";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0D0D0D]/10 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="flex-1 p-6 flex flex-col justify-between gap-4">
          <div className="space-y-3">
            <Badge label={activity.category} />
            <h3 className="text-lg font-bold text-[#0D0D0D] leading-snug line-clamp-2">
              {activity.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-[#0D0D0D]/60">
              <Calendar size={14} />
              <time dateTime={activity.date}>{formatDate(activity.date)}</time>
            </div>
            <p className="text-[#0D0D0D]/70 text-sm leading-relaxed line-clamp-3">
              {activity.description}
            </p>
          </div>
          <div>
            <Link href={`/activities/${activity.slug}`}>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-72 h-52 md:h-auto relative flex-shrink-0">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
          />
        </div>
      </div>
    </article>
  );
}
