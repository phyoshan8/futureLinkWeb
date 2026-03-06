import CourseCard from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface CoursesSectionProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

const CoursesSection = ({
  heading,
  subheading,
  className,
}: CoursesSectionProps) => {
  const categoryFilters = [
    ...new Set(courses.map((course) => course.category)),
  ].sort();
  const categoryOptions = ["All", ...categoryFilters];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //pagination
  const pageSize = 6;
  const [visibleCount, setVisibleCount] = useState(pageSize);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [selectedCategory]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);
  const shownCount = visibleCourses.length;
  const totalCount = filteredCourses.length;
  const hasMore = shownCount < totalCount;
  useEffect(() => {
    if (!isDropdownOpen) return;

    const closeDropdown = () => setIsDropdownOpen(false);

    window.addEventListener("scroll", closeDropdown, { passive: true });
    window.addEventListener("resize", closeDropdown);

    return () => {
      window.removeEventListener("scroll", closeDropdown);
      window.removeEventListener("resize", closeDropdown);
    };
  }, [isDropdownOpen]);

  return (
    <section
      id="courses"
      className={`bg-white/80 py-16 pb-16 sm:py-20 dark:bg-slate-950/70 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-3 text-center md:text-left">
          <p className="typo-eyebrow tracking-[0.5em]">Courses</p>
          <h2 className="typo-section-title md:text-4xl">{heading}</h2>
          <p className="typo-section-body text-left md:text-lg">{subheading}</p>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-3 md:items-end">
          <p className="typo-eyebrow text-center md:text-left">
            Filter By Category
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <DropdownMenu
              modal={false}
              open={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-40 justify-between border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                  variant="outline"
                >
                  {selectedCategory}
                  <ChevronDown className="size-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="end"
                sideOffset={6}
                avoidCollisions={false}
                className="w-40 border-slate-200 bg-white text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {categoryOptions.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onSelect={() => {
                      setSelectedCategory(category);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50",
                      "data-[highlighted]:bg-slate-100 data-[highlighted]:text-slate-900 dark:data-[highlighted]:bg-slate-800 dark:data-[highlighted]:text-slate-50",
                      selectedCategory === category &&
                        "bg-indigo-100 text-indigo-900 dark:bg-indigo-500/25 dark:text-indigo-100",
                    )}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
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
        {hasMore && (
          <Button
            className="mt-5 flex justify-center-safe bg-blue-600"
            variant="outline"
            onClick={() =>
              setVisibleCount((prev) => Math.min(prev + pageSize, totalCount))
            }
          >
            Load more..
          </Button>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
