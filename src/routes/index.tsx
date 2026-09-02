import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  BarChart3,
  Database,
  LineChart,
  Brain,
  GraduationCap,
  Award,
  Briefcase,
  ArrowUpRight,
  Workflow,
  Search,
  Sparkles,
  Target,
  FileText,
  Download,
} from "lucide-react";
import portraitAsset from "@/assets/adham-portrait.jpg.asset.json";
import salesDashboardAsset from "@/assets/sales-dashboard.png.asset.json";
import hotelDashboardAsset from "@/assets/hotel-dashboard.png.asset.json";
import universityAsset from "@/assets/alexandria-university.jpg.asset.json";
import cvAsset from "@/assets/adham-hany-cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adham Hany Mahmoud | Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Data Analyst in Alexandria, Egypt turning raw data into dashboards and insights with Power BI, SQL, Python and Advanced Excel.",
      },
      { property: "og:title", content: "Adham Hany Mahmoud | Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Adham Hany Mahmoud — data cleaning, EDA, KPI reporting and interactive Power BI dashboards.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "adhamhany7771@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/adham-hany-mahmoud/";
const GITHUB = "https://github.com/adhamhany794-maker";
const PHONE = "+20 1204068168";

const CV_URL = cvAsset.url;

const navItems = [
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Technical Skills",
    icon: Database,
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "Advanced Excel",
      "Power BI",
      "Power Query",
      "DAX",
    ],
  },
  {
    title: "Data Analysis Core",
    icon: LineChart,
    items: [
      "Data Analysis",
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Data Extraction",
      "Data Modeling",
    ],
  },
  {
    title: "Business & Soft Skills",
    icon: Brain,
    items: [
      "Business Analysis",
      "Business Insights",
      "KPI Reporting",
      "Data-driven Decision Making",
      "Analytical Thinking",
      "Problem Solving",
      "Effective Communication",
    ],
  },
];

const projects = [
  {
    title: "Hotel Booking & Cancellation Analysis",
    metric: "119K+",
    metricLabel: "booking records analyzed",
    description:
      "Analyzed 119K+ hotel booking records trends and cancellation patterns using Python and Advanced Excel. Identified key factors contributing to booking cancellations, highlighted seasonal demand spikes, and created visual dashboards to summarize overall performance and lower cancellation risks.",
    tags: ["Python", "Advanced Excel", "EDA", "Dashboards"],
    link: GITHUB,
    bars: [45, 70, 38, 88, 60, 96, 52],
    image: hotelDashboardAsset.url,
    imageAlt:
      "Hotel Booking Performance and Cancellation Analysis dashboard showing cancellation rate, booking value and monthly trend charts",
  },
  {
    title: "Sales Performance Analysis",
    metric: "9,000+",
    metricLabel: "sales orders evaluated",
    description:
      "Evaluated 9,000+ sales order records to track revenue growth and segment customer purchasing behaviors. Cleaned raw datasets, performed exploratory data analysis (EDA) using Python and Excel, and uncovered key customer retention insights to support target marketing strategies.",
    tags: ["Python", "Excel", "Segmentation", "Retention"],
    link: GITHUB,
    bars: [30, 52, 64, 48, 82, 71, 94],
    image: salesDashboardAsset.url,
    imageAlt:
      "Superstore Sales Performance dashboard with sales, profit, RFM score and regional performance charts",
  },
];

