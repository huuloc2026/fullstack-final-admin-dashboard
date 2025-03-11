"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

interface UserListProps {
  arrayUser?: User[];
}

const MockUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@mail.com",
    avatar: "/user.svg",

    role: "CLIENT",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@mail.com",
    avatar: "/user.svg",

    role: "CLIENT",
  },
  {
    id: "3",
    name: "Charlie Lee",
    email: "charlie@mail.com",
    avatar: "/user.svg",

    role: "CLIENT",
  },
  {
    id: "4",
    name: "Diana Kim",
    email: "diana@mail.com",
    avatar: "/user.svg",

    role: "CLIENT",
  },
  {
    id: "5",
    name: "Ethan Brown",
    email: "ethan@mail.com",
    avatar: "/user.svg",

    role: "CLIENT",
  },
];

export default function UserList({ arrayUser }: any) {
  const list = arrayUser.slice(0, 5);
  const [users, setUsers] = useState<User[]>(list ?? MockUsers);

  useEffect(() => {
    setUsers(arrayUser.slice(0, 5));
  }, [arrayUser]);

  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl"
      )}
    >
      {/* Total Balance Section */}
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Total User Active:
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          1.239
        </h1>
      </div>

      {/* Users List */}
      <div className="p-3">
        <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          User List
        </h2>

        <div className="space-y-1">
          {users.map((user) => (
            <div
              key={user.id}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <img
                  src="/user.svg"
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />

                <div>
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {user.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                  Role: {user.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
