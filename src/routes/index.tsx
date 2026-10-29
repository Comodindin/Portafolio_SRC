import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import c1 from "@/assets/carrusel-01.jpg.asset.json";
import c2 from "@/assets/carrusel-02.jpg.asset.json";
import c3 from "@/assets/carrusel-03.jpg.asset.json";
import c4 from "@/assets/carrusel-04.jpg.asset.json";
import c5 from "@/assets/carrusel-05.jpg.asset.json";

import a1 from "@/assets/acupunutra-01.jpg.asset.json";
import a2 from "@/assets/acupunutra-02.jpg.asset.json";
import a3 from "@/assets/acupunutra-03.jpg.asset.json";
import a4 from "@/assets/acupunutra-04.jpg.asset.json";
import a5 from "@/assets/acupunutra-05.jpg.asset.json";
import a6 from "@/assets/acupunutra-06.jpg.asset.json";
import a7 from "@/assets/acupunutra-07.jpg.asset.json";
import a8 from "@/assets/acupunutra-08.jpg.asset.json";
import b1 from "@/assets/barras-access-01.jpg.asset.json";
import d1 from "@/assets/detox-ionica-01.jpg.asset.json";
import b2 from "@/assets/barras-access-02.jpg.asset.json";
import d2 from "@/assets/detox-ionica-02.jpg.asset.json";
import b3 from "@/assets/barras-access-03.jpg.asset.json";
import d3 from "@/assets/detox-ionica-03.jpg.asset.json";
import b4 from "@/assets/barras-access-04.jpg.asset.json";
import d4 from "@/assets/detox-ionica-04.jpg.asset.json";
import b5 from "@/assets/barras-access-05.jpg.asset.json";
import d5 from "@/assets/detox-ionica-05.jpg.asset.json";
import b6 from "@/assets/barras-access-06.jpg.asset.json";
import d6 from "@/assets/detox-ionica-06.jpg.asset.json";
import b7 from "@/assets/barras-access-07.jpg.asset.json";
import d7 from "@/assets/detox-ionica-07.jpg.asset.json";
import p1 from "@/assets/post2-01.jpg.asset.json";
import p2 from "@/assets/post2-02.jpg.asset.json";
import p3 from "@/assets/post2-03.jpg.asset.json";
import p4 from "@/assets/post2-04.jpg.asset.json";
import p5 from "@/assets/post2-05.jpg.asset.json";
import p6 from "@/assets/post2-06.jpg.asset.json";
import p7 from "@/assets/post2-07.jpg.asset.json";

const carousels = [
  { title: "¿Ya nos conoces?", note: "Space introduction carousel", slides: [c1, c2, c3, c4, c5] },
  { title: "No todas las sesiones de acupuntura son iguales", note: "Service explainer carousel", slides: [a1, a2, a3, a4, a5, a6, a7, a8] },
  { title: "¿Has escuchado de las Barras de Access?", note: "Service explainer carousel", slides: [b1, b2, b3, b4, b5, b6, b7] },
  { title: "¿Conoces la detox iónica?", note: "Service explainer carousel", slides: [d1, d2, d3, d4, d5, d6, d7] },
  { title: "¿Has escuchado de la auriculoterapia?", note: "Service explainer carousel", slides: [p1, p2, p3, p4, p5, p6, p7] },
];

const BASE = "https://comodindin.github.io/Portafolio_SRC/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarai Rosas — Interaction Designer, Puebla" },
      {
        name: "description",
        content:
          "Interaction design, UI/UX and data visualization. Swift, Unreal Engine and the web.",
      },
      { property: "og:title", content: "Sarai Rosas — Interaction Designer" },
      {
        property: "og:description",
        content: "Interactive systems designed and built in Swift, Unreal Engine and the browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${BASE}/images/vitalia.jpg` },
      { name: "twitter:image", content: `${BASE}/images/vitalia.jpg` },
    ],
  }),
  component: Index,
});

