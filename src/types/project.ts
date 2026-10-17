export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  overview: string;
  tools: string[];
  role: string;
  accent: "rose" | "lilac" | "sage" | "peach";
  status: "Featured" | "In progress";
  repositoryUrl?: string;
  demoUrl?: string;
  metrics?: { label: string; value: string }[];
};
