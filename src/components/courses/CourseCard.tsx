import { Card } from "@/components/ui/card";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  return (
    <Card
      className={cn(
        "flex h-full flex-col gap-0 overflow-hidden border border-slate-200 bg-white p-0 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70",
        className,
      )}
    >
      <div className="h-56 w-full overflow-hidden bg-slate-200">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="flex min-h-35 flex-col justify-between border-b border-slate-100 px-6 py-5 dark:border-slate-800">
        <div className="flex w-full justify-end">
          <span className="typo-card-category">{course.category}</span>
        </div>
        <p className="typo-card-title">{course.title}</p>

        <p className="typo-card-tagline mt-2">{course.tagline}</p>
      </div>
      <div className="mt-auto px-6 pt-4 pb-6">
        <p className="typo-card-description">{course.description}</p>
      </div>
    </Card>
  );
};

export default CourseCard;
