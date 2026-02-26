import CourseCarousel from "@/components/courses/CourseCarousel";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import { courses } from "@/data/courses";
import { activityEng, activityIT, fullStack, leftBanner } from "@/images";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const images = [activityEng, activityIT, fullStack];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    //timer interval
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    //setActiveSlides
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* image sliders */}
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center blur-sm transition-opacity duration-1000 ease-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-indigo-900/80 to-slate-950/70" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-32 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="typo-eyebrow-soft">FutureLink • Learning Studio</h1>
            <p className="typo-hero-title">
              Learning that keeps pace with your ambition
            </p>
            <p className="typo-hero-body">
              Industry mentors, hands-on projects, and a community of ambitious
              peers who turn daring ideas into real outcomes. We design every
              course to make the future you want feel within reach.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Course Section  */}
      <section className="py-16">
        <div className="mx-auto mb-6 flex w-full justify-between px-6">
          <h2 className="typo-section-title">Featured Courses</h2>
          <Link
            to="/courses"
            className="typo-link-accent mb-6 cursor-pointer hover:underline md:text-lg"
          >
            View All
          </Link>
        </div>
        <div className="mx-auto grid h-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-[2fr_3fr] lg:px-8">
          <div className="relative h-56 overflow-hidden rounded-lg sm:h-72 md:h-full">
            <img
              src={leftBanner}
              alt="Featured courses"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/35 to-transparent" />

            <div className="relative z-10 flex h-full items-end p-4 sm:p-6">
              <div className="flex w-full items-start gap-4 md:flex-col">
                <h3 className="typo-section-title w-1/2 text-white md:w-full">
                  Learn With Mentors
                </h3>
                <p className="typo-section-body-sm w-1/2 text-white/90 md:w-full">
                  Build practical skills through guided projects and constant
                  feedback.
                </p>
              </div>
            </div>
          </div>

          <CourseCarousel courses={courses} className="min-w-0" />
        </div>
      </section>

      <UpcomingEventsSection />
    </>
  );
};

export default Home;
