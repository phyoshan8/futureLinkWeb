const About = () => {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="w-full pb-8">
        <div className="bg-[url('/aboutPg.jpg')] bg-cover bg-center">
          <div className="min-h-[260px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[560px]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.4em] text-indigo-500 uppercase">
            In Action
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Moments from our learning studio
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-300">
            From language labs to build sprints, these snapshots capture how
            students learn together.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {[
            {
              src: "/activityEng.jpg",
              title: "Conversation labs",
              caption: "Language practice that feels natural and supportive.",
            },
            {
              src: "/activityIT.jpg",
              title: "Team build sprints",
              caption: "Collaborative coding and product experiments.",
            },
            {
              src: "/projects.jpg",
              title: "Showcase projects",
              caption: "Portfolios built with real-world feedback.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-md dark:bg-slate-800">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.35em] text-indigo-500 uppercase">
                  Cohort spotlight
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300 animate-float">
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
