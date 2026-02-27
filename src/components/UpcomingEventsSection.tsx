import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import {
  appliedAiBootcampEvent,
  careerAdviceEvent,
  designSprintWeekEvent,
  frontendLabEvent,
  studentDemoDayEvent,
} from "@/images";
import { cn } from "@/lib/utils";

type UpcomingEvent = {
  id: string;
  label: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const upcomingEvents: UpcomingEvent[] = [
  {
    id: "design-sprint",
    label: "Design Sprint",
    title: "Product Design Sprint Week",
    date: "March 14, 2026 · 10:00 AM",
    location: "FutureLink Studio, Yangon",
    description:
      "A five-day studio sprint focused on rapid product design, user testing, and portfolio-ready prototypes.",
    image: designSprintWeekEvent,
  },
  {
    id: "ai-bootcamp",
    label: "AI Bootcamp",
    title: "Applied AI Bootcamp Open Session",
    date: "March 28, 2026 · 1:30 PM",
    location: "FutureLink Studio, Yangon",
    description:
      "Join mentors for a practical session on AI workflows, prompt strategy, and project execution with real case studies.",
    image: appliedAiBootcampEvent,
  },
  {
    id: "frontend-lab",
    label: "Frontend Lab",
    title: "Frontend Systems Architecture Lab",
    date: "April 9, 2026 · 9:00 AM",
    location: "FutureLink Studio, Yangon",
    description:
      "Hands-on deep dive into scalable component systems, design tokens, and modern responsive patterns.",
    image: frontendLabEvent,
  },
  {
    id: "career-night",
    label: "Career Night",
    title: "Career Navigation & Mock Interview Night",
    date: "April 20, 2026 · 6:00 PM",
    location: "Zoom Webinar",
    description:
      "Practice live interview scenarios and receive direct feedback from hiring mentors across product and engineering roles.",
    image: careerAdviceEvent,
  },
  {
    id: "demo-day",
    label: "Demo Day",
    title: "FutureLink Student Demo Day",
    date: "May 3, 2026 · 4:00 PM",
    location: "FutureLink Studio, Yangon",
    description:
      "See student teams present product outcomes, technical demos, and launch plans to mentors and invited guests.",
    image: studentDemoDayEvent,
  },
];

const UpcomingEventsSection = () => {
  const [selectedEventId, setSelectedEventId] = useState(upcomingEvents[0].id);
  const [selectorState, setSelectorState] = useState<string>("");

  const selectedEvent =
    upcomingEvents.find((event) => event.id === selectedEventId) ??
    upcomingEvents[0];

  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="typo-section-title">Upcoming Events</h2>

          <div className="w-full md:max-w-sm">
            <Accordion
              type="single"
              collapsible
              value={selectorState}
              onValueChange={setSelectorState}
              className="relative z-10 w-full"
            >
              <AccordionItem
                value="event-picker"
                className="rounded-lg border border-slate-200 px-4 dark:border-slate-800"
              >
                <AccordionTrigger className="py-3 no-underline hover:no-underline">
                  <div className="space-y-1 text-left">
                    <p className="typo-form-label">Select Event</p>
                    <p className="typo-section-body-sm text-slate-900 dark:text-slate-100">
                      {selectedEvent.label}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="absolute top-full left-0 w-full rounded-b-lg border border-t-0 border-slate-200 bg-white pb-3 dark:border-slate-800 dark:bg-slate-900">
                  <div className="space-y-2">
                    {upcomingEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => {
                          setSelectedEventId(event.id);
                          setSelectorState("");
                        }}
                        className={cn(
                          "w-full rounded-md border px-3 py-2 text-left transition",
                          selectedEventId === event.id
                            ? "border-indigo-400 bg-indigo-50 text-slate-900 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-slate-100"
                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:bg-indigo-500/15",
                        )}
                      >
                        <p className="typo-cta">{event.label}</p>
                        <p className="typo-form-subtitle mt-1">{event.date}</p>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Card className="w-full max-w-4xl overflow-hidden border border-slate-200 bg-white p-0 shadow-xl dark:border-slate-800 dark:bg-slate-900/70">
            <div className="aspect-[16/9] w-full">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 px-6 py-6 sm:px-8">
              <p className="typo-eyebrow-tight">{selectedEvent.label}</p>
              <h3 className="typo-page-title">{selectedEvent.title}</h3>
              <p className="typo-section-body-sm">
                {selectedEvent.date} · {selectedEvent.location}
              </p>
              <p className="typo-section-body">{selectedEvent.description}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
