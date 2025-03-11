import { Toaster } from "sonner";

export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      {children}
    </main>
  );
}
