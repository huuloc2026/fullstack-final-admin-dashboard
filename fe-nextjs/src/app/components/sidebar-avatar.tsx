"use client";

import { ChevronUp } from "lucide-react";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/AuthProvider";
import { MeProfileApi } from "@/utils/clientRequest";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SidebarFooterAvatar = () => {
  const [name, setName] = useState("Jared Palmer");
  const [avatarUrl, setAvatarUrl] = useState(
    "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp"
  );
  const [email, setEmail] = useState("jared@acme.inc");

  const router = useRouter();
  const { token } = useAuth();
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const result = await MeProfileApi(token);
        // console.log("User Profile:", result);

        if (result) {
          setName(result.name || "Unknown User");
          setAvatarUrl(result.avatar || avatarUrl);
          setEmail(result.email || "No email");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!token) return null; // ✅ Keep the return after all hooks

  return (
    <SidebarFooter>
      <SidebarMenu className="py-2">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus:outline-none">
              <SidebarMenuButton>
                <div className="flex justify-between">
                  <Avatar className="h-8 w-8 justify-center items-center">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-sm ">{email}</p>
                  </div>
                  <ChevronUp className="h-5 w-5 ml-1 mt-2" />
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem asChild>
                <Button
                  className="w-full focus:outline-none"
                  variant={"ghost"}
                  onClick={() => handleLogout()}
                >
                  Account
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Button
                  className="w-full focus:outline-none"
                  variant={"ghost"}
                  onClick={() => handleLogout()}
                >
                  Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SidebarFooterAvatar;
