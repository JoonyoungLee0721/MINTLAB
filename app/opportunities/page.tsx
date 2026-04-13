import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Join the Physical AI Lab — open positions for PhD students, postdocs, and researchers.",
};

const positions = [
  {
    id: "graduate",
    title: "Graduate Students",
    description:
      "We are recruiting motivated graduate students (PhD and MS) to work at the frontiers of Physical AI, foundation models, and world models.",
    background: [
      "Interest in Physical AI, foundation models, world models, healthcare AI, autonomous vehicles, or various robots like humanoids, exoskeletons, and manipulators",
      "Strong motivation and eagerness to work on challenging research problems",
    ],
    instructions:
      "Apply through the Korea University graduate admissions portal and mention the MINT Lab in your statement of purpose. Email daekyum@korea.ac.kr attaching your CV, transcripts, and a brief research statement.",
  },
  {
    id: "postdoc",
    title: "Postdoctoral Researchers",
    description:
      "We have postdoc openings for exceptional candidates who have completed (or are near completion of) a PhD in robotics, machine learning, computer vision, or a related field. Postdocs lead independent research projects and mentor graduate students.",
    background: [
      "PhD in robotics, computer science, electrical engineering, or related field",
      "Strong publication record at top venues (RSS, ICRA, CoRL, NeurIPS, ICML, Science Robotics, etc.)",
      "Expertise in one or more of: foundation models, world models, reinforcement learning, computer vision, wearable AI, or autonomous systems",
      "Experience with real robot systems or clinical/healthcare applications is a strong plus",
    ],
    instructions:
      "Email daekyum@korea.ac.kr with subject \"[Postdoc Application] Your Name\" including your CV and three representative publications.",
  },
  {
    id: "undergrad",
    title: "Undergraduate Researchers",
    description:
      "We offer undergraduate research opportunities for students who want hands-on experience in Physical AI research. Projects span robot learning, wearable sensing, computer vision, autonomous vehicles, and healthcare applications.",
    background: [],
    instructions:
      "Email daekyum@korea.ac.kr including your CV, current transcript, and a short paragraph on why you're interested in Physical AI.",
  },
];

export default function OpportunitiesPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader
          label="Join Us"
          title="Open Positions"
          description="We are always looking for passionate, curious, and collaborative researchers to join our team. We welcome applicants from diverse backgrounds."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors"
            >
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                {pos.title}
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {pos.description}
              </p>
              {pos.background.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    Desired Background
                  </h3>
                  <ul className="space-y-2">
                    {pos.background.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <CheckCircle
                          size={14}
                          className="text-[#2d6e3a] mt-0.5 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="bg-neutral-50 rounded-lg p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  How to Apply
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pos.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#2a4d34] rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to Apply?</h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            We read every application carefully. If your background aligns with
            our research, we will reach out for a conversation. Responses may
            take several weeks.
          </p>
          <a
            href="mailto:daekyum@korea.ac.kr"
            className="inline-flex items-center gap-2 bg-white text-[#2a4d34] px-7 py-3 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <Mail size={16} />
            daekyum@korea.ac.kr
          </a>
        </div>
      </div>
    </div>
  );
}
