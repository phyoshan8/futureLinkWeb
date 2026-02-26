import Header from "@/components/layout/Header";
import { Outlet } from "react-router";

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
      <footer className="mt-auto bg-gray-900 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="typo-brand-title text-white">&copy; 2024 FutureLink. All rights reserved.</p>
            <p className="typo-footer-note mt-2">Empowering learners worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
