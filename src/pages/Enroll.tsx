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
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 dark:bg-slate-950">
      <div className="max-h-full w-full max-w-md overflow-y-auto rounded-xl border border-gray-100 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <Link
          to="/"
          className="mb-4 inline-flex items-center text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-500"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Back to Home
        </Link>

        <div className="mb-4 text-center">
          <h2 className="typo-form-title mb-0.5">
            Enroll Now
          </h2>
          <p className="typo-form-subtitle">
            Join Future Link and start your journey.
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-green-100 text-green-600">
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
            <h3 className="typo-success-title mb-2 text-green-600">Success!</h3>
            <p className="typo-section-body-sm">
              Your enrollment has been received.
            </p>
            <p className="typo-form-subtitle mt-2">
              We will contact you shortly.
            </p>
            <Link
              to="/"
              className="typo-cta mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700"
            >
              Return Home
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="typo-form-label mb-1 block"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className={`typo-form-input w-full rounded-md border px-3 py-2 ${errors.name ? "border-red-500 dark:bg-red-900/10" : "border-gray-300 bg-gray-50 dark:border-slate-700 dark:bg-slate-800"} transition-all outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                placeholder="Mg Mg"
              />
              {errors.name && (
                <p className="typo-form-error mt-0.5">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="typo-form-label mb-1 block"
              >
                Email Address{" "}
                {errors.email && <span className="text-red-500">*</span>}
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className={`typo-form-input w-full rounded-md border px-3 py-2 ${errors.email ? "border-red-500 dark:bg-red-900/10" : "border-gray-300 bg-gray-50 dark:border-slate-700 dark:bg-slate-800"} transition-all outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                placeholder="john@example.com"
              />
              {errors.email?.message !== "Required" && errors.email && (
                <p className="typo-form-error mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="typo-form-label mb-1 block"
              >
                Phone Number (Myanmar)
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className={`typo-form-input w-full rounded-md border px-3 py-2 ${errors.phone ? "border-red-500 dark:bg-red-900/10" : "border-gray-300 bg-gray-50 dark:border-slate-700 dark:bg-slate-800"} transition-all outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
                placeholder="09xxxxxxxxx"
              />
              {errors.phone && (
                <p className="typo-form-error mt-0.5">
                  {errors.phone.message}
                </p>
              )}
              {errors.email?.message === "Either Email or Phone is required" &&
                !errors.phone && (
                  <p className="typo-form-error mt-0.5">
                    Either Email or Phone is required
                  </p>
                )}
            </div>

            {/* Course Selection */}
            <div>
              <label
                htmlFor="course"
                className="typo-form-label mb-1 block"
              >
                Select Course <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("course")}
                  id="course"
                  className={`typo-form-input w-full appearance-none rounded-md border px-3 py-2 ${errors.course ? "border-red-500 dark:bg-red-900/10" : "border-gray-300 bg-gray-50 dark:border-slate-700 dark:bg-slate-800"} transition-all outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`}
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
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
                <p className="typo-form-error mt-0.5">
                  {errors.course.message}
                </p>
              )}
            </div>

            {/* Message (Optional) */}
            <div>
              <label
                htmlFor="message"
                className="typo-form-label mb-1 block"
              >
                Additional Message (Optional)
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={2}
                className="typo-form-input w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 transition-all outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800"
                placeholder="Any specific questions?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`typo-cta mt-2 flex w-full transform items-center justify-center rounded-lg bg-indigo-900 px-4 py-3 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] hover:bg-indigo-800 active:scale-[0.98] ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
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
    </div>
  );
};

export default Enroll;
