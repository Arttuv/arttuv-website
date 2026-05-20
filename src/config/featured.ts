export interface FeaturedGroup {
  title: string;
  description: string;
  slugs: string[];
  /**
   * Slug of the article to render as the visual spotlight at the top of the
   * group. Must also appear in `slugs`. The remaining slugs render as slim
   * cards beneath the spotlight.
   */
  spotlight?: string;
}

export const featuredGroups: FeaturedGroup[] = [
  {
    title: "AI & Augmentation",
    description: "My ideological approach is to focus on how AI, automation and software tools in general can augment human cognitive skills rather than replace them.",
    spotlight: "ironies-of-automation-and-ai",
    slugs: [
      "ironies-of-automation-and-ai",
      "augment-complement-empower-yourself",
      "augment-complement-and-empower",
      "automation-and-the-role-of-human-operators"
    ],
  },
  {
    title: "Consulting & Process",
    description: "Thoughts on agile, software development, and the consulting profession.",
    spotlight: "agile-still-relevant",
    slugs: [
      "agile-still-relevant",
      "consulting",
      "no-estimates",
      "commitment-vs-forecast",
    ],
  },
  {
    title: "Situation Awareness",
    description: "Situation awareness has been an especially interesting focus area to me. I'm often building tools for professionals, and it's essential to keep users engaged and in the loop. ",
    spotlight: "designing-to-support-dsa",
    slugs: [
      "situation-awareness",
      "distributed-situation-awareness-dsa",
      "designing-to-support-dsa"
    ],
  },
];
