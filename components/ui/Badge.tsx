import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        variant === "default" && "bg-neutral-100 text-neutral-600",
        variant === "outline" && "border border-neutral-300 text-neutral-600",
        variant === "accent" && "bg-[#609f68]/10 text-[#2d6e3a]",
        className
      )}
    >
      {children}
    </span>
  );
}
