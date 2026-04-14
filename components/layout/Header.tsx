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

const researchSubLinks = [
  { href: "/research/robot-intelligence", label: "Robot Intelligence" },
  { href: "/research/healthcare-intelligence", label: "Healthcare Intelligence" },
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

  const isResearchActive = pathname.startsWith("/research");

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
          {navLinks.map((link) => {
            if (link.href === "/research") {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href="/research/robot-intelligence"
                    className={cn(
                      "px-3 py-1.5 text-sm rounded transition-colors",
                      isResearchActive
                        ? "text-[#2d6e3a] font-medium"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    {link.label}
                  </Link>
                  <div className="absolute top-full right-0 pt-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-white border border-neutral-200 rounded-lg shadow-lg py-1 min-w-[200px]">
                      {researchSubLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            pathname === sub.href
                              ? "text-[#2d6e3a] font-medium bg-neutral-50"
                              : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
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
            );
          })}
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
          {navLinks.map((link) => {
            if (link.href === "/research") {
              return (
                <div key={link.href}>
                  <Link
                    href="/research/robot-intelligence"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-2 text-sm block",
                      isResearchActive
                        ? "text-[#2d6e3a] font-medium"
                        : "text-neutral-600"
                    )}
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 flex flex-col gap-1">
                    {researchSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "py-1.5 text-sm",
                          pathname === sub.href
                            ? "text-[#2d6e3a] font-medium"
                            : "text-neutral-400"
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
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
            );
          })}
        </div>
      )}
    </header>
  );
}
