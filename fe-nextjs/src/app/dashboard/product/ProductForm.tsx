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
// let productRenderJSON = [
//   {
//     id: "2af85ba0-0d4d-4b42-8e6e-297646c79e34",
//     name: "Modern Marble Mouse",
//     description:
//       "Stylish Shoes designed to make you stand out with meager looks",
//     price: 391.41,
//     stock: 38,
//     imageUrl: null,
//     categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
//     status: "ACTIVE",
//     createdAt: "2025-02-28T11:18:13.997Z",
//     updatedAt: "2025-02-28T11:18:13.997Z",
//   },
//   {
//     id: "332ab3db-c575-4182-b075-a4d38975f03a",
//     name: "Fresh Marble Shoes",
//     description:
//       "New Gloves model with 38 GB RAM, 360 GB storage, and friendly features",
//     price: 499.09,
//     stock: 91,
//     imageUrl: null,
//     categoryId: "eb17be2b-6809-4811-83a6-173ede6c46d0",
//     status: "ACTIVE",
//     createdAt: "2025-02-28T11:18:13.997Z",
//     updatedAt: "2025-02-28T11:18:13.997Z",
//   },
//   {
//     id: "4479f705-2549-45f1-9235-afe6b380cdd1",
//     name: "Frozen Silk Pants",
//     description:
//       "Savor the crunchy essence in our Car, designed for honored culinary adventures",
//     price: 533.45,
//     stock: 34,
//     imageUrl: null,
//     categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
//     status: "ACTIVE",
//     createdAt: "2025-02-28T11:18:13.997Z",
//     updatedAt: "2025-02-28T11:18:13.997Z",
//   },
//   {
//     id: "62633db9-903c-4d6d-810c-df5e0dd7bbfe",
//     name: "Electronic Aluminum Shoes",
//     description:
//       "The Future-proofed well-modulated approach Pants offers reliable performance and vain design",
//     price: 605.69,
//     stock: 28,
//     imageUrl: null,
//     categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
//     status: "ACTIVE",
//     createdAt: "2025-02-28T11:18:13.997Z",
//     updatedAt: "2025-02-28T11:18:13.997Z",
//   },
// ];
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/AuthProvider";
// let productsData: formData[] = [
//   {
//     name: "Laptop Pro X1",
//     price: 1200,
//     description: "High-performance laptop with powerful specs.",
//     categories: "Electronics, Computers",
//   },
//   {
//     name: "Coffee Maker Deluxe",
//     price: 89.99,
//     description: "Automatic coffee maker with programmable timer.",
//     categories: "Home Appliances, Kitchen",
//   },
//   {
//     name: "Running Shoes - Ultra Boost",
//     price: 110.5,
//     description: "Lightweight and comfortable running shoes.",
//     categories: "Sports, Shoes",
//   },
//   {
//     name: "Smartphone Z50",
//     price: 799,
//     description: "Latest smartphone with advanced camera features.",
//     categories: "Electronics, Mobile",
//   },
//   {
//     name: "Cookbook - World Cuisine",
//     price: 25,
//     description: "A collection of delicious recipes from around the world.",
//     categories: "Books, Cooking",
//   },
// ];
const formSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.number().positive("Price must be greater than zero"),
  stock: z.number().int().nonnegative("Stock must be a non-negative integer"),
  description: z.string().optional(),
  // id: z.string().uuid().optional(),
  // imageUrl: z.string().nullable().optional(),
  categoryId: z.string().uuid().optional(),
  // status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
  // createdAt: z.string().optional(),
  // updatedAt: z.string().optional(),
});

export const categoryIDMap = [
  { id: "34ec2ed1-62f4-415b-9395-f4e0aa6a6ce0", name: "Electronics" },
  { id: "f0a62da1-dc46-4632-9b8b-1934271ab961", name: "Clothing" },
  { id: "00c9b360-cd21-42ff-ba61-b5b71ecf55da", name: "Books" },
  { id: "4b45db2a-0edd-4c45-a566-ce785e6a09ad", name: "Home Appliances" },
];

const ProductCRUD = () => {
  const { token } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      categoryId: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const api = ApiRequest.getInstance();
      await api.createProduct(values, token);
      toast.success("Created successful!");
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
          <CardTitle className="text-2xl">{"Add Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        id="price"
                        placeholder="Enter price"
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Stock */}
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input
                        id="stock"
                        placeholder="Enter stock"
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categoryIDMap.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
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
                Add Product
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCRUD;
