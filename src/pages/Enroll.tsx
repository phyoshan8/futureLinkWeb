import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import * as z from "zod";

// Zod Schema
const enrollmentSchema = z
  .object({
    name: z.string().trim().min(1, "Full Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .regex(/^(09|\+?959)\d{7,9}$/, "Invalid Myanmar phone number")
      .optional()
      .or(z.literal("")),
    course: z.string().min(1, "Please select a course"),
    message: z.string().optional(),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either Email or Phone is required",
    path: ["email"], // Attach error to email field
  });

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

const Enroll = () => {
  const courses = [
    "Full Stack Web Development",
    "UI/UX Class",
    "Programming Basic Class",
    "English Essential Class",
    "Chinese Class",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data); // Log data for debugging
    setSubmitStatus("success");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-white py-14 dark:bg-slate-950">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-indigo-50/60 px-6 py-8 shadow-sm sm:px-8 sm:py-10 dark:border-slate-800 dark:bg-slate-900/70">
          <Link
            to="/"
            className="typo-link-accent mb-5 inline-flex items-center gap-1 text-sm"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="typo-page-title font-montserrat">Enroll Now</h1>
            <p className="typo-section-body mt-4">
              Join Future Link and start your journey.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="typo-success-title text-emerald-600 dark:text-emerald-400">
                Success!
              </h3>
              <p className="typo-section-body mt-2">
                Your enrollment has been received.
              </p>
              <p className="typo-form-subtitle mt-2">
                We will contact you shortly.
              </p>
              <Link
                to="/"
                className="typo-cta mt-6 inline-block rounded-xl bg-indigo-500 px-6 py-3 text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
              noValidate
            >
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="typo-form-label"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className={`typo-form-input h-12 w-full rounded-xl border bg-white px-4 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="Mg Mg"
              />
              {errors.name && (
                <p className="typo-form-error">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="typo-form-label"
              >
                Email Address{" "}
                {errors.email && <span className="text-red-500">*</span>}
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`typo-form-input h-12 w-full rounded-xl border bg-white px-4 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="john@example.com"
              />
              {errors.email?.message !== "Required" && errors.email && (
                <p className="typo-form-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="typo-form-label"
              >
                Phone Number (Myanmar)
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className={`typo-form-input h-12 w-full rounded-xl border bg-white px-4 transition outline-none placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                    : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                }`}
                placeholder="09xxxxxxxxx"
              />
              {errors.phone && (
                <p className="typo-form-error">
                  {errors.phone.message}
                </p>
              )}
              {errors.email?.message === "Either Email or Phone is required" &&
                !errors.phone && (
                  <p className="typo-form-error">
                    Either Email or Phone is required
                  </p>
                )}
            </div>

            {/* Course Selection */}
            <div className="space-y-2">
              <label
                htmlFor="course"
                className="typo-form-label"
              >
                Select Course <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("course")}
                  id="course"
                  className={`typo-form-input h-12 w-full appearance-none rounded-xl border bg-white px-4 pr-10 transition outline-none focus:ring-2 dark:bg-slate-900 ${
                    errors.course
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200 dark:border-red-500 dark:focus:ring-red-900"
                      : "border-slate-200 focus:border-indigo-600 focus:ring-indigo-200 dark:border-slate-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                  }`}
                >
                  <option value="" disabled>
                    Select a course...
                  </option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              {errors.course && (
                <p className="typo-form-error">
                  {errors.course.message}
                </p>
              )}
            </div>

            {/* Message (Optional) */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="typo-form-label"
              >
                Additional Message (Optional)
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={5}
                className="typo-form-input w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 transition outline-none placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-indigo-400 dark:focus:ring-indigo-900"
                placeholder="Any specific questions?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`typo-cta mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-400 ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-3 -ml-1 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Submit Enrollment"
              )}
            </button>
          </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Enroll;
