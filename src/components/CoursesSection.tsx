import { Card } from "@/components/ui/card";

const courses = [
  {
    title: "Full Stack Web Development",
    category: "PROGRAMMING",
    tagline: "Project-first, modern stack",
    image: "/fullStack.jpg",
    description:
      "Master React, Node.js, and deployment while building production-grade applications with real data and coach review.",
  },
  {
    title: "UI/UX & Product Design",
    category: "DESIGN",
    tagline: "Human stories, delightful interfaces",
    image: "/uiUx.jpg",
    description:
      "Lead research sprints, rapid prototyping, and design critiques to ship polished experiences that solve measurable problems.",
  },
  {
    title: "Programming Fundamentals",
    category: "PROGRAMMING",
    tagline: " From Zero to Hero in Coding",
    image: "/prgBasic.jpg",
    description:
      "Learn logic, data structures, and modern tooling through paired labs and milestone feedback loops.",
  },
  {
    title: "Master English Language",
    category: "LANGUAGE",
    tagline: "Storytelling with clarity",
    image: "/engCls.jpg",
    description:
      "Grow grammar, pronunciation, and presentation skills with coached conversations and international peer practice.",
  },
  {
    title: "Mandarin Immersion",
    category: "LANGUAGE",
    tagline: "Connect across cultures",
    image: "/mandrin.jpg",
    description:
      "Progressive lessons, native-speaking mentors, and scenario challenges help you speak, read, and write Mandarin naturally.",
  },
];

interface CoursesSectionProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

const CoursesSection = ({
  heading = "Our Featured Courses",
  subheading = "Choose an immersive path with a mentor-guided curriculum, project studio, and global peer community.",
  className,
}: CoursesSectionProps) => {
  return (
    <section
      id="courses"
      className={`py-16 sm:py-20 ${className ?? ""} bg-white/80 pb-16 dark:bg-slate-950/70`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs tracking-[0.5em] text-indigo-500 uppercase">
            Courses
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            {heading}
          </h2>
          <p className="text-left text-base text-slate-600 md:text-center md:text-lg dark:text-slate-300">
            {subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="flex h-full flex-col gap-0 overflow-hidden border border-slate-200 bg-white p-0 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="h-56 w-full overflow-hidden bg-slate-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>
              <div className="flex min-h-35 flex-col justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {course.title}
                  </p>
                  <span className="text-[0.65rem] font-semibold tracking-[0.4em] text-indigo-500 uppercase dark:text-indigo-300">
                    {course.category}
                  </span>
                </div>
                <p className="mt-2 text-xs tracking-[0.5em] text-slate-500 uppercase dark:text-slate-400">
                  {course.tagline}
                </p>
              </div>
              <div className="mt-auto px-6 pt-4 pb-6">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {course.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
