"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import fedoraLogo from "../../../public/husky-svgrepo-com.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const headerDraft = [
    { title: "About", link: "/about" },
    { title: "Dashboard", link: "/dashboard" },
    { title: "Contact", link: "/contact" },
  ];

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={fedoraLogo}
              alt="CMS Dashboard Logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold text-primary">THE VIRTS</span>
          </Link>
        </div>
        {/** Title Dashboard */}
        <div className="hidden lg:flex gap-x-12 mx-[50px]">
          {headerDraft.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/** Login/Register/ Toggle Theme Button */}
        <div className="hidden lg:flex gap-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="default">Register</Button>
          </Link>
          <div className="flex flex-1 justify-end">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            ) : (
              <div className="w-10 h-10" />
            )}
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-background shadow-md py-4 px-6 ">
          {headerDraft.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="block text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
