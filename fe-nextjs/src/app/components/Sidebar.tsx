"use client";
import {
  Home,
  User,
  PackageSearch,
  Wallet,
  Settings,
  LogOutIcon,
} from "lucide-react";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

const Sidebar = () => {
  const token = useAuth();
  const router = useRouter();

  if (!token) return;
  const [user, setUser] = useState(token?.user?.name);
  useEffect(() => {
    if (token.user?.name) {
      setUser(token?.user?.name);
    }
  }, [token, token?.user?.name]);
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
  return (
    <aside className="w-96 bg-card h-screen p-4 hidden lg:flex flex-col border-r border-border">
      {/* Logo */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Admin Dashboard</h2>
      {/* Avatar + User */}
      <div className="flex items-center  p-3 rounded-2xl mb-4 bg-white dark:bg-zinc-900/70  ">
        <div className="w-10 h-10 rounded-full  border border-border">
          <Avatar>
            <AvatarImage
              src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg"
              alt="User Avatar"
            />
            <AvatarFallback>BT</AvatarFallback>
          </Avatar>
        </div>
        <span className="w-full ml-3 text-sm font-semibold ">
          <span className="flex">Hello, {user ? user : "Guest"}</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard/"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/product"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <PackageSearch className="mr-2 h-4 w-4" />
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <User className="mr-2 h-4 w-4" />
              User
            </Link>
          </li>
          {/* <li>
            <Link
              href="/dashboard/billing"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Billing
            </Link>
          </li> */}
          <li>
            <Link
              href="/dashboard/setting"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Settings className="mr-2 h-4 w-4" />
              Setting
            </Link>
          </li>
          {/* Nút Log Out */}
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              Log out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
