"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function OpportunitiesPreview() {
  return (
    <section className="pt-2 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2a4d34] rounded-2xl p-10 md:p-14 text-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Join Our Lab</h2>
                <p className="text-white/70 max-w-xl leading-relaxed text-sm mb-4">
                  We are actively recruiting PhD students, postdocs, and
                  undergraduate researchers passionate about Physical AI,
                  embodied intelligence, and robotics. We value diverse
                  backgrounds and bold ideas.
                </p>
                <p className="text-white/50 max-w-xl leading-relaxed text-xs italic">
                  &ldquo;Imagination is the beginning of creation. You imagine what you desire,
                  you will what you imagine, and at last, you create what you will.&rdquo;
                  <span className="not-italic"> — George Bernard Shaw</span>
                </p>
              </div>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 bg-white text-[#2a4d34] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors shrink-0"
            >
              View Opportunities
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
