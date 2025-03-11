"use client";

import { useAuth } from "@/app/AuthProvider";

export default function UserInfo() {
  const { token } = useAuth();

  return <div>Access Token: {token ? token : "Not logged in"}</div>;
}
