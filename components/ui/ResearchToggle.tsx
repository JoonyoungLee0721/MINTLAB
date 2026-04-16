"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const tabs = [
  { id: "robot-intelligence", label: "Robot Intelligence" },
  { id: "healthcare-intelligence", label: "Wearable & Healthcare" },
];

export default function ResearchToggle({ currentId }: { currentId: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-16 z-30 -mx-6 px-6 py-4 mb-2 flex items-baseline justify-between bg-white/80 backdrop-blur-sm transition-opacity duration-500 ${
        isScrolled ? "opacity-0 hover:opacity-100" : "opacity-100"
      }`}
    >
      <span className="text-3xl font-semibold text-neutral-900">Research</span>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-0 md:gap-1 text-sm text-neutral-400">
        {tabs.map((tab, i) => (
          <span key={tab.id} className="flex items-center">
            {i > 0 && <span className="mx-1 hidden md:inline">/</span>}
            <Link
              href={`/research/${tab.id}`}
              className={
                currentId === tab.id
                  ? "font-bold text-[#2d6e3a]"
                  : "hover:text-neutral-600 transition-colors"
              }
            >
              {tab.label}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
