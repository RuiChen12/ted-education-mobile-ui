import type { Href } from "expo-router";

export type TrackCategory = {
  id: "cas" | "photography" | "results";
  title: string;
  description: string;
  route: Href;
};

export const trackCategories: TrackCategory[] = [
  {
    id: "cas",
    title: "CAS Assessment",
    description: "Take a CAS Assessment",
    route: "/track/castest",
  },
  {
    id: "photography",
    title: "Standardized Photography",
    description: "Take guided pictures of your eyes",
    route: "/track/imaging",
  },
  {
    id: "results",
    title: "Review Results",
    description: "Review your CAS scores",
    route: "/track/review",
  },
];
