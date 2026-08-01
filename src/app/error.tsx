"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-[#0D0D0D] mb-3">Something went wrong</h1>
      <p className="text-[#0D0D0D]/60 max-w-md mb-8">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <Button variant="primary" size="md" onClick={reset}>
          Try Again
        </Button>
        <Link href="/">
          <Button variant="secondary" size="md">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
