"use client";

import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      router.push("/login"); // Chuyển hướng về trang đăng nhập
    } catch (error) {}
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