type Project = {
  n: string;
  title: string;
  year?: string;
  tags: string[];
  desc: string;
  img: string;
  href?: string;
  cta?: string;
  status?: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "VITALIA",
    tags: ["iOS", "Swift", "Product Design"],
    desc: "A health & wellness app built on one deliberate decision: replace calorie-counting pressure with habit tracking and emotional journaling. Onboarding assessment, macro and hydration dashboards, sleep logging, recipes and guided breathing.",
    img: "vitalia.jpg",
    href: "https://www.behance.net/gallery/239231705/VITALIA",
    cta: "Case study",
  },
  {
    n: "02",
    title: "Echoes of the Past, Voices of the Present",
    tags: ["Unreal Engine", "Serious Games", "3D"],
    desc: "A first-person puzzle game on gender inequality in Mexico. Each room maps a sphere of life to a challenge, closing in a memorial hall of Mexican pioneers.",
    img: "unreal-experience.jpg",
    href: "https://youtu.be/jsRfcmPOvq0",
    cta: "Watch gameplay",
  },
  {
    n: "03",
    title: "Femicide Cartography",
    tags: ["UI/UX", "Frontend", "Data Viz"],
    desc: "A web interface for the Forensic Architecture Laboratory, turning forensic research on femicide in Mexico into a cartographic narrative anyone can read.",
    img: "femicide-project.jpg",
    href: "https://comodindin.github.io/Geografiaas-del-Silencio-Fem/",
    cta: "Visit site",
  },
  {
    n: "04",
    title: "The LAF Dashboard",
    tags: ["Social Urbanism", "Research", "Cartography"],
    desc: "Qualitative analysis of participatory mapping data at IBERO Puebla, translating citizen narratives into structured information layers.",
    img: "laf-dashboard.jpg",
    href: "https://comodindin.github.io/Laboratorio-de-Arquitectura-Forense/",
    cta: "Visit dashboard",
  },
  {
    n: "05",
    title: "RESOURCE",
    tags: ["Unity", "Analog Horror", "2D Art"],
    desc: "A first-person analog horror game built with 2D assets in a 3D space. Concept, art direction and in-engine implementation.",
    img: "resource.jpg",
    status: "In production",
  },
  {
    n: "06",
    title: "Problemas de Identidad",
    tags: ["2D Animation", "Short Film", "Storytelling"],
    desc: "An animated short about Ian, whose family won't accept that they want to transition — and the double life that follows.",
    img: "problemas-identidad.jpg",
    href: "https://youtu.be/hJZ-tJnwZ8I",
    cta: "Watch film",
  },
];

const skills = [
  "UI/UX Design & Testing",
  "Mobile Product Design (iOS / Swift)",
  "Data & Spatial Visualization",
  "Interactive Systems Design",
  "3D Modeling & Real-Time Environments",
  "Serious Games & Game Design",
  "AI-Assisted Design & Workflows",
];

