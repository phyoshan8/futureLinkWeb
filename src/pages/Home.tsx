import { useEffect, useState } from "react";
import CoursesSection from "../components/CoursesSection";

const images = ["/activityEng.jpg", "/activityIT.jpg", "/fullStack.jpg"];

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
          <div className="space-y-6 text-white">
            <p className="text-xs font-semibold tracking-[0.45em] text-indigo-300 uppercase">
              FutureLink • Global Learning Studio
            </p>
            <h1 className="font-playfair text-4xl leading-snug font-bold text-white md:text-6xl">
              Learning that keeps pace with your ambition
            </h1>
            <p className="font-montserrat text-lg text-indigo-100 md:text-xl">
              Industry mentors, hands-on projects, and a global collective of
              peers who turn daring ideas into real outcomes. We design every
              course to make the future you want feel within reach.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href="#courses"
                className="inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 transition hover:bg-indigo-400"
              >
                See featured tracks
              </a>
              <a
                href="/enroll"
                className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-white transition hover:border-white hover:text-indigo-50"
              >
                Start enrollment
              </a>
            </div>
          </div>
        </div>
      </section>

      <CoursesSection />
    </>
  );
};

export default Home;
