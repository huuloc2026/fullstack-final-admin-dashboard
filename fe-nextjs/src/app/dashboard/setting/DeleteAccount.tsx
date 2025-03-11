"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthProvider";
import { toast } from "sonner";
import { DeleteAccountApi } from "@/utils/clientRequest";

export function DeleteAccount() {
  const router = useRouter();
  const { token, user } = useAuth();
  if (!token || !user) return;
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      toast.success("Please login again!");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  const handleDeleteAccount = async () => {
    try {
      await DeleteAccountApi(user?.id, token);
      handleLogout();
      toast("Account deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-red-500">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="destructive" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </CardFooter>
    </Card>
  );
}
