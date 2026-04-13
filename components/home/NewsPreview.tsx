"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import { formatDate } from "@/lib/utils";

const recent = newsItems.slice(0, 3);

export default function NewsPreview() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="News" title="Recent News" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recent.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-xl border border-neutral-200 p-6"
            >
              <time className="text-xs text-neutral-400 mb-2 block">
                {formatDate(item.date)}
              </time>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-3">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2d6e3a] hover:underline"
          >
            All news
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
