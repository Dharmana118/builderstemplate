import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

function Field({
  label,
  type = "text",
  textarea,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  const active = focus || value.length > 0;
  return (
    <div className="relative">
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-300 uppercase tracking-wider ${
          active ? "top-1.5 text-[10px] text-primary" : "top-4 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          rows={5}
          className="w-full bg-card border border-border focus:border-primary outline-none px-4 pt-7 pb-3 text-foreground transition-colors resize-none"
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="w-full bg-card border border-border focus:border-primary outline-none px-4 pt-7 pb-3 text-foreground transition-colors"
        />
      )}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all ${
          focus ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSent(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-16 concrete-texture">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
            / 05 — Contact
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            Let's Build <span className="text-primary">Something</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. Our team responds within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="bg-card/60 backdrop-blur border border-border p-8 md:p-10 clip-corner space-y-5"
          >
            <Field label="Your Name" value={name} onChange={setName} required />
            <Field label="Email Address" type="email" value={email} onChange={setEmail} required />
            <Field label="Project Details" textarea value={message} onChange={setMessage} required />
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-bold uppercase tracking-wider btn-glow clip-corner disabled:opacity-80"
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Message Sent
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>

          {/* Map + info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Map placeholder */}
            <div className="relative flex-1 min-h-[300px] bg-card border border-border overflow-hidden clip-corner">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, oklch(0.27 0 0) 1px, transparent 1px),
                    linear-gradient(to bottom, oklch(0.27 0 0) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
              {/* fake roads */}
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-steel/40 -rotate-6" />
              <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-steel/30 rotate-3" />
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-steel/30 rotate-12" />

              {/* pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 bg-primary/30 rounded-full animate-ping" />
                  <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.7)]">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur border border-border p-3 text-xs">
                <div className="font-bold text-foreground">IronForge HQ</div>
                <div className="text-muted-foreground">42 Steelworks Ave, Detroit, MI 48201</div>
              </div>
            </div>

            {/* Contact items */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Phone, label: "Call", val: "+1 (313) 555-0142" },
                { icon: Mail, label: "Email", val: "build@ironforge.co" },
                { icon: MapPin, label: "Visit", val: "Detroit, MI" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-card border border-border p-4 hover:border-primary transition-colors group"
                >
                  <c.icon className="w-5 h-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm text-foreground font-semibold mt-0.5">{c.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
