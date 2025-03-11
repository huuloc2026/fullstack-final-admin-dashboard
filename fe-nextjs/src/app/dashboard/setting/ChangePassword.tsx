"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PasswordInput } from "@/components/ui/password-input";

export function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();
  const token = useAuth();
  if (!token) return;
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
  const handleChangePassword = async () => {
    try {
      const response = await fetch(
        `http://localhost:8386/v1/api/auth/changepassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
          body: JSON.stringify({
            email: token?.user?.email,
            oldPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: newPassword,
          }),
        }
      );
      if (!response.ok) {
        toast.error("Failed to change password!");
        return;
      }
      handleLogout();
      toast.success("Password changed successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <PasswordInput
              id="current-password"
              value={currentPassword}
              onChange={(e:any) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <PasswordInput
              id="new-password"
              value={newPassword}
              onChange={(e:any) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleChangePassword}>Change Password</Button>
      </CardFooter>
    </Card>
  );
}
