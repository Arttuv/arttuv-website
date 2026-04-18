export interface FeaturedGroup {
  title: string;
  description: string;
  slugs: string[];
}

export const featuredGroups: FeaturedGroup[] = [
  {
    title: "AI & Augmentation",
    description: "How AI and tools can augment human cognitive skills rather than replace them.",
    slugs: [
      "augment-complement-empower-yourself",
      "augment-complement-and-empower",
      "automation-and-the-role-of-human-operators"
    ],
  },
  {
    title: "Consulting & Process",
    description: "Thoughts on agile, estimation, and the consulting profession.",
    slugs: [
      "agile-still-relevant",
      "consulting",
      "no-estimates",
      "commitment-vs-forecast",
    ],
  },
  {
    title: "Situation Awareness",
    description: "A deep dive into how humans maintain awareness in complex systems.",
    slugs: [
      "situation-awareness",
      "distributed-situation-awareness-dsa",
      "designing-to-support-dsa"
    ],
  },
];
