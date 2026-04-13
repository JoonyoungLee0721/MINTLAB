import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  aspectRatio?: "square" | "video" | "wide";
  className?: string;
}

export default function ImagePlaceholder({
  alt,
  aspectRatio = "video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-neutral-100 rounded-lg flex flex-col items-center justify-center text-neutral-400 overflow-hidden",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "wide" && "aspect-[21/9]",
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="w-12 h-12 rounded-full bg-neutral-200 mb-3 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <p className="text-xs text-neutral-400 text-center max-w-[80%] leading-snug px-4">
        {alt}
      </p>
    </div>
  );
}
