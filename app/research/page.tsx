import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "@/data/research";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Research",
  description: "Research themes and areas of the Physical AI Lab.",
};

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

export default function ResearchPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader
          label="Research"
          title="Research Areas"
          description="Our research explores Physical AI through foundation models and world models, with applications in healthcare, robotics, autonomous vehicles, and computer vision."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area) => (
            <Link
              key={area.id}
              href={`/research/${area.id}`}
              className="group block border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
