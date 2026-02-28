import Header from "@/components/layout/Header";
import { Link, Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 transition-colors duration-300 dark:bg-slate-950">
      <header>
        <Header />
      </header>

      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="typo-brand-title text-white">FutureLink</p>
              <p className="typo-section-body-sm text-slate-300">
                Mentor-led learning studio focused on practical skills,
                portfolio outcomes, and career clarity.
              </p>
            </div>

            <div className="space-y-3">
              <p className="typo-footer-category text-indigo-200">Courses</p>
              <nav className="space-y-2">
                <Link
                  to="/courses"
                  className="typo-footer-note block hover:text-white"
                >
                  All Courses
                </Link>
                <Link
                  to="/enroll"
                  className="typo-footer-note block hover:text-white"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/about"
                  className="typo-footer-note block hover:text-white"
                >
                  Learning Approach
                </Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="typo-footer-category text-indigo-200">Support</p>
              <div className="space-y-2">
                <a
                  href="tel:+959798187378"
                  className="typo-footer-note block hover:text-white"
                >
                  09798187378
                </a>
                <a
                  href="mailto:hello@futurelink.academy"
                  className="typo-footer-note block hover:text-white"
                >
                  hello@futurelink.academy
                </a>
                <p className="typo-footer-note">
                  Corner of Myindawthar and Thumana Rd, Yangon
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="typo-footer-category text-indigo-200">
                Need Guidance?
              </p>
              <p className="typo-section-body-sm text-slate-300">
                Not sure which track fits you best? Talk to our advisors and get
                a clear learning plan.
              </p>
              <Link
                to="/contact"
                className="typo-cta inline-flex items-center rounded-xl bg-indigo-500 px-5 py-2.5 text-white transition hover:bg-indigo-400"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-5">
            <div className="flex justify-center">
              <p className="typo-footer-note">
                &copy; {new Date().getFullYear()} FutureLink. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
