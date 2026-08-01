import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-bold text-[#0D0D0D] mb-4">404</div>
      <h1 className="text-2xl font-bold text-[#0D0D0D] mb-3">Page Not Found</h1>
      <p className="text-[#0D0D0D]/60 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">Go Back Home</Button>
      </Link>
    </div>
  );
}
