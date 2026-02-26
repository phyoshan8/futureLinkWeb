import { aboutPg, activityEng, activityIT, projects } from "@/images";

const About = () => {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="w-full pb-8">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutPg})` }}
        >
          <div className="min-h-65 sm:min-h-90 md:min-h-115 lg:min-h-140" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="typo-eyebrow">
            In Action
          </p>
          <h2 className="typo-section-title mt-2">
              Moments from our learning studio
          </h2>
          <p className="typo-section-body-sm mt-3 sm:text-base">
            From language labs to build sprints, these snapshots capture how
            students learn together.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {[
            {
              src: activityEng,
              title: "Conversation labs",
              caption: "Language practice that feels natural and supportive.",
            },
            {
              src: activityIT,
              title: "Team build sprints",
              caption: "Collaborative coding and product experiments.",
            },
            {
              src: projects,
              title: "Showcase projects",
              caption: "Projects built with real-world feedback.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="aspect-4/3 w-full overflow-hidden rounded-3xl bg-slate-100 shadow-md dark:bg-slate-800">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
              <div>
                <p className="typo-eyebrow">
                  Cohort spotlight
                </p>
                <h3 className="typo-section-title mt-2">
                  {item.title}
                </h3>
                <p className="typo-section-body animate-float mt-3">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
