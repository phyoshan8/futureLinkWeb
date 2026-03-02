import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle({
  isScrolled,
  isLoaded,
  animationDelay,
}: {
  isScrolled: boolean;
  isLoaded: boolean;
  animationDelay: string;
}) {
  const { setTheme } = useTheme();
  const toggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className={`hidden transition-all duration-500 ease-out min-[340px]:block ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: animationDelay }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={`rounded-full transition-all duration-500 ${
          isScrolled
            ? "text-white/90 hover:bg-white/20 hover:text-white"
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
        }`}
      >
        <Sun className="h-5 w-5 scale-0 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
        <Moon className="absolute h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
