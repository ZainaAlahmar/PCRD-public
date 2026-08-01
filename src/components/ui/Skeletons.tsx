export function ActivityCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0D0D0D]/10 animate-pulse">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 space-y-4">
          <div className="h-5 w-24 bg-slate-200 rounded-full" />
          <div className="h-6 w-3/4 bg-slate-200 rounded" />
          <div className="h-4 w-32 bg-slate-200 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
            <div className="h-4 w-4/6 bg-slate-200 rounded" />
          </div>
          <div className="h-9 w-28 bg-slate-200 rounded-lg" />
        </div>
        <div className="md:w-72 h-48 md:h-auto bg-slate-200" />
      </div>
    </div>
  );
}

export function PublicationCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0D0D0D]/10 animate-pulse">
      <div className="h-56 bg-slate-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-20 bg-slate-200 rounded-full" />
        <div className="h-5 w-full bg-slate-200 rounded" />
        <div className="h-4 w-1/2 bg-slate-200 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-4/5 bg-slate-200 rounded" />
        </div>
        <div className="h-9 w-full bg-slate-200 rounded-lg" />
      </div>
    </div>
  );
}

export function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#0D0D0D]/10 animate-pulse space-y-3">
      <div className="h-4 w-28 bg-slate-200 rounded" />
      <div className="h-5 w-full bg-slate-200 rounded" />
      <div className="h-5 w-3/4 bg-slate-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-slate-200 rounded" />
        <div className="h-4 w-5/6 bg-slate-200 rounded" />
      </div>
      <div className="h-8 w-24 bg-slate-200 rounded-lg" />
    </div>
  );
}
