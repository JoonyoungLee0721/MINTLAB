import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research themes and areas of the Physical AI Lab.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
