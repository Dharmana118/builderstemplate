import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, MapPin, ArrowUpRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Aurora Heights", loc: "Dubai, UAE", tag: "Residential Tower", year: "2024" },
  { img: p2, title: "Ironclad Bridge", loc: "Hamburg, DE", tag: "Infrastructure", year: "2023" },
  { img: p3, title: "Monolith Villa", loc: "Marbella, ES", tag: "Luxury Residential", year: "2024" },
  { img: p4, title: "Helix Tower", loc: "London, UK", tag: "Corporate HQ", year: "2022" },
  { img: p5, title: "Foundry District", loc: "Detroit, USA", tag: "Industrial", year: "2023" },
  { img: p6, title: "The Ember Hotel", loc: "Lisbon, PT", tag: "Hospitality", year: "2024" },
];

const testimonials = [
  {
    name: "Marcus Chen",
    role: "CEO, Apex Holdings",
    text: "IronForge delivered our 60-story HQ three weeks ahead of schedule. Their precision is unmatched in the industry.",
  },
  {
    name: "Sofia Reyes",
    role: "Director, Reyes Group",
    text: "From blueprint to handover, every detail was anticipated. Our investment performed beyond projections.",
  },
  {
    name: "Hiroshi Tanaka",
    role: "Principal Architect",
    text: "Working with IronForge means working with engineers who actually respect the architect's vision. Rare.",
  },
];

export function ProjectsGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="projects" className="relative py-28 px-6 lg:px-16 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              / 04 — Portfolio
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-foreground">
              Recent Projects <span className="text-primary">& Ratings</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-bold text-2xl font-display">4.9</span> · 320 reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-card cursor-pointer clip-corner"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                {p.year}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                  {p.tag}
                </div>
                <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.loc}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
              Client Voices
            </span>
            <h3 className="mt-2 font-display text-3xl md:text-5xl">
              What They <span className="text-primary">Say</span>
            </h3>
          </div>

          <div className="relative max-w-3xl mx-auto bg-card border border-border p-10 md:p-14 clip-corner overflow-hidden">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-primary/10" />
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0,
                  x: i === active ? 0 : 20,
                  position: i === active ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5 }}
                className="inset-0"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                  "{t.text}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-display text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-1 transition-all ${
                      i === active ? "w-10 bg-primary" : "w-5 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                  className="w-10 h-10 border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