const tools = ["Swift", "HTML", "CSS", "JavaScript", "ArcGIS", "Unity", "Unreal Engine", "Adobe CC", "Figma"];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm">
          <a href="#top" className="font-display text-2xl">Sarai Rosas</a>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#freelance" className="hover:text-foreground">Freelance</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-40">
        <p className="animate-rise text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Interaction Designer · Puebla, MX
        </p>
        <h1 className="animate-rise mt-6 font-display text-6xl leading-[0.95] md:text-8xl lg:text-[9rem]" style={{ animationDelay: "0.1s" }}>
          I design interactive <em className="text-primary">systems</em> — and build them.
        </h1>
        <div className="animate-rise mt-12 grid gap-8 md:grid-cols-2" style={{ animationDelay: "0.25s" }}>
          <p className="max-w-md text-lg text-muted-foreground">
            In Swift, Unreal Engine and the browser. Interaction design, UI/UX and data
            visualization where social research meets technology.
          </p>
          <div className="flex flex-wrap items-end gap-3 md:justify-end">
            <a href="#work" className="rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground">
              View my work ↓
            </a>
            <a href={`${BASE}/CV_Sarai_Rosas.pdf`} target="_blank" rel="noreferrer" className="rounded-full border border-foreground px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-secondary py-4 text-secondary-foreground">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl italic">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="flex items-center gap-10">{t}<span className="text-primary">✦</span></span>
          ))}
        </div>
      </div>

      <section id="work" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-5xl md:text-7xl">Selected work</h2>
          <span className="text-sm text-muted-foreground">({projects.length})</span>
        </div>
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.n} p={p} offset={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="freelance" className="border-t border-border py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <h2 className="font-display text-5xl md:text-7xl">Freelance <em className="text-primary">social</em></h2>
            <p className="max-w-sm text-muted-foreground">
              Instagram carousels for Marina Reyes · Medicina Integral, Oaxaca. Art direction, layout and copy design.
            </p>
          </div>
        </div>
        <FreelanceGallery />
      </section>

      <section id="about" className="bg-card py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12">
          <h2 className="font-display text-5xl md:col-span-4 md:text-7xl">About</h2>
          <div className="space-y-6 text-lg leading-relaxed md:col-span-8">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              An interaction designer who takes products from concept to working build — whichever
              medium the problem actually calls for.
            </p>
            <p className="text-muted-foreground">
              Much of my work turns complex data and field research into interfaces and
              cartographic narratives people can navigate. I studied Interaction Design and
              Animation at Universidad Iberoamericana Puebla, and spent a year at Volkswagen
              Financial Services building corporate identity assets and holding global brand
              standards across multiple automotive brands.
            </p>
            <div className="grid gap-10 pt-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Skills</h3>
                <ul className="space-y-2 text-base">
                  {skills.map((s) => <li key={s} className="border-b border-border pb-2">{s}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Languages</h3>
                <ul className="space-y-2 text-base">
                  {["Spanish", "English", "German"].map((s) => <li key={s} className="border-b border-border pb-2">{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-secondary py-32 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] opacity-60">Get in touch</p>
          <h2 className="mt-6 font-display text-6xl leading-none md:text-9xl">
            Let's build something <em className="text-primary">interactive.</em>
          </h2>
          <p className="mt-10 max-w-xl text-lg opacity-70">
            Based in Puebla, Mexico. Open to remote work and relocation — a designer who can also ship it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.behance.net/gallery/239231705/VITALIA" target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Behance ↗</a>
            <a href="https://github.com/comodindin" target="_blank" rel="noreferrer" className="rounded-full border border-secondary-foreground/40 px-6 py-3 text-sm hover:bg-secondary-foreground hover:text-secondary">GitHub ↗</a>
            <a href={`${BASE}/CV_Sarai_Rosas.pdf`} target="_blank" rel="noreferrer" className="rounded-full border border-secondary-foreground/40 px-6 py-3 text-sm hover:bg-secondary-foreground hover:text-secondary">CV ↗</a>
          </div>
          <p className="mt-24 text-xs opacity-50">© {new Date().getFullYear()} Sarai Rosas</p>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ p, offset }: { p: Project; offset: boolean }) {
  const inner = (
    <>
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <img src={`${BASE}/images/${p.img}`} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
        {p.status && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">{p.status}</span>
        )}
      </div>
      <div className="mt-6 flex items-baseline gap-4">
        <span className="font-display text-xl text-primary">{p.n}</span>
        <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>)}
      </div>
      <p className="mt-4 text-muted-foreground">{p.desc}</p>
      {p.cta && <span className="mt-4 inline-block border-b border-foreground pb-0.5 text-sm font-medium group-hover:border-primary group-hover:text-primary">{p.cta} ↗</span>}
    </>
  );
  const cls = `group block ${offset ? "md:mt-32" : ""}`;
  return p.href ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function FreelanceGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const total = carousels.reduce((n, c) => n + c.slides.length, 0);
  const current = open === null ? null : carousels[open];

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setSlide((s) => Math.min(s + 1, current.slides.length - 1));
      if (e.key === "ArrowLeft") setSlide((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current]);

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="rounded-lg border border-border bg-card p-8 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Client</p>
            <h3 className="mt-3 font-display text-4xl">Marina Reyes</h3>
            <a
              href="https://www.instagram.com/marinareyesintegral?obrf=MWttYndla2R6aTV0aw=="
              target="_blank"
              rel="noreferrer"
              className="group/ig inline-flex items-baseline gap-2 text-muted-foreground transition hover:text-primary"
            >
              <span>@marinareyesintegral</span>
              <span className="border-b border-current pb-0.5 text-xs uppercase tracking-[0.2em] group-hover/ig:border-primary">Instagram ↗</span>
            </a>
            <p className="mt-1 text-muted-foreground">Medicina Integral · Oaxaca</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Carousels</dt>
                <dd className="font-display text-5xl">{carousels.length}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Slides</dt>
                <dd className="font-display text-5xl">{total}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              Art direction, layout and copy design for Instagram. Tap a cover to flip through the full carousel.
            </p>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:col-span-8">
          {carousels.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => { setOpen(i); setSlide(0); }}
              className="group text-left"
            >
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <img src={c.slides[0]?.url} alt={c.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute right-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium">
                  1/{c.slides.length}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium leading-snug group-hover:text-primary">{c.title}</p>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex flex-col bg-secondary/95 text-secondary-foreground backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between px-6 py-4" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-2xl italic">{current.title}</p>
            <a
              href="https://www.instagram.com/marinareyesintegral?obrf=MWttYndla2R6aTV0aw=="
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-secondary-foreground/30 px-4 py-2 text-sm transition hover:bg-secondary-foreground hover:text-secondary sm:block"
            >
              @marinareyesintegral ↗
            </a>
            <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="rounded-full border border-secondary-foreground/30 px-4 py-2 text-sm hover:bg-secondary-foreground hover:text-secondary">
              Close ✕
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center gap-4 px-4" onClick={(e) => e.stopPropagation()}>
            <button type="button" aria-label="Previous" disabled={slide === 0} onClick={() => setSlide(slide - 1)} className="rounded-full border border-secondary-foreground/30 p-3 text-xl disabled:opacity-20">←</button>
            <img src={current.slides[slide]?.url} alt={`${current.title} — slide ${slide + 1}`} className="max-h-full max-w-[min(80vw,560px)] rounded-lg object-contain" />
            <button type="button" aria-label="Next" disabled={slide === current.slides.length - 1} onClick={() => setSlide(slide + 1)} className="rounded-full border border-secondary-foreground/30 p-3 text-xl disabled:opacity-20">→</button>
          </div>
          <div className="flex justify-center gap-2 py-5" onClick={(e) => e.stopPropagation()}>
            {current.slides.map((_, i) => (
              <button key={i} type="button" aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-primary" : "w-3 bg-secondary-foreground/30"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
