import Sidebar from "@/app/components/Sidebar";

export default function DashBoardLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex min-h-screen bg-background text-foreground">
        {/* Sidebar bên trái */}
        <Sidebar />

        {/* Nội dung chính */}
        <main className="flex-1 flex flex-col p-5">
          <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
        </main>
      </div>
    </div>
  );
}
