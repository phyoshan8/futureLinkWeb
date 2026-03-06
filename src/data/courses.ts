import {
  activityEng,
  activityIT,
  appliedAiBootcampEvent,
  chinese,
  engCls,
  frontendLabEvent,
  fullStack,
  fullStackDev,
  mandrin,
  prgBasic,
  projects,
  uiUx,
} from "@/images";

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
  {
    title: "Frontend Development with React",
    category: "PROGRAMMING",
    tagline: "Build responsive interfaces faster",
    image: frontendLabEvent,
    description:
      "Create component-driven web apps with React, routing patterns, and reusable UI systems for real project delivery.",
  },
  {
    title: "Backend APIs with Node.js",
    category: "PROGRAMMING",
    tagline: "Reliable APIs for real products",
    image: fullStackDev,
    description:
      "Design RESTful services, validation layers, and production-ready API architecture with practical deployment workflows.",
  },
  {
    title: "JavaScript Deep Dive",
    category: "PROGRAMMING",
    tagline: "Understand the language deeply",
    image: activityIT,
    description:
      "Strengthen fundamentals in scope, closures, asynchronous patterns, and modern syntax through focused coding labs.",
  },
  {
    title: "TypeScript for Teams",
    category: "PROGRAMMING",
    tagline: "Safer code at scale",
    image: projects,
    description:
      "Use type systems, generics, and strict tooling to reduce bugs and improve collaboration across larger codebases.",
  },
  {
    title: "Mobile App Development Basics",
    category: "PROGRAMMING",
    tagline: "From web skills to mobile",
    image: activityIT,
    description:
      "Build cross-platform mobile experiences with component patterns, state management, and practical release preparation.",
  },
  {
    title: "Git & Collaboration Workflows",
    category: "PROGRAMMING",
    tagline: "Ship code without chaos",
    image: projects,
    description:
      "Master branching, pull request hygiene, and conflict handling to support professional team development practices.",
  },
  {
    title: "Database Design Fundamentals",
    category: "PROGRAMMING",
    tagline: "Design data that lasts",
    image: fullStack,
    description:
      "Learn relational modeling, normalization, and query optimization to support efficient and maintainable applications.",
  },
  {
    title: "Testing & QA for Web Apps",
    category: "PROGRAMMING",
    tagline: "Confidence before release",
    image: frontendLabEvent,
    description:
      "Apply unit, integration, and end-to-end testing patterns to improve reliability and reduce production regressions.",
  },
  {
    title: "System Design for Beginners",
    category: "PROGRAMMING",
    tagline: "Think beyond one feature",
    image: fullStackDev,
    description:
      "Understand scalability, caching, and service boundaries through practical system design exercises and guided reviews.",
  },
  {
    title: "UX Research Essentials",
    category: "DESIGN",
    tagline: "Design from evidence",
    image: uiUx,
    description:
      "Run interviews, synthesize insights, and convert user needs into product opportunities and validated design direction.",
  },
  {
    title: "Interaction Design Patterns",
    category: "DESIGN",
    tagline: "Flows that feel natural",
    image: uiUx,
    description:
      "Craft intuitive interactions, microflows, and feedback states that improve usability across web and mobile interfaces.",
  },
  {
    title: "Design Systems in Practice",
    category: "DESIGN",
    tagline: "Consistency with speed",
    image: projects,
    description:
      "Build token-driven UI systems, reusable components, and governance habits that scale design quality across teams.",
  },
  {
    title: "Wireframing to Prototyping",
    category: "DESIGN",
    tagline: "From idea to clickable journey",
    image: uiUx,
    description:
      "Transform requirements into clear user flows, wireframes, and interactive prototypes for faster product decisions.",
  },
  {
    title: "Visual Design Foundations",
    category: "DESIGN",
    tagline: "Typography, color, hierarchy",
    image: uiUx,
    description:
      "Develop strong visual communication through layout systems, spacing discipline, and polished interface composition.",
  },
  {
    title: "Product Thinking for Designers",
    category: "DESIGN",
    tagline: "Impact over decoration",
    image: projects,
    description:
      "Align design choices with business goals, user outcomes, and measurable product metrics in iterative workflows.",
  },
  {
    title: "Spoken English for Professionals",
    category: "LANGUAGE",
    tagline: "Speak clearly at work",
    image: engCls,
    description:
      "Practice meetings, interviews, and presentations with pronunciation coaching and structured speaking feedback.",
  },
  {
    title: "Business Writing in English",
    category: "LANGUAGE",
    tagline: "Write with precision",
    image: activityEng,
    description:
      "Improve emails, proposals, and reports through concise writing frameworks and practical editing exercises.",
  },
  {
    title: "English Grammar Accelerator",
    category: "LANGUAGE",
    tagline: "Rules made practical",
    image: engCls,
    description:
      "Fix high-impact grammar mistakes and build sentence confidence through drills tied to real communication contexts.",
  },
  {
    title: "IELTS Preparation Intensive",
    category: "LANGUAGE",
    tagline: "Score-focused strategy",
    image: activityEng,
    description:
      "Train for listening, reading, writing, and speaking sections with timed practice and targeted performance coaching.",
  },
  {
    title: "Mandarin for Beginners",
    category: "LANGUAGE",
    tagline: "Start speaking early",
    image: mandrin,
    description:
      "Learn pronunciation, everyday vocabulary, and sentence patterns through guided speaking-first lesson design.",
  },
  {
    title: "Mandarin for Business Contexts",
    category: "LANGUAGE",
    tagline: "Professional communication skills",
    image: chinese,
    description:
      "Develop workplace Mandarin for introductions, negotiation basics, and client communication scenarios.",
  },
  {
    title: "Public Speaking in English",
    category: "LANGUAGE",
    tagline: "Confident stage communication",
    image: activityEng,
    description:
      "Strengthen delivery, storytelling, and audience engagement with coached rehearsals and presentation feedback loops.",
  },
  {
    title: "Cross-Cultural Communication",
    category: "LANGUAGE",
    tagline: "Communicate across borders",
    image: chinese,
    description:
      "Understand communication styles, etiquette, and language nuance to collaborate effectively in global environments.",
  },
  {
    title: "Data Analytics with SQL",
    category: "DATA",
    tagline: "Query insights confidently",
    image: activityIT,
    description:
      "Use SQL to extract, join, and analyze datasets while translating findings into clear business decisions.",
  },
  {
    title: "Python for Data Analysis",
    category: "DATA",
    tagline: "From raw data to insight",
    image: prgBasic,
    description:
      "Apply Python workflows for data cleaning, exploratory analysis, and reporting through practical case studies.",
  },
  {
    title: "Data Visualization Fundamentals",
    category: "DATA",
    tagline: "Tell stories with numbers",
    image: projects,
    description:
      "Design clear charts and dashboards that communicate trends, comparisons, and key decisions to stakeholders.",
  },
  {
    title: "Applied AI Foundations",
    category: "AI",
    tagline: "Practical AI for builders",
    image: appliedAiBootcampEvent,
    description:
      "Understand core AI concepts, model usage patterns, and responsible implementation through hands-on mini projects.",
  },
  {
    title: "Prompt Engineering for Productivity",
    category: "AI",
    tagline: "Better prompts, better output",
    image: appliedAiBootcampEvent,
    description:
      "Learn reusable prompting frameworks for analysis, content drafting, and coding support in real work scenarios.",
  },
  {
    title: "Cybersecurity Basics",
    category: "CYBERSECURITY",
    tagline: "Secure-first mindset",
    image: activityIT,
    description:
      "Learn threat fundamentals, secure authentication patterns, and practical defense hygiene for modern applications.",
  },
  {
    title: "Web Security for Developers",
    category: "CYBERSECURITY",
    tagline: "Defend common attack paths",
    image: fullStackDev,
    description:
      "Prevent vulnerabilities like XSS, CSRF, and injection through secure coding practices and review checklists.",
  },
  {
    title: "Cloud Fundamentals",
    category: "CLOUD",
    tagline: "Deploy with confidence",
    image: fullStack,
    description:
      "Understand cloud services, compute patterns, and deployment basics to run modern applications reliably.",
  },
  {
    title: "DevOps Starter Track",
    category: "DEVOPS",
    tagline: "Automate your delivery flow",
    image: projects,
    description:
      "Build CI/CD pipelines, environment strategies, and monitoring habits that improve release speed and stability.",
  },
];
