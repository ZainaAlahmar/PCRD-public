import { ActivityCardSkeleton } from "@/components/ui/Skeletons";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-6">
      {[1, 2, 3].map((i) => (
        <ActivityCardSkeleton key={i} />
      ))}
    </div>
  );
}
