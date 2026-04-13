import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchAreas } from "@/data/research";
import Badge from "@/components/ui/Badge";

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

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return researchAreas.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const area = researchAreas.find((a) => a.id === id);
  if (!area) return { title: "Research Area Not Found" };
  return {
    title: area.title,
    description: `${area.title} — Research at MINT Lab, Korea University.`,
  };
}

export default async function ResearchDetailPage({ params }: Props) {
  const { id } = await params;
  const area = researchAreas.find((a) => a.id === id);
  if (!area) notFound();

  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <h1 className="text-3xl font-bold text-neutral-900 mb-6">
          {area.title}
        </h1>

        {areaVideos[area.id] && areaVideos[area.id].length > 0 && (
          <div
            className="grid gap-4 mb-10"
            style={{
              gridTemplateColumns: `repeat(${areaVideos[area.id].length}, minmax(0, 1fr))`,
            }}
          >
            {areaVideos[area.id].map((video) => (
              <div key={video.src} className="rounded-xl overflow-hidden border border-neutral-200">
                <video
                  className="w-full"
                  autoPlay
                  loop
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

        <p className="text-base text-neutral-600 leading-relaxed mb-10">
          {area.description}
        </p>

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

      </div>
    </div>
  );
}
