import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses taught by Prof. Daekyum Kim at Korea University.",
};

interface Course {
  code: string;
  title: string;
  note?: string;
}

interface Semester {
  label: string;
  courses: Course[];
}

const semesters: Semester[] = [
  {
    label: "Spring 2027",
    courses: [
      { code: "MOBI304", title: "Intelligent Mobility Systems (Artificial Intelligence)" },
      { code: "MOBI403", title: "Sensor Theory and Signal Processing II" },
    ],
  },
  {
    label: "Winter 2027",
    courses: [
      { code: "MOBI203", title: "Data Structure and Algorithm" },
    ],
  },
  {
    label: "Fall 2025",
    courses: [
      { code: "MOBI104", title: "How Things Work" },
      { code: "MOBI311", title: "Sensor Theory and Signal Processing I" },
      { code: "MECH485", title: "Introduction to Intelligent Robotics" },
    ],
  },
  {
    label: "Spring 2025",
    courses: [
      { code: "MOBI203", title: "Data Structure and Algorithm", note: "Selected as a top 20% course at Korea University" },
      { code: "MOBI304", title: "Intelligent Mobility Systems (Artificial Intelligence)" },
    ],
  },
  {
    label: "Fall 2024",
    courses: [
      { code: "MOBI103", title: "Robot Programming", note: "Selected as a top 20% course at Korea University" },
      { code: "MOBI104", title: "How Things Work" },
    ],
  },
  {
    label: "Spring 2024",
    courses: [
      { code: "MOBI202", title: "CAD Drawing and Its Applications", note: "Selected as a top 5% course at Korea University" },
      { code: "MOBI203", title: "Data Structure and Algorithm", note: "Selected as a top 20% course at Korea University" },
    ],
  },
  {
    label: "Fall 2023",
    courses: [
      { code: "MOBI103", title: "Robot Programming", note: "Selected as a top 20% course at Korea University" },
      { code: "MOBI104", title: "How Things Work" },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader label="Teaching" title="Courses" />
        <div className="space-y-10">
          {semesters.map((sem) => (
            <div key={sem.label}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                {sem.label}
              </h2>
              <ul className="space-y-2">
                {sem.courses.map((course) => (
                  <li
                    key={`${sem.label}-${course.code}`}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-x-4 gap-y-1"
                  >
                    <span className="text-sm font-mono font-semibold text-[#2d6e3a] w-24 shrink-0">
                      {course.code}
                    </span>
                    <span className="text-sm text-neutral-800">{course.title}</span>
                    {course.note && (
                      <span className="text-xs text-neutral-400 italic">
                        — {course.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
