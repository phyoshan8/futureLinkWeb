import CoursesSection from "../components/CoursesSection";

const Courses = () => {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <CoursesSection
        heading="Featured Pathways"
        subheading="Hands-on programs with expert feedback, real project briefs, and a community that keeps you moving."
        className="pb-16"
      />
    </main>
  );
};

export default Courses;
