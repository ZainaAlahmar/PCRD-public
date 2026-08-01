import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { getLatestActivities } from "@/data/activities";

export function ActivitiesSection() {
  const latest = getLatestActivities(3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeader
            title="Latest Activities"
            subtitle="Discover our most recent events, training programs, and webinars."
          />
          <Link href="/activities">
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              View All <ArrowRight size={14} className="ml-1.5" />
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          {latest.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
