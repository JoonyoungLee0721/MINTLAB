"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Code2, Video } from "lucide-react";
import { publications } from "@/data/publications";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

const featured = publications.filter((p) => p.featured);

export default function SelectedPublications() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Publications"
          title="Selected Publications"
          description="Recent highlights from the lab. See full list for all publications."
        />
        <div className="space-y-4">
          {featured.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-xs text-neutral-400 mb-3">
                    <span className="font-medium text-[#2d6e3a]">
                      {pub.venue}
                    </span>{" "}
                    · {pub.year}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 shrink-0">
                  {pub.links.paper && (
                    <a
                      href={pub.links.paper}
                      className="flex items-center gap-1 text-xs hover:text-[#2d6e3a] transition-colors"
                    >
                      <FileText size={14} />
                      Paper
                    </a>
                  )}
                  {pub.links.code && (
                    <a
                      href={pub.links.code}
                      className="flex items-center gap-1 text-xs hover:text-[#2d6e3a] transition-colors"
                    >
                      <Code2 size={14} />
                      Code
                    </a>
                  )}
                  {pub.links.video && (
                    <a
                      href={pub.links.video}
                      className="flex items-center gap-1 text-xs hover:text-[#2d6e3a] transition-colors"
                    >
                      <Video size={14} />
                      Video
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2d6e3a] hover:underline"
          >
            View all publications
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
