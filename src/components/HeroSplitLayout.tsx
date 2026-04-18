import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Compass, HardHat, Ruler, Hammer, ShieldCheck, Star } from "lucide-react";
import skyscraper from "@/assets/skyscraper.jpg";

const services = [
  { icon: Building2, title: "Construction", desc: "Commercial & residential builds executed to spec, on schedule." },
  { icon: Compass, title: "Architecture", desc: "Award-winning design teams shaping skylines worldwide." },
  { icon: Ruler, title: "Planning", desc: "Site analysis, feasibility studies & permit management." },
  { icon: Hammer, title: "Renovation", desc: "Heritage restoration and modern interior overhauls." },
  { icon: ShieldCheck, title: "Safety", desc: "ISO-certified workflows. Zero-incident commitments." },
  { icon: HardHat, title: "Project Mgmt", desc: "End-to-end oversight from blueprint to ribbon-cut." },
];

const stats = [
  { num: "32", label: "Years Active" },
  { num: "480+", label: "Projects Delivered" },
  { num: "120", label: "Expert Engineers" },
  { num: "18", label: "Countries" },
];

export function HeroSplitLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={ref} className="relative">
      <div className="grid lg:grid-cols-[42%_58%] relative">
        {/* LEFT: Tall skyscraper image spanning 3 sections */}
        <div className="hidden lg:block relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.img
              src={skyscraper}
              alt="IronForge skyline tower"
              style={{ y, scale }}
              className="absolute inset-0 w-full h-full object-cover"
              width={1080}
              height={1920}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

            {/* vertical label */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
              <span className="text-[10px] tracking-[0.5em] text-primary font-semibold uppercase">
                Building the future · Since 1992
              </span>
            </div>

            {/* corner badge */}
            <div className="absolute bottom-8 left-8 bg-primary text-primary-foreground px-4 py-3 clip-corner">
              <div className="text-[10px] tracking-[0.3em] uppercase font-bold">Tallest Build</div>
              <div className="font-display text-2xl">828m</div>
            </div>
          </div>
        </div>

        {/* RIGHT: 3 stacked sections */}
        <div className="relative">
          {/* mobile background image */}
          <div className="lg:hidden absolute inset-0 z-0">
            <img src={skyscraper} alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-background/70" />
          </div>

          {/* HOME */}
          <section
            id="home"
            className="relative min-h-screen flex items-center px-6 lg:px-16 py-24 border-b border-border"
          >
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                  Premium Construction
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-foreground"
              >
                We Build <span className="text-primary text-glow">Tomorrow's</span> Landmarks
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                IronForge engineers iconic skylines across four continents. Steel, glass and
                vision — forged into structures that outlast generations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-wider btn-glow clip-corner"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 border border-border text-foreground px-7 py-4 font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  View Projects
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-14 flex items-center gap-6"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">4.9/5</span> · trusted by 480+ clients
                </div>
              </motion.div>
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="relative min-h-screen flex items-center px-6 lg:px-16 py-24 border-b border-border concrete-texture"
          >
            <div className="relative z-10 max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] uppercase text-primary font-semibold"
              >
                / 02 — About
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-3 font-display text-4xl md:text-6xl text-foreground"
              >
                Three Decades of <span className="text-primary">Steel & Vision</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                Since 1992, IronForge has earned its reputation as a builder of impossible projects.
                From subterranean transit hubs to record-breaking towers, our mission is simple:
                deliver structures that define cities and stand the test of time.
              </motion.p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-border">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card p-6"
                  >
                    <div className="font-display text-4xl text-primary">{s.num}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 steel-stripe h-1 w-24 opacity-70" />
            </div>
          </section>

          {/* SERVICES */}
          <section
            id="services"
            className="relative min-h-screen flex items-center px-6 lg:px-16 py-24 border-b border-border"
          >
            <div className="relative z-10 w-full">
              <div className="max-w-2xl">
                <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                  / 03 — Services
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-6xl text-foreground">
                  What We <span className="text-primary">Forge</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Six core disciplines. One uncompromising standard.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group relative bg-card border border-border p-6 hover:border-primary transition-all duration-500 hover:-translate-y-1 clip-corner"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                    <s.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-xl text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
