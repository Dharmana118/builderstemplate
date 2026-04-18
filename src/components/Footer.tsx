import { HardHat, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.1_0_0)] border-t border-border">
      <div className="h-1 steel-stripe opacity-60" />
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center clip-corner">
              <HardHat className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <div className="font-display text-xl tracking-wider text-foreground">IRONFORGE</div>
              <div className="text-[10px] tracking-[0.3em] text-primary">CONSTRUCTION CO.</div>
            </div>
          </a>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Forging skylines since 1992. Built on steel, sealed with trust.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-primary font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {["About", "Services", "Projects", "Careers", "Press"].map((l) => (
              <li key={l}>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-primary font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["Construction", "Architecture", "Planning", "Renovation", "Project Mgmt"].map((l) => (
              <li key={l}>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] text-primary font-semibold mb-4">Follow</h4>
          <div className="flex gap-2 flex-wrap">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            ISO 9001 · OSHA Certified · LEED Platinum
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-16 py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} IronForge Construction Co. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
