import { Toaster } from "sonner";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto p-5 flex flex-col h-full">
      <div className="flex flex-col min-h-screen p-2 ">{children}</div>
    </main>
  );
}
