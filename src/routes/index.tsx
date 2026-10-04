import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  GraduationCap,
  Laptop,
  LineChart,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const APTITUDE_URL = "https://aptitude-platform-eight.vercel.app/";
const CODING_URL = "https://code7-platform.vercel.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mock Placement Portal | Practice for Campus Recruitment" },
      {
        name: "description",
        content:
          "Prepare for campus recruitment with focused aptitude and coding mock assessments.",
      },
      { property: "og:title", content: "Mock Placement Portal" },
      {
        property: "og:description",
        content: "Practice aptitude and coding skills for campus placements.",
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
        <span className="card-number">0{kind === "aptitude" ? "1" : "2"}</span>
      </div>
      <div className="mt-7">
        <p className="card-label">{kind === "aptitude" ? "Core skills" : "Technical skills"}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-[1.75rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
          {description}
        </p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} topics`}>
        {topics.map((topic) => (
          <li className="topic-pill" key={topic}>
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
            {topic}
          </li>
        ))}
      </ul>
      <a className="assessment-link" href={href}>
        <span>Start {title}</span>
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
      </a>
    </article>
  );
}

const highlights = [
  {
    icon: Target,
    title: "Practice Tests",
    text: "Improve your placement preparation.",
  },
  {
    icon: Clock3,
    title: "Instant Results",
    text: "Get your performance quickly.",
  },
  {
    icon: Trophy,
    title: "Placement Ready",
    text: "Build confidence for recruitment drives.",
  },
];

function PlacementPortal() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="page-shell flex h-[72px] items-center justify-between gap-6">
          <a className="brand-lockup" href="#top" aria-label="Mock Placement Portal home">
            <span className="brand-mark" aria-hidden="true">
              <GraduationCap size={23} strokeWidth={1.8} />
            </span>
            <span>
              <span className="block font-display text-sm font-semibold leading-none sm:text-base">
                Mock Placement Portal
              </span>
              <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
                Practice. Assess. Get Placement Ready.
              </span>
            </span>
          </a>
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            <a className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block" href="#assessments">
              Assessments
            </a>
            <a className="header-action" href="#assessments">
              Get started
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="technical-grid" aria-hidden="true" />
        <div className="page-shell relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="hero-copy">
            <div className="eyebrow-badge">
              <span className="status-dot" />
              Mock Placement 2026–27
            </div>
            <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-normal text-hero-foreground sm:text-6xl lg:text-[4.6rem]">
              Prepare for your <span className="text-hero-accent">placement.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg sm:leading-8">
              Practice aptitude and coding skills through our mock placement assessments and get ready for your campus recruitment.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a className="hero-action" href="#assessments">
                Choose an assessment
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <span className="flex items-center gap-2 text-sm text-hero-muted">
                <Check className="text-hero-accent" size={17} aria-hidden="true" />
                Two focused test tracks
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Assessment preparation overview">
            <div className="visual-topbar">
              <div className="flex items-center gap-2">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-hero-muted">Candidate workspace</span>
            </div>
            <div className="visual-body">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-hero-muted">Preparation overview</p>
                  <p className="mt-1 font-display text-lg font-semibold text-hero-foreground">Build job-ready skills</p>
                </div>
                <Sparkles className="text-hero-accent" size={23} aria-hidden="true" />
              </div>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="visual-stat">
                  <BrainCircuit size={20} aria-hidden="true" />
                  <span>Aptitude</span>
                  <small>Reason with confidence</small>
                </div>
                <div className="visual-stat">
                  <Code2 size={20} aria-hidden="true" />
                  <span>Coding</span>
                  <small>Solve with clarity</small>
                </div>
              </div>
              <div className="visual-progress">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-hero-muted">Your pathway</p>
                    <p className="mt-1 text-sm font-semibold text-hero-foreground">Practice → Assess → Improve</p>
                  </div>
                  <LineChart className="text-hero-accent" size={25} aria-hidden="true" />
                </div>
                <div className="progress-track"><span /></div>
              </div>
            </div>
            <div className="floating-chip floating-chip-left"><BarChart3 size={15} /> Performance insights</div>
            <div className="floating-chip floating-chip-right"><Laptop size={15} /> Campus ready</div>
          </div>
        </div>
        <a className="scroll-cue" href="#assessments" aria-label="Scroll to assessments">
          <ChevronDown size={20} />
        </a>
      </section>

      <section id="assessments" className="assessment-section scroll-mt-16">
        <div className="page-shell py-20 sm:py-24">
          <div className="section-heading">
            <p className="section-kicker">Assessment pathways</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">Choose your assessment</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Select a track and begin a focused mock assessment designed around campus recruitment skills.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <AssessmentCard
              kind="aptitude"
              icon={BrainCircuit}
              title="Aptitude Test"
              description="Test your skills in quantitative aptitude, logical reasoning, verbal ability and other placement-oriented topics."
              topics={["Quantitative", "Logical reasoning", "Verbal ability"]}
              href={APTITUDE_URL}
            />
            <AssessmentCard
              kind="coding"
              icon={Code2}
              title="Coding Test"
              description="Solve programming problems and test your problem-solving, algorithms and coding skills."
              topics={["Problem solving", "Algorithms", "Programming"]}
              href={CODING_URL}
            />
          </div>

          <div className="highlights-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div className="highlight-item" key={title}>
                <span className="highlight-icon"><Icon size={20} strokeWidth={1.9} /></span>
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
        <div className="page-shell flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2.5 font-display text-sm font-semibold text-footer-foreground">
            <GraduationCap size={19} aria-hidden="true" />
            Mock Placement Portal
          </div>
          <p className="text-xs text-footer-muted">Designed for placement preparation and mock recruitment practice.</p>
        </div>
      </footer>
    </main>
  );
}