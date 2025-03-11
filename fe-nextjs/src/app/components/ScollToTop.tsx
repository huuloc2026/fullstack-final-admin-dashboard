"use client";
import { useEffect, useState } from "react";
import { ArrowUpToLine } from "lucide-react";
interface ScrollToTopProps {
  minHeight?: number;
  className?: string;
}

export const ScrollToTop = ({
  minHeight = 200,
  className = "",
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > minHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [minHeight]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4  p-2 rounded-full shadow-md transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${className}`}
    >
      <ArrowUpToLine />
    </button>
  );
};
