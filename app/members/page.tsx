import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { people, type Role } from "@/data/people";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";
import { Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Members",
  description: "Members of the Physical AI Lab.",
};

interface MemberGroup {
  label: string;
  roles: Role[];
}

const facultyGroups: MemberGroup[] = [
  { label: "Professor", roles: ["Professor"] },
  { label: "Research Professors and Postdocs", roles: ["Research Professor", "Postdoc"] },
];

const memberGroups: MemberGroup[] = [
  { label: "Graduate Students", roles: ["PhD Student", "Integrated MS/PhD", "MS Student"] },
  { label: "Undergraduates", roles: ["Undergraduate"] },
  { label: "Alumni", roles: ["Alumni"] },
];

export default function MembersPage() {
  return (
    <div className="pt-24 pb-8 px-6">
      <div className="max-w-[68.5rem] mx-auto">
        <SectionHeader
          label="Members"
          title="Lab Members"
        />
        {[...facultyGroups, ...memberGroups].map((group) => {
          const members = people.filter((p) => group.roles.includes(p.role));
          if (!members.length) return null;
          const isAlumni = group.label === "Alumni";
          return (
            <div key={group.label} className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6 pb-3 border-b border-neutral-100">
                {group.label}
              </h2>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {members.map((person) => {
                  const cardContent = (
                    <>
                      {!isAlumni && (
                        person.photo ? (
                          <div className="relative aspect-square bg-neutral-100">
                            <Image
                              src={person.photo}
                              alt={`Photo of ${person.name}`}
                              fill
                              className="object-cover object-[center_15%]"
                            />
                          </div>
                        ) : (
                          <ImagePlaceholder
                            alt={`Photo of ${person.name}`}
                            aspectRatio="square"
                          />
                        )
                      )}
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {person.name}
                        </h3>
                        <p className="text-xs text-neutral-500 mb-2">
                          {person.role}
                          {person.alumniNote && ` · ${person.alumniNote}`}
                        </p>
                        {!person.hasProfile && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {person.keywords.map((kw) => (
                              <Badge key={kw} className="text-[10px]">
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {!person.hasProfile && person.email && (
                          <div className="flex items-center gap-3">
                            <a
                              href={`mailto:${person.email}`}
                              className="text-neutral-400 hover:text-[#2d6e3a] transition-colors"
                              title="Email"
                            >
                              <Mail size={13} />
                            </a>
                          </div>
                        )}
                      </div>
                    </>
                  );
                  const cardClass = "border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-colors block";
                  return person.hasProfile ? (
                    <Link key={person.id} href={`/members/${person.id}`} className={cardClass}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={person.id} className={cardClass}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
