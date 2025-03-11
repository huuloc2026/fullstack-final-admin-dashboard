import { ScrollToTop } from "@/app/components/ScollToTop";
import { AppSidebar } from "@/app/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowUpToLineIcon } from "lucide-react";

export default function DashBoardLayouTest({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col w-10">
        <SidebarTrigger variant={"secondary"} />
        {children}
      </main>
      <ScrollToTop className="bg-primary text-white dark:text-black p-3 rounded-full fixed right-4 bottom-4 transition-opacity duration-300" />
    </SidebarProvider>
  );
}
