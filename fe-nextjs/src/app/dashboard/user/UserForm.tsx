"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export interface formData {
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: any;
  categoryId: string;
  status: string;
  description: string;
  categories: string;
  createdAt: string;
  updatedAt: string;
}

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { ApiRequest } from "@/app/apiRequest/apiRequest";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthProvider";

enum UserRole {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  SELLER = "SELLER",
}

const formSchema = z.object({
  name: z.string().min(1, "User name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().optional(),
  role: z.nativeEnum(UserRole).optional(),
});

const initialValues = [
  {
    id: 1,
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter user name",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  {
    id: 3,
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
];

const roleOptions = [
  { id: 1, value: "ADMIN", label: "ADMIN" },
  { id: 2, value: "CLIENT", label: "CLIENT" },
  { id: 3, value: "SELLER", label: "SELLER" },
];

const UserForm = () => {
  const { token } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: roleOptions[0].value as UserRole,
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const api = ApiRequest.getInstance();
      await api.createUser(values, token);
      toast.success("Created new user successful!");
      form.reset();
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "Failed to submit the form.");
    }
  }

  return (
    <div>
      <Card className="min-w-[50dvh]">
        <CardHeader>
          <CardTitle className="text-2xl">{"Add New User"}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              {initialValues.map((input) => {
                return (
                  <FormField
                    key={input.id}
                    control={form.control}
                    name={input.name as "name" | "email" | "password" | "role"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{input.label}</FormLabel>
                        <FormControl>
                          <Input
                            type={input.type}
                            placeholder={input.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}

              {/* Category */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roleOptions.map((option) => (
                          <SelectItem key={option.id} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit button */}
              <Button type="submit" className="w-full">
                Add User
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
