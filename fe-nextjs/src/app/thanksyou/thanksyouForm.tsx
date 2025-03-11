import Link from "next/link";
import { CircleChevronUp } from "lucide-react";

interface ThanksProps {
  message: string;
}

export default function ThanksComponent({ message }: ThanksProps) {
  return (
    <div className="flex min-h-[50dvh] flex-col items-center justify-center bg-background sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <CircleChevronUp className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Thank you!
        </h1>
        <p className="mt-4 text-muted-foreground">{message}</p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
