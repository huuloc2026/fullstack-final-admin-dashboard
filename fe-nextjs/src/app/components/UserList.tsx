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
import { FetchUserPagination } from "@/utils/httpRequest";

const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "ACTIVE",
    createdAt: "2024-01-10",
    updateAt: "2024-01-10",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    status: "INACTIVE",
    createdAt: "2024-02-12",
    updateAt: "2024-02-15",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Client",
    status: "ACTIVE",
    createdAt: "2024-02-11",
    updateAt: "2024-03-01",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    role: "Seller",
    status: "PENDING",
    createdAt: "2024-03-08",
    updateAt: "2024-03-10",
  },
  {
    id: 5,
    name: "Emma Watson",
    email: "emma@example.com",
    role: "Admin",
    status: "ACTIVE",
    createdAt: "2024-03-14",
    updateAt: "2024-04-01",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    role: "Seller",
    status: "INACTIVE",
    createdAt: "2024-04-20",
    updateAt: "2024-05-01",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace@example.com",
    role: "Seller",
    status: "ACTIVE",
    createdAt: "2024-05-25",
    updateAt: "2024-06-01",
  },
  {
    id: 8,
    name: "Henry Adams",
    email: "henry@example.com",
    role: "Admin",
    status: "PENDING",
    createdAt: "2024-06-30",
    updateAt: "2024-07-01",
  },
  {
    id: 9,
    name: "Ivy Thompson",
    email: "ivy@example.com",
    role: "Client",
    status: "ACTIVE",
    createdAt: "2024-05-02",
    updateAt: "2024-05-15",
  },
  {
    id: 10,
    name: "Jack White",
    email: "jack@example.com",
    role: "Seller",
    status: "INACTIVE",
    createdAt: "2024-06-15",
    updateAt: "2024-06-20",
  },
];
export default function UserListPagination({ arrayList }: any) {
  const dataUsers = arrayList;
  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between"></div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataUsers.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell className="text-sm text-wrap">
                  {new Date(user.createdAt).toLocaleString()}
                </TableCell>
                <TableCell className="text-sm text-wrap">
                  {new Date(user.updatedAt).toLocaleString()}
                </TableCell>

                <TableCell className="text-right flex">
                  <DiaLogUser user={user} />
                  <DialogDeleteUser user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
