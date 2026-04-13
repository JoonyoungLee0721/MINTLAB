"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/news", label: "News" },
  { href: "/courses", label: "Courses" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm"
          : "bg-white border-b border-neutral-200"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/MINTLAB/images/mitlab_logo_08052.png"
            alt="MINT Lab"
            width={675}
            height={119}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 text-sm rounded transition-colors",
                pathname === link.href
                  ? "text-[#2d6e3a] font-medium"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "py-2 text-sm",
                pathname === link.href
                  ? "text-[#2d6e3a] font-medium"
                  : "text-neutral-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
