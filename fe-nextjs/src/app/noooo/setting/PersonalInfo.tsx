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
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/app/AuthProvider";

import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";

export function PersonalInfo() {
  const token = useAuth();
  if (!token) return;
  const router = useRouter();
  const [name, setName] = useState(token.user?.name || "");
  const [email, setEmail] = useState(token.user?.email || "");
  const [isEdit, setIsEdit] = useState(true);

  const handleUpdate = async () => {
    if (!token?.user?.id) {
      toast.error("User not authenticated!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8386/v1/api/users/${token.user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
          },
          body: JSON.stringify({ name }),
        }
      );

      if (!response.ok) throw new Error("Failed to update");
      setIsEdit(true);
      router.refresh();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Update failed. Please try again!");
    }
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-5 ">
            <Label htmlFor="name">Name</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="name"
                disabled={isEdit}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              <Button onClick={() => handleEdit()}>
                {" "}
                <Edit />
                Edit
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              disabled
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleUpdate}>Update</Button>
      </CardFooter>
    </Card>
  );
}
