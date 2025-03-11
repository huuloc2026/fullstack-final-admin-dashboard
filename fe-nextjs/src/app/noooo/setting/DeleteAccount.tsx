"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DeleteAccount() {
  const handleDeleteAccount = async () => {
    try {
      await fetch("/api/user/delete", { method: "DELETE" });
      alert("Account deleted successfully!");
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
