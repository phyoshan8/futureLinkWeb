import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";
import CourseCard from "./CourseCard";

interface CourseCarouselProps {
  courses: Course[];
  className?: string;
}

const CourseCarousel = ({ courses, className }: CourseCarouselProps) => {
  if (courses.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className={cn("w-full", className)}
    >
      <CarouselContent>
        {courses.map((course) => (
          <CarouselItem key={`${course.title}-${course.category}`}>
            <CourseCard course={course} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-6 left-4 translate-y-0 border-slate-200 bg-white/90 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-900" />
      <CarouselNext className="top-6 right-4 translate-y-0 border-slate-200 bg-white/90 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-900" />
    </Carousel>
  );
};

export default CourseCarousel;
