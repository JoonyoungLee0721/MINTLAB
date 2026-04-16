"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    title: "Robot Intelligence",
    description:
      "Vision-language-action models, multi-agent planning, tactile sensing, and autonomous systems.",
    keywords: ["VLA Models", "Reinforcement Learning", "Computer Vision", "Humanoid"],
    href: "/research/robot-intelligence",
    image: "/MINTLAB/images/RobotMain.png",
    fit: "cover" as const,
  },
  {
    title: "Wearable & Healthcare",
    description:
      "AI-driven wearable sensors for human pose estimation, assistive robotics, and healthcare monitoring.",
    keywords: ["Exoskeleton", "IMU", "Rehabilitation", "Healthcare"],
    href: "/research/healthcare-intelligence",
    image: "/MINTLAB/images/Wearable.png",
    fit: "contain" as const,
  },
];

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Lab identity + mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mx-auto mb-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            <span className="text-[#609f68]">M</span>ovement{" "}
            <span className="text-[#609f68]">Int</span>elligence Lab
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-[95%] mx-auto">
            Our research spans{" "}
            <span className="font-semibold text-[#2a4d34]">Physical AI</span>,{" "}
            <span className="font-semibold text-[#2a4d34]">foundation models</span>, and{" "}
            <span className="font-semibold text-[#2a4d34]">world models</span>,
            applied to{" "}
            <span className="font-medium text-[#2d6e3a]">robotics</span>,{" "}
            <span className="font-medium text-[#2d6e3a]">autonomous vehicles</span>,{" "}
            <span className="font-medium text-[#2d6e3a]">healthcare</span>, and{" "}
            <span className="font-medium text-[#2d6e3a]">computer vision</span>.
            We bridge{" "}
            <span className="font-semibold text-neutral-800">
              wearable & healthcare
            </span>{" "}
            and{" "}
            <span className="font-semibold text-neutral-800">
              robot intelligence
            </span>{" "}
            to create systems that understand and interact with the physical
            world.
          </p>
        </motion.div>

        {/* Lab intro video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <video
            className="w-[90%] mx-auto rounded-2xl shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/MINTLAB/images/Main.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Research pillars heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-8"
        >
          Research Fields
        </motion.h2>

        {/* Research pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <Link
                href={pillar.href}
                className="group block bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="aspect-video relative bg-neutral-100 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className={`${pillar.fit === "contain" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-2xl sm:text-3xl font-bold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-base font-medium text-[#2d6e3a] leading-relaxed mb-3">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#609f68]/10 text-[#2d6e3a]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
