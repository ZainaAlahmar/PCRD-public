"use client";

import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ActivityCard } from "@/components/cards/ActivityCard";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D0D0D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Activities</h1>
          <p className="text-white/80 mt-3 text-lg">
            Explore our webinars, workshops, training programs, and conferences.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards */}
          {activities.length > 0 ? (
            <div className="space-y-6">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#0D0D0D]/50">
              <p className="text-lg">No activities found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
