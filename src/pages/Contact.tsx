import { Link } from "react-router";

const contactItems = [
  {
    label: "Phone",
    value: "09261800474",
    href: "tel:+95909261800474",
    note: "Mon-Fri, 9:00 AM to 6:00 PM",
  },
  {
    label: "Email",
    value: "hello@futurelink.academy",
    href: "mailto:hello@futurelink.academy",
    note: "We usually reply within one business day",
  },
  {
    label: "Location",
    value: "FutureLink Academy, Yangon, Myanmar",
    href: "https://maps.app.goo.gl/tkSVf1oHBGYUpmoL6",
    note: "In-person advising by appointment",
  },
];

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.4em] text-indigo-500 uppercase">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Reach FutureLink
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Questions about courses, enrollment, or mentoring support? Use the
            contact options below and we will help you choose the right path.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactItems.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-indigo-500 uppercase">
                {item.label}
              </p>
              <Link
                to={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noreferrer" : undefined}
                className="mt-3 block text-lg font-semibold text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              >
                {item.value}
              </Link>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
