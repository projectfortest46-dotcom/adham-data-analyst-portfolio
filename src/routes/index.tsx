import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Linkedin,
  Github,
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
} from "lucide-react";
import portraitAsset from "@/assets/adham-portrait.jpg.asset.json";
import salesDashboardAsset from "@/assets/sales-dashboard.png.asset.json";
import hotelDashboardAsset from "@/assets/hotel-dashboard.png.asset.json";
import universityAsset from "@/assets/alexandria-university.jpg.asset.json";
import ibmCertificateAsset from "@/assets/ibm-data-fundamentals-certificate.png.asset.json";
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
const LINKEDIN = "https://linkedin.com/in/adham-hany-mahmoud/";
const GITHUB = "https://github.com/adhamhany794-maker";
const HOTEL_REPO =
  "https://github.com/adhamhany794-maker/Hotel-Booking-Performance-Cancellation-Analysis";
const SALES_REPO = "https://github.com/adhamhany794-maker/superstore-sales-profit-analysis";
const CV_URL = cvAsset.url;

const PHONE = "+20 1204068168";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace(/[\s+]/g, "")}?text=Hi%20Adham`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
    </svg>
  );
}

const IBM_CERT_URL =
  "https://www.credly.com/badges/8e9fcbe6-c3f9-47c9-839d-6ffc838a3034/public_url";

const navItems = [
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: CV_URL, external: true, download: "adham-hany-cv.pdf" },
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
      "Dug into booking and cancellation trends with Python and Advanced Excel, pinpointed the main drivers of cancellations and seasonal demand spikes, then summarized it all in clear dashboards built to lower cancellation risk.",
    tags: ["Python", "Advanced Excel", "EDA", "Dashboards"],
    link: HOTEL_REPO,
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
      "Tracked revenue growth and customer buying behavior, cleaned the raw data with Python and Excel, and surfaced retention insights that support more targeted marketing.",
    tags: ["Python", "Advanced Excel", "EDA", "Dashboards"],
    link: SALES_REPO,
    bars: [30, 52, 64, 48, 82, 71, 94],
    image: salesDashboardAsset.url,
    imageAlt:
      "Superstore Sales Performance dashboard with sales, profit, RFM score and regional performance charts",
  },
];

const stats = [
  { value: "2+", label: "Analytics projects delivered", icon: Briefcase },
  { value: "10+", label: "Tools & technologies in daily use", icon: BarChart3 },
  { value: "3.7 / 4.0", label: "Academic GPA, Alexandria University", icon: GraduationCap },
];


function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
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
          <a href="#top" className="flex items-center gap-2" aria-label="Back to top">
            <div className="flex size-9 items-center justify-center rounded-xl border border-border bg-card p-1.5 shadow-sm">
              <img
                src="/logo.svg"
                alt="Adham Hany Mahmoud monogram logo"
                width={28}
                height={28}
                className="h-full w-full object-contain"
              />
            </div>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  download={item.download}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={CV_URL}
              download="adham-hany-cv.pdf"
              className="hidden rounded-md border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:inline-block"
            >
              Resume
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Hire me
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-border"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 grid-motif opacity-40" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">

            <div>
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <div className="flex size-20 items-center justify-center rounded-2xl border border-border bg-card p-3 shadow-sm sm:size-24">
                  <img
                    src="/logo.svg"
                    alt="Adham Hany Mahmoud monogram logo"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <MapPin className="size-3.5" /> Alexandria, Egypt
                </span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Adham Hany
                </span>
              </h1>
              <p className="mt-4 font-display text-lg font-semibold uppercase tracking-[0.22em] text-primary sm:text-xl">
                Data Analyst
              </p>
              <div className="mt-7 max-w-2xl space-y-4 border-l-2 border-primary/40 pl-5">
                <p className="text-base leading-8 text-foreground/90 sm:text-[1.0625rem]">
                  I help businesses grow by uncovering critical trends and mitigating losses to
                  drive efficiency and profitability.
                </p>
                <p className="text-[0.95rem] leading-8 text-muted-foreground sm:text-base">
                  A Data Science and Data Analysis practitioner with a solid academic foundation and
                  hands-on experience using{" "}
                  <span className="font-semibold text-foreground">Power BI</span>,{" "}
                  <span className="font-semibold text-foreground">Advanced Excel</span>,{" "}
                  <span className="font-semibold text-foreground">Python</span>, and{" "}
                  <span className="font-semibold text-foreground">SQL</span>.
                </p>
                <p className="text-[0.95rem] leading-8 text-muted-foreground sm:text-base">
                  Strong analytical, critical-thinking, and communication skills to transform raw
                  data into cleaned datasets, interactive dashboards, and insightful reports driven
                  by key KPIs.
                </p>
              </div>



              {/* Services */}
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Services
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: Database,
                      title: "Data Cleaning & Modeling",
                      text: "Structure and clean raw data so it is ready for reliable analysis.",
                    },
                    {
                      icon: BarChart3,
                      title: "Interactive Dashboards",
                      text: "Build clear Power BI dashboards that make metrics easy to explore.",
                    },
                    {
                      icon: LineChart,
                      title: "KPI & Insight Reporting",
                      text: "Track the numbers that matter and turn them into actionable insights.",
                    },
                  ].map((s) => (
                    <div
                      key={s.title}
                      className="rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/50"
                    >
                      <s.icon className="size-5 text-primary" />
                      <h4 className="mt-3 text-sm font-semibold text-foreground">{s.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#projects"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View projects <ArrowUpRight className="size-4" />
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
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Quick highlights
                </p>
                <div className="mt-5 grid gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3.5"
                    >
                      <s.icon className="size-4 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="font-display text-xl font-bold leading-none text-foreground">
                          {s.value}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">

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
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-border bg-card/30">
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">

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
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">

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
                  <p className="mt-3 flex-1 text-[0.95rem] leading-8 text-muted-foreground">
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
          <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">

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
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">

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
            <div className="group overflow-hidden rounded-xl border border-border bg-card">
              <a
                href={IBM_CERT_URL}
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden border-b border-border"
              >
                <img
                  src={ibmCertificateAsset.url}
                  alt="IBM Data Fundamentals certificate awarded to Adham Hany"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </a>
              <div className="p-7">
                <Award className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">IBM Data Fundamentals</h3>
                <p className="mt-1 text-sm text-muted-foreground">IBM · Aug 2026</p>
                <p className="mt-4 text-[0.95rem] leading-8 text-muted-foreground">
                  Covered Data Concepts, Data Science, Data Tools, Cleaning, Visualization, and IBM
                  Watson Studio.
                </p>
                <a
                  href={IBM_CERT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Verify on Credly <ArrowUpRight className="size-4" />
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
          <div className="relative mx-auto max-w-4xl px-5 py-20 text-center">

            <div className="mx-auto mb-8 flex size-32 items-center justify-center rounded-2xl border border-border bg-card p-3 shadow-sm sm:size-44">
              <img
                src="/logo.svg"
                alt="Adham Hany Mahmoud monogram logo"
                width={176}
                height={176}
                className="h-full w-full object-contain"
              />
            </div>
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                title="Open WhatsApp chat (@Adham_Hany0_0)"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                <WhatsAppIcon className="size-4" /> {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-background p-1.5 sm:size-14">
              <img
                src="/logo.svg"
                alt="Adham Hany Mahmoud monogram logo"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-[11px] sm:text-xs">© {new Date().getFullYear()} Adham Hany · Data Analyst</p>
          </div>
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5" /> Alexandria, Egypt · {PHONE}
          </p>
        </div>
      </footer>
    </div>
  );
}
