import type { Metadata } from "next";
import { publications } from "@/data/publications";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { FileText, Code2, Video, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications from the Physical AI Lab.",
};

const years = [...new Set(publications.map((p) => p.year))].sort(
  (a, b) => b - a
);

function PubCard({ pub }: { pub: (typeof publications)[0] }) {
  return (
    <div className="p-5 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors group">
      <h3 className="text-base font-semibold text-neutral-900 mb-1.5 leading-snug group-hover:text-[#2d6e3a] transition-colors">
        {pub.title}
      </h3>
      <p className="text-sm text-neutral-500 mb-1">{pub.authors}</p>
      <p className="text-sm mb-1">
        <span className="font-medium text-[#2d6e3a]">{pub.venue}</span>
        <span className="text-neutral-400"> · {pub.year}</span>
        {pub.note && <span className="text-neutral-400 italic"> · {pub.note}</span>}
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
        <div className="flex flex-wrap gap-1.5">
          {pub.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 ml-auto flex-wrap">
          {pub.links.paper && (
            <a
              href={pub.links.paper}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-[#2d6e3a] transition-colors"
            >
              <FileText size={14} /> Paper
            </a>
          )}
          {pub.links.code && (
            <a
              href={pub.links.code}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-[#2d6e3a] transition-colors"
            >
              <Code2 size={14} /> Code
            </a>
          )}
          {pub.links.video && (
            <a
              href={pub.links.video}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-[#2d6e3a] transition-colors"
            >
              <Video size={14} /> Video
            </a>
          )}
          {pub.links.project && (
            <a
              href={pub.links.project}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-[#2d6e3a] transition-colors"
            >
              <ExternalLink size={14} /> Project
            </a>
          )}
          {pub.links.media?.map((m) => (
            <a
              key={m.label}
              href={m.url}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-[#2d6e3a] transition-colors"
            >
              <ExternalLink size={14} /> {m.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader
          label="Publications"
          title="Publications"
        />

        {years.map((year) => {
          const yearPubs = publications.filter((p) => p.year === year);
          return (
            <div key={year} className="mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6 pb-3 border-b border-neutral-100">
                {year}
              </h2>
              <div className="space-y-4">
                {yearPubs.map((pub) => (
                  <PubCard key={pub.id} pub={pub} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
