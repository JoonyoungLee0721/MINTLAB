"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchAreas } from "@/data/research";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";

const highlighted = researchAreas.slice(0, 4);

export default function ResearchHighlights() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Research"
          title="Research Themes"
          description="Our work spans multiple frontiers of Physical AI, from foundation models for robot action to healthcare intelligence for human health."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlighted.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            >
              <ImagePlaceholder alt={area.imageAlt} aspectRatio="video" />
              <div className="p-6">
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-3">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2d6e3a] hover:underline"
          >
            View all research areas
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