const stats = [
  { value: "128K+", label: "Records analyzed" },
  { value: "10+", label: "Tools & technologies" },
  { value: "3.7/4.0", label: "Academic GPA" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-primary/70" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-display text-sm font-bold tracking-tight">
            Adham<span className="text-primary">.</span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 grid-motif opacity-40" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <MapPin className="size-3.5" /> Alexandria, Egypt
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
                Adham Hany Mahmoud
              </h1>
              <p className="mt-3 font-display text-xl font-semibold text-primary sm:text-2xl">
                Data Analyst
              </p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Unlocking business growth by uncovering critical trends and mitigating losses to
                drive efficiency and profitability, operating as a Data Science and Data Analysis
                practitioner with a solid academic foundation and hands-on experience using Power
                BI, Advanced Excel, Python, and SQL. Equipped with strong analytical,
                critical-thinking, and effective communication skills to transform raw data into
                cleaned datasets, interactive dashboards, and insightful reports driven by key KPIs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="size-4" /> Email
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Github className="size-4" /> GitHub
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Phone className="size-4" /> {PHONE}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-card/80"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Adham Hany Mahmoud, Data Analyst based in Alexandria, Egypt"
                  width={960}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <BarChart3 className="size-4 text-primary" /> Analyst snapshot
                </div>
              </div>

              <div
                className="rounded-2xl border border-border bg-card/80 p-6"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div className="flex h-24 items-end gap-2.5">
                  {[38, 55, 42, 72, 60, 85, 68, 96].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-primary/70"
                      style={{ height: `${h}%`, opacity: 0.35 + i * 0.08 }}
                    />
                  ))}
                </div>
                <div className="mt-6 grid gap-4 border-t border-border pt-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between">
                      <span className="font-display text-2xl font-bold text-primary">
                        {s.value}
                      </span>
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
            <SectionHeading eyebrow="01 — Workflow" title="From raw data to actionable insights" />
            <div className="relative">
              <div className="absolute inset-x-8 top-12 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 md:block" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: "01",
                    icon: Target,
                    title: "Define the Problem",
                    text: "Start by understanding business goals, KPIs, and the questions the data needs to answer.",
                  },
                  {
                    step: "02",
                    icon: Search,
                    title: "Collect & Explore",
                    text: "Gather data from multiple sources and run exploratory data analysis (EDA) to spot patterns.",
                  },
                  {
                    step: "03",
                    icon: Database,
                    title: "Clean & Transform",
                    text: "Handle missing values, fix inconsistencies, and shape data into reliable analysis-ready datasets.",
                  },
                  {
                    step: "04",
                    icon: Sparkles,
                    title: "Analyze & Visualize",
                    text: "Apply statistical analysis and build interactive dashboards that turn numbers into clear stories.",
                  },
                ].map((w, i) => (
                  <div
                    key={w.step}
                    className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-primary/10 px-2 py-1 font-mono text-xs font-bold text-primary">
                        {w.step}
                      </span>
                      {i < 3 && (
                        <ArrowUpRight className="hidden size-4 text-primary/50 md:block" />
                      )}
                    </div>
                    <w.icon className="mt-5 size-6 text-primary" />
                    <h3 className="mt-4 font-display text-base font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
            <SectionHeading eyebrow="02 — Skills" title="Toolbox & capabilities" />
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-primary/10 p-2">
                      <group.icon className="size-5 text-primary" />
                    </span>
                    <h3 className="font-display text-base font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHeading eyebrow="03 — Projects" title="Selected analytics work" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60"
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block overflow-hidden border-b border-border"
                  aria-label={`${p.title} — view on GitHub`}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
                  <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1 rounded-md border border-primary/40 bg-background/80 px-2.5 py-1 text-xs font-semibold text-primary opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    View dashboard <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-primary">
                      {p.metric}
                    </span>
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {p.metricLabel}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    View on GitHub <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>

            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
            <SectionHeading eyebrow="04 — Experience" title="Experience & training" />
            <div className="rounded-xl border border-border bg-card p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="rounded-md bg-primary/10 p-2">
                    <Briefcase className="size-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">Data Analyst Trainee</h3>
                    <p className="text-sm text-muted-foreground">
                      Digital Egypt Pioneers Initiative (DEPI)
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  July 2026 – Present
                </span>
              </div>
              <ul className="mt-6 space-y-3 border-l border-border pl-5 text-sm text-muted-foreground">
                {[
                  "Analyzed datasets using Advanced Excel, SQL, Python, and Power BI.",
                  "Cleaned and transformed data to prepare it for analysis and visualization.",
                  "Built interactive Power BI dashboards to communicate insights and trends.",
                ].map((b) => (
                  <li key={b} className="relative">
                    <span className="absolute -left-[23px] top-2 size-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <FileText className="size-4" /> View full experience in my CV
              </a>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHeading eyebrow="05 — Education" title="Education & certificates" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative overflow-hidden border-b border-border">
                <img
                  src={universityAsset.url}
                  alt="Faculty of Computing and Data Science building at Alexandria University"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-7">
                <GraduationCap className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  Bachelor of Computing and Data Science
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Alexandria University</p>
                <p className="mt-4 inline-block rounded-md bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  Last GPA: 3.7 / 4.0
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-7">
              <Award className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">IBM Data Fundamentals</h3>
              <p className="mt-1 text-sm text-muted-foreground">IBM · Aug 2026</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Covered Data Concepts, Data Science, Data Tools, Cleaning, Visualization, and IBM
                Watson Studio.
              </p>
            </div>
          </div>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <FileText className="size-4" /> See full education & certificates in my CV
          </a>
        </section>

        {/* Resume */}
        <section id="resume" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
            <SectionHeading eyebrow="06 — Resume" title="Download my CV" />
            <div className="grid items-center gap-8 rounded-xl border border-border bg-card p-7 md:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4">
                <span className="rounded-md bg-primary/10 p-3">
                  <FileText className="size-6 text-primary" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Adham Hany Mahmoud — Data Analyst CV
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    A one-page PDF covering my technical toolbox, analytics projects, DEPI training
                    experience, education and certificates — ready to share with recruiters.
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    PDF · Updated 2026
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CV_URL}
                  download="Adham-Hany-Mahmoud-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" /> Download CV
                </a>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <ArrowUpRight className="size-4" /> View in browser
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Contact */}
        <section
          id="contact"
          className="relative scroll-mt-20 overflow-hidden border-t border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 grid-motif opacity-30" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let's connect and turn your data into actionable insights!
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="size-4" /> {EMAIL}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Phone className="size-4" /> {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Adham Hany Mahmoud · Data Analyst</p>
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5" /> Alexandria, Egypt · {PHONE}
          </p>
        </div>
      </footer>
    </div>
  );
}
