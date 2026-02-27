import { Card } from "@/components/ui/card";
import { female2Testi, femaleTesti, maleTesti } from "@/images";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "nandar-hlaing",
    name: "Nandar Hlaing",
    role: "Product Designer",
    course: "UI/UX Design Track",
    quote:
      "The mentor feedback loops were the biggest difference for me. I now present design decisions with confidence and structure.",
    image: femaleTesti,
  },
  {
    id: "mya-thiri-oo",
    name: "Mya Thiri Oo",
    role: "Junior Developer",
    course: "Frontend Engineering Program",
    quote:
      "Every module pushed me to build real features, not just follow tutorials. My portfolio became strong enough for interview callbacks.",
    image: female2Testi,
  },
  {
    id: "aung-khant-min",
    name: "Aung Khant Min",
    role: "Career Switcher",
    course: "Full-Stack Career Launch",
    quote:
      "I came from a non-tech background. The weekly project reviews helped me close skill gaps fast and become job-ready in months.",
    image: maleTesti,
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="typo-section-title">Testimonials</h2>
          <h3 className="typo-section-subtitle mt-3 text-center">
            Witness our students' success stories
          </h3>
        </div>

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="mx-auto flex h-full w-full max-w-md flex-col border border-slate-200 bg-white p-5 shadow-lg sm:max-w-none sm:p-6 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="mb-4 flex items-start justify-between gap-4 pr-8">
                <div className="min-w-0">
                  <p className="typo-card-title">{testimonial.name}</p>
                  <p className="typo-section-body-sm">{testimonial.role}</p>
                  <p className="typo-form-subtitle">{testimonial.course}</p>
                </div>
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex size-14 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold tracking-wide text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                    {getInitials(testimonial.name)}
                  </div>
                )}
              </div>

              <p className="typo-section-body flex-1">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
