"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

import { DiaLogUser } from "@/app/dashboard/user/DialogEditUser";
import { toast } from "sonner";
import { useState } from "react";
import { DialogDeleteUser } from "@/app/dashboard/user/DiaLogDelete";
import { DialogEditProd } from "@/app/dashboard/product/DialogEditProd";
import { DialogDeleteProduct } from "@/app/dashboard/product/DiaLogDelete";
import { StickyNote } from "lucide-react";
import { categoryIDMap } from "@/app/dashboard/product/ProductForm";

const mockProduct = [
  {
    id: "7fb16a8c-82e7-40b1-812b-339acc58e8c3",
    name: "Hunter Mitchell",
    description: "Irure molestiae exce",
    price: 1000,
    stock: 21,
    imageUrl: null,
    categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
    status: "ACTIVE",
    createdAt: "2025-03-01T10:54:25.394Z",
    updatedAt: "2025-03-01T10:54:25.394Z",
  },
  {
    id: "1ed7c702-3e1a-45ce-bb12-17daff8f3564",
    name: "Olivia Avila",
    description: "In beatae eius nisi ",
    price: 101,
    stock: 12,
    imageUrl: null,
    categoryId: "a83d9782-621f-4da3-8aca-05ad7d461213",
    status: "ACTIVE",
    createdAt: "2025-03-01T08:32:12.061Z",
    updatedAt: "2025-03-01T08:32:12.061Z",
  },
  {
    id: "4af66d38-28e3-4555-bb9c-9ee99f92568e",
    name: "May Torres",
    description: "Maxime voluptatem i",
    price: 181,
    stock: 1,
    imageUrl: null,
    categoryId: "a83d9782-621f-4da3-8aca-05ad7d461213",
    status: "ACTIVE",
    createdAt: "2025-03-01T06:37:49.021Z",
    updatedAt: "2025-03-01T06:37:49.021Z",
  },
  {
    id: "4001e44e-a6a7-4fcd-94af-7f151f0148fe",
    name: "Ali Estrada",
    description: "Rerum commodi animi",
    price: 782,
    stock: 79,
    imageUrl: null,
    categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
    status: "ACTIVE",
    createdAt: "2025-03-01T06:37:45.232Z",
    updatedAt: "2025-03-01T06:37:45.232Z",
  },
  {
    id: "483c42eb-b51d-4996-b968-3a8c2c5a9720",
    name: "Price Richard",
    description: "Possimus corrupti ",
    price: 572,
    stock: 46,
    imageUrl: null,
    categoryId: "a83d9782-621f-4da3-8aca-05ad7d461213",
    status: "ACTIVE",
    createdAt: "2025-03-01T06:37:35.099Z",
    updatedAt: "2025-03-01T06:37:35.099Z",
  },
  {
    id: "8e148ac0-f123-49d4-9785-f788df541e7f",
    name: "Paki Howell",
    description: "Sed quia obcaecati v",
    price: 593,
    stock: 1,
    imageUrl: null,
    categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
    status: "ACTIVE",
    createdAt: "2025-02-28T19:27:05.101Z",
    updatedAt: "2025-02-28T19:27:05.101Z",
  },
  {
    id: "b9f44369-9c7d-4652-9b74-79e98d0bb5fb",
    name: "Duncan Rowe",
    description: "Quis distinctio Dol",
    price: 360,
    stock: 59,
    imageUrl: null,
    categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
    status: "ACTIVE",
    createdAt: "2025-02-28T19:26:57.382Z",
    updatedAt: "2025-02-28T19:26:57.382Z",
  },
  {
    id: "d76daeb8-1b0b-417e-b0cd-c7a59ae278da",
    name: "Tanner Maddox",
    description: "Neque aliquam quasi ",
    price: 956,
    stock: 68,
    imageUrl: null,
    categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
    status: "ACTIVE",
    createdAt: "2025-02-28T19:11:24.536Z",
    updatedAt: "2025-02-28T19:11:24.536Z",
  },
  {
    id: "6cce4525-631d-4fcd-9ce1-aaf2775066cd",
    name: "Chaney Kirby",
    description: "A eos quasi irure r",
    price: 102,
    stock: 72,
    imageUrl: null,
    categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
    status: "ACTIVE",
    createdAt: "2025-02-28T18:04:43.788Z",
    updatedAt: "2025-02-28T18:04:43.788Z",
  },
  {
    id: "c47596fc-4e7b-4e1c-9ef2-61f3e459a808",
    name: "Stella Cohen",
    description: "Enim placeat iure n",
    price: 109,
    stock: 42,
    imageUrl: null,
    categoryId: "a83d9782-621f-4da3-8aca-05ad7d461213",
    status: "ACTIVE",
    createdAt: "2025-02-28T18:02:42.027Z",
    updatedAt: "2025-02-28T18:02:42.027Z",
  },
];
export default function ProductList({ dataFromFetch }: any) {
  const dataToMap = dataFromFetch;
  const handleExtractId = (userId: number) => {
    console.log("User ID:", userId);
  };
  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Select>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
                <SelectItem value="client">Client</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description </TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataToMap.map((product: any) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>
                  {categoryIDMap.find((cat) => cat.id === product.categoryId)
                    ?.name || "Unknown"}
                </TableCell>
                <TableCell className="text-right ">
                  <DialogEditProd product={product} />
                  <DialogDeleteProduct product={product} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
