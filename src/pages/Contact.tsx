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
          <p className="typo-eyebrow">
            Contact
          </p>
          <h1 className="typo-page-title mt-3">
            Reach FutureLink
          </h1>
          <p className="typo-section-body mt-4">
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
              <p className="typo-eyebrow-tight">
                {item.label}
              </p>
              <Link
                to={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noreferrer" : undefined}
                className="typo-card-title mt-3 block transition hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item.value}
              </Link>
              <p className="typo-card-description mt-3">
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
