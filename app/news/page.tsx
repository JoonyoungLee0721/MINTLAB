import type { Metadata } from "next";
import Image from "next/image";
import { newsItems } from "@/data/news";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { formatDate } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "News",
  description: "News and updates from the MINT Lab at Korea University.",
};

export default function NewsPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader
          label="News"
          title="News & Updates"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors flex flex-col"
            >
              {item.images && item.images.length > 0 && (
                <div className="relative aspect-video bg-neutral-100">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <time className="text-xs text-neutral-400 mb-2 block">
                  {formatDate(item.date)}
                </time>
                <h2 className="text-sm font-semibold text-neutral-900 mb-2 leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-1">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-[#2d6e3a] hover:underline"
                      >
                        <ExternalLink size={11} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                {item.participants && (
                  <div className="mt-4 space-y-3">
                    {item.participants.organizers &&
                      item.participants.organizers.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                            Organizers
                          </p>
                          <ul className="text-xs text-neutral-500 space-y-0.5">
                            {item.participants.organizers.map((p) => (
                              <li key={p.name}>
                                <span className="font-medium text-neutral-700">
                                  {p.name}
                                </span>{" "}
                                · {p.affiliation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {item.participants.speakers &&
                      item.participants.speakers.length > 0 && (
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                            Speakers
                          </p>
                          <ul className="text-xs text-neutral-500 space-y-0.5">
                            {item.participants.speakers.map((p) => (
                              <li key={p.name}>
                                <span className="font-medium text-neutral-700">
                                  {p.name}
                                </span>{" "}
                                · {p.affiliation}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
