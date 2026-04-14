import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { people } from "@/data/people";
import { ArrowLeft, Mail, GraduationCap, Briefcase } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return people.filter((p) => p.hasProfile).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const person = people.find((p) => p.id === id && p.hasProfile);
  if (!person) return { title: "Member Not Found" };
  return {
    title: person.name,
    description: `${person.name} — ${person.role} at MINT Lab, Korea University.`,
  };
}

export default async function MemberProfilePage({ params }: Props) {
  const { id } = await params;
  const person = people.find((p) => p.id === id && p.hasProfile);
  if (!person) notFound();

  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <Link
          href="/members"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Members
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {person.photo && (
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover object-[center_15%]"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">
              {person.name}
            </h1>
            {person.title && (
              <p className="text-base text-[#2d6e3a] font-medium mb-3">
                {person.title}
              </p>
            )}
            {person.affiliations && (
              <div className="space-y-0.5 mb-4">
                {person.affiliations.map((aff) => (
                  <p key={aff} className="text-sm text-neutral-500">
                    {aff}
                  </p>
                ))}
              </div>
            )}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-[#2d6e3a] transition-colors"
              >
                <Mail size={14} />
                {person.email}
              </a>
            )}
          </div>
        </div>

        {/* Bio */}
        {person.bio && (
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 pb-2 border-b border-neutral-100">
              About
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {person.bio}
            </p>
          </div>
        )}

        {/* Experience */}
        {person.experience && person.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 pb-2 border-b border-neutral-100 flex items-center gap-2">
              <Briefcase size={14} />
              Experience
            </h2>
            <div className="space-y-3">
              {person.experience.map((exp) => (
                <div key={`${exp.title}-${exp.institution}`} className="flex items-start gap-3">
                  <span className="text-xs text-neutral-400 w-28 shrink-0 pt-0.5">
                    {exp.period}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {exp.title}
                    </p>
                    <p className="text-xs text-neutral-500">{exp.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {person.education && person.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 pb-2 border-b border-neutral-100 flex items-center gap-2">
              <GraduationCap size={14} />
              Education
            </h2>
            <div className="space-y-3">
              {person.education.map((edu) => (
                <div key={`${edu.degree}-${edu.institution}`} className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-neutral-900 w-12 shrink-0">
                    {edu.year}
                  </span>
                  <div>
                    <p className="text-sm text-neutral-800">
                      <span className="font-medium">{edu.degree}</span> in {edu.field}
                    </p>
                    <p className="text-xs text-neutral-500">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
