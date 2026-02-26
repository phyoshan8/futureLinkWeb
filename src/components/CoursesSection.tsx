import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";

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
          <p className="typo-eyebrow tracking-[0.5em]">
            Courses
          </p>
          <h2 className="typo-section-title md:text-4xl">
            {heading}
          </h2>
          <p className="typo-section-body text-left md:text-center md:text-lg">
            {subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={`${course.title}-${course.category}`} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
