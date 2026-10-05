import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, Check, Clock3, Code2, Target, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const APTITUDE_URL = "https://aptitude-platform-eight.vercel.app/";
const CODING_URL = "https://code7-coding-platform-gamma.vercel.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVIT Placement Portal | Training & Placement Cell" },
      {
        name: "description",
        content: "Access SVIT coding and assessment platforms to prepare for campus recruitment.",
      },
      { property: "og:title", content: "SVIT Digital Assessment Portal" },
      {
        property: "og:description",
        content: "Access coding and assessment platforms for campus placements.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlacementPortal,
});

type AssessmentCardProps = {
  kind: "aptitude" | "coding";
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
  href: string;
};

function AssessmentCard({
  kind,
  icon: Icon,
  title,
  description,
  topics,
  href,
}: AssessmentCardProps) {
  return (
    <article className="assessment-card group" data-kind={kind}>
      <div className="flex items-start justify-between gap-4">
        <div className="assessment-icon" aria-hidden="true">
          <Icon size={29} strokeWidth={1.8} />
        </div>
        <span className="card-number">0{kind === "coding" ? "1" : "2"}</span>
      </div>
      <div className="mt-7">
        <p className="card-label">
          {kind === "coding" ? "Coding platform" : "Assessment platform"}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
          {description}
        </p>
      </div>
      <ul className="mt-6 mb-6 flex flex-wrap gap-3" aria-label={`${title} topics`}>
        {topics.map((topic) => (
          <li className="topic-pill" key={topic}>
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
            {topic}
          </li>
        ))}
      </ul>
      <a className="assessment-link" href={href} target="_blank" rel="noreferrer">
        <span>Launch {title}</span>
        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          size={18}
        />
      </a>
    </article>
  );
}

const highlights = [
  {
    icon: Target,
    title: "One central portal",
    text: "Access student learning and assessment platforms from one place.",
  },
  {
    icon: Clock3,
    title: "Placement focused",
    text: "Prepare at your own pace for upcoming placement assessments.",
  },
  {
    icon: Trophy,
    title: "Built for SVIT students",
    text: "A dedicated resource for campus placement preparation.",
  },
];

function PlacementPortal() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="page-shell site-header-inner">
          <img className="institute-logo" src="/svit-logo.png" alt="SVIT logo" />
          <div className="institution-heading">
            <p>Sardar Vallabhbhai Patel Institute of Technology, Vasad</p>
            <h1>Digital Assessment Portal</h1>
            <span>Information Technology Department · Training &amp; Placement Cell</span>
          </div>
          <div className="header-right">
            <img
              className="placement-logo"
              src="/training-placement-logo.png"
              alt="Training and Placement Cell logo"
            />
          </div>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="page-shell hero-content">
          <div className="hero-copy">
            <div className="eyebrow-badge">
              <span className="status-dot" />
              SVIT · STUDENT PLATFORM
            </div>
            <h2 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-normal text-hero-foreground sm:text-6xl lg:text-[4.6rem]">
              <span className="hero-heading-first-line">
                <span>Code.</span> Practice.
              </span>
              <br />
              <span className="hero-second-line text-hero-accent">Get Placement Ready.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-hero-muted sm:text-lg sm:leading-8">
              A central place to access coding and assessment platforms and build the skills you
              need for campus placements.
            </p>
          </div>
        </div>
      </section>

      <section id="assessments" className="assessment-section scroll-mt-16">
        <div className="page-shell py-16 sm:py-20">
          <div className="section-heading">
            <p className="section-kicker">Your preparation starts here</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
              Choose a platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Build confidence at your own pace with focused preparation for campus recruitment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <AssessmentCard
              kind="coding"
              icon={Code2}
              title="Coding Test"
              description="Strengthen your programming skills through coding problems, practice tests and placement-oriented challenges."
              topics={["Programming", "Problem solving", "Algorithms"]}
              href={CODING_URL}
            />
            <AssessmentCard
              kind="aptitude"
              icon={BrainCircuit}
              title="Aptitude Test"
              description="Prepare for placement assessments with quantitative aptitude, logical reasoning and verbal ability."
              topics={["Quantitative", "Logical reasoning", "Verbal ability"]}
              href={APTITUDE_URL}
            />
          </div>

          <div className="highlights-grid">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div className="highlight-item" key={title}>
                <div className="highlight-mark">
                  <span className="highlight-number">0{index + 1}</span>
                  <span className="highlight-icon">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-brand">
            <img src="/svit-logo.png" alt="" />
            <div>
              <strong>Sardar Vallabhbhai Patel Institute of Technology, Vasad</strong>
              <span>Training &amp; Placement Cell · Vasad</span>
            </div>
          </div>
          <p className="text-xs text-footer-muted">Information Technology Department</p>
        </div>
      </footer>
    </main>
  );
}
