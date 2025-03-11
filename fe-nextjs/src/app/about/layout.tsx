import { Toaster } from "sonner";

export default function AboutLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      {children}
    </main>
  );
}
