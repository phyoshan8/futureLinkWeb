import { engCls, fullStack, mandrin, prgBasic, uiUx } from "@/images";

export interface Course {
  title: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
}

export const courses: Course[] = [
  {
    title: "Full Stack Web Development",
    category: "PROGRAMMING",
    tagline: "Project-first, modern stack",
    image: fullStack,
    description:
      "Master React, Node.js, and deployment while building production-grade applications with real data and coach review.",
  },
  {
    title: "UI/UX & Product Design",
    category: "DESIGN",
    tagline: "Human stories, delightful interfaces",
    image: uiUx,
    description:
      "Lead research sprints, rapid prototyping, and design critiques to ship polished experiences that solve measurable problems.",
  },
  {
    title: "Programming Basics",
    category: "PROGRAMMING",
    tagline: "From Zero to Hero in Coding",
    image: prgBasic,
    description:
      "Learn logic, data structures, and modern tooling through paired labs and milestone feedback loops.",
  },
  {
    title: "Master English Language",
    category: "LANGUAGE",
    tagline: "Storytelling with clarity",
    image: engCls,
    description:
      "Grow grammar, pronunciation, and presentation skills with coached conversations and international peer practice.",
  },
  {
    title: "Mandarin Immersion",
    category: "LANGUAGE",
    tagline: "Connect across cultures",
    image: mandrin,
    description:
      "Progressive lessons, native-speaking mentors, and scenario challenges help you speak, read, and write Mandarin naturally.",
  },
];
