import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center clip-corner group-hover:rotate-6 transition-transform">
            <HardHat className="w-6 h-6" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wider text-foreground">IRONFORGE</div>
            <div className="text-[10px] tracking-[0.3em] text-primary">CONSTRUCTION CO.</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold uppercase tracking-wider btn-glow clip-corner"
        >
          Get Quote
        </a>

        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-background/95 backdrop-blur border-t border-border"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-3 text-sm font-bold uppercase tracking-wider text-center clip-corner"
            >
              Get Quote
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
