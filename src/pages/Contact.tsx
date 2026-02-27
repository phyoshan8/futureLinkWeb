import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (_data: ContactFormData) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <main className="min-h-screen bg-white py-14 dark:bg-slate-950">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-indigo-50/60 px-6 py-8 shadow-sm sm:px-8 sm:py-10 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="text-center">
            <h1 className="typo-page-title font-montserrat">
              Reach FutureLink
            </h1>
            <p className="typo-section-body mt-4">
              Questions about courses, enrollment, or mentoring support? Use the
              contact options below and we will help you choose the right path.
            </p>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="space-y-2">
              <label htmlFor="full-name" className="typo-form-label">
                Full name
              </label>
              <input
                {...register("fullName")}
                id="full-name"
                type="text"
                className={`typo-form-input h-12 w-full rounded-xl border bg-white px-4 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="typo-form-error">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="typo-form-label">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className={`typo-form-input h-12 w-full rounded-xl border bg-white px-4 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="name@email.com"
              />
              {errors.email && (
                <p className="typo-form-error">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="typo-form-label">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className={`typo-form-input w-full rounded-xl border bg-white px-4 py-3 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="Tell us what you need help with..."
              />
              {errors.message && (
                <p className="typo-form-error">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="typo-cta w-full rounded-xl bg-indigo-500 px-6 py-3 text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Send Message
            </button>

            {isSubmitted && (
              <p
                className="typo-success-title text-center text-sm text-emerald-600 dark:text-emerald-400"
                aria-live="polite"
              >
                Message sent successfully.
              </p>
            )}
          </form>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="h- rounded-3xl border border-amber-100 bg-cyan-600 p-6 text-white sm:p-8 dark:bg-indigo-500">
            <h2 className="font-montserrat text-2xl font-bold">
              Visit Our Campus
            </h2>

            <div className="mt-6 space-y-8">
              <div className="grid grid-cols-[7.5rem_1fr] items-start gap-4">
                <p className="typo-card-title pt-1 text-indigo-50">Address</p>
                <p className="typo-section-body justify-self-end text-right text-white">
                  Corner of Myindawthar and Thumana Rd, Yangon
                </p>
              </div>

              <div className="grid grid-cols-[7.5rem_1fr] items-start gap-4">
                <p className="typo-card-title pt-1 text-indigo-50">
                  Office hours
                </p>
                <p className="typo-section-body justify-self-end text-right text-white">
                  Monday-Friday, 8:00 AM - 4:30 PM
                </p>
              </div>

              <div className="grid grid-cols-[7.5rem_1fr] items-start gap-4">
                <p className="typo-card-title pt-1 text-indigo-50">Phone</p>
                <a
                  href="tel:+959798187378"
                  className="typo-section-body justify-self-end text-right text-white underline-offset-4 hover:underline"
                >
                  09798187378
                </a>
              </div>
            </div>
          </div>

          <div className="h-full overflow-hidden border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <iframe
              title="FutureLink Yangon Street View"
              src="https://www.google.com/maps?q=Myin+Taw+Thar+Rd+and+Thumana+Rd+Yangon&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-85 w-full md:h-full md:min-h-90"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
