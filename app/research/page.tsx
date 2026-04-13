"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/data/research";
import Badge from "@/components/ui/Badge";

type Tab = "main" | "robot-intelligence" | "healthcare-intelligence";

const tabs: { key: Tab; label: string }[] = [
  { key: "main", label: "Research" },
  { key: "robot-intelligence", label: "Robot" },
  { key: "healthcare-intelligence", label: "Healthcare" },
];

const areaImages: Record<string, string> = {
  "healthcare-intelligence": "/MINTLAB/images/Wearable.png",
  "robot-intelligence": "/MINTLAB/images/3DRecon.jpg",
};

const areaSummary: Record<string, string> = {
  "healthcare-intelligence":
    "AI-driven wearable sensing, foundation models for medical applications, and adaptive control of exoskeletons for rehabilitation and healthcare.",
  "robot-intelligence":
    "Vision-language-action models, world models for physical reasoning, autonomous vehicles, and learning-based manipulation and locomotion.",
};

interface VideoItem {
  src: string;
  label: string;
}

const areaVideos: Record<string, VideoItem[]> = {
  "healthcare-intelligence": [
    { src: "/MINTLAB/images/SparseIMUs.mp4", label: "Pose Estimation using Sparse IMUs" },
    { src: "/MINTLAB/images/AnkleExosuit.mp4", label: "Ankle Exosuit for Post-Stroke Rehabilitation" },
    { src: "/MINTLAB/images/IntentionDetection.mp4", label: "Intention Detection for Wearable Robot Hand" },
    { src: "/MINTLAB/images/Humanoid_IMU_Teleoperation_DEMO.mp4", label: "Humanoid IMU Teleoperation" },
  ],
  "robot-intelligence": [
    { src: "/MINTLAB/images/VLA_DEMO.mp4", label: "Vision-Language-Action Model" },
    { src: "/MINTLAB/images/TactileDEMO.mp4", label: "Robotic Manipulation with Tactile Sensor" },
    { src: "/MINTLAB/images/HumanoidDEMO.mp4", label: "Humanoid Control" },
    { src: "/MINTLAB/images/PocketRacer.mp4", label: "Autonomous Vehicles and Racing" },
  ],
};

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<Tab>("main");

  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold text-neutral-900">Research Areas</h2>
          <div className="flex items-center gap-1 text-sm text-neutral-400">
            {tabs.map((tab, i) => (
              <span key={tab.key} className="flex items-center">
                {i > 0 && <span className="mx-1">/</span>}
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={
                    activeTab === tab.key
                      ? "font-bold text-[#2d6e3a]"
                      : "hover:text-neutral-600 transition-colors"
                  }
                >
                  {tab.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {activeTab === "main" && (
          <>
            <p className="mb-6 text-base text-neutral-500 leading-relaxed">
              Our research explores Physical AI through foundation models and world models, with applications in healthcare, robotics, autonomous vehicles, and computer vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id as Tab)}
                  className="group block text-left border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
                >
                  <div className="aspect-video relative bg-neutral-100 overflow-hidden">
                    <Image
                      src={areaImages[area.id] ?? ""}
                      alt={area.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h2 className="absolute bottom-4 left-5 text-2xl sm:text-3xl font-bold text-white">
                      {area.title}
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-base font-medium text-[#2d6e3a] leading-relaxed">
                      {areaSummary[area.id]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {activeTab !== "main" && (() => {
          const area = researchAreas.find((a) => a.id === activeTab);
          if (!area) return null;
          return (
            <>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {area.title}
              </h3>

              <p className="text-base text-neutral-600 leading-relaxed mb-10">
                {area.description}
              </p>

              {areaVideos[area.id] && areaVideos[area.id].length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {areaVideos[area.id].map((video) => (
                    <div key={video.src} className="rounded-xl overflow-hidden border border-neutral-200">
                      <video
                        className="w-full"
                        controls
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                      <p className="p-3 text-sm font-medium text-neutral-700 text-center">
                        {video.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mb-10">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                  Key Research Topics
                </h2>
                <ul className="space-y-2">
                  {area.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#2d6e3a] shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-12">
                {area.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
