import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const categoryFilters = [
    ...new Set(courses.map((course) => course.category)),
  ].slice(0, 3);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  return (
    <section
      id="courses"
      className={`bg-white/80 py-16 pb-16 sm:py-20 dark:bg-slate-950/70 ${className ?? ""}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-3 text-center md:text-left">
          <p className="typo-eyebrow tracking-[0.5em]">Courses</p>
          <h2 className="typo-section-title md:text-4xl">{heading}</h2>
          <p className="typo-section-body text-left md:text-lg">{subheading}</p>
        </div>

        <div className="just mt-8 flex flex-col items-end space-y-3">
          <p className="typo-eyebrow text-center md:text-left">
            Filter By Category
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {categoryFilters.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory((prev) =>
                      prev === category ? null : category,
                    )
                  }
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition",
                    isActive
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-500/20 dark:text-indigo-100"
                      : "border-slate-300 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-100",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={`${course.title}-${course.category}`}
              course={course}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p className="typo-section-body mt-8 text-center">
            No courses in this category yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
