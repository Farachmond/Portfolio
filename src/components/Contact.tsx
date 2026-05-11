"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactItems = [
  { label: "Email", value: "hello@yourname.com", href: "mailto:hello@yourname.com" },
  { label: "Instagram", value: "@yourhandle", href: "https://instagram.com" },
  { label: "Vimeo", value: "vimeo.com/yourname", href: "https://vimeo.com" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}>
      {/* Animated glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[130px] pointer-events-none orb-2"
        style={{ background: "rgba(124,58,237,0.08)" }} />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "var(--glass-border)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ color: "var(--accent-light)" }}>
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-8 text-white">
              Let&apos;s Create
              <br />
              <span style={{ color: "var(--text-muted)", opacity: 0.35 }}>Something</span>
              <br />
              <em className="font-thin not-italic" style={{ color: "var(--text-muted)" }}>Great</em>
            </h2>
            <p className="leading-relaxed mb-14 max-w-sm text-base" style={{ color: "var(--text-muted)" }}>
              Whether you have a project in mind or just want to talk about
              visual storytelling, I&apos;d love to hear from you.
            </p>

            <div className="space-y-7">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-8"
                >
                  <span className="text-xs tracking-widest uppercase w-20 shrink-0"
                    style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-14 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
              <span className="text-sm" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                Available for freelance — Q3 2025
              </span>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-24"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mb-7 glass-card"
                  style={{ boxShadow: "0 0 30px var(--accent-glow)" }}
                >
                  <svg className="w-7 h-7" style={{ color: "var(--accent-light)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <Field
                  label="Project Type"
                  value={form.project}
                  onChange={(v) => setForm({ ...form, project: v })}
                  placeholder="Animation, Film, Motion Graphics..."
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent text-white/80 px-5 py-4 text-sm resize-none focus:outline-none transition-all duration-300 placeholder:text-white/20 glass-card"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow-soft)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  className="btn-glow group w-full py-5 text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", required = false, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder ?? label}
      className="w-full bg-transparent text-white/80 px-5 py-4 text-sm focus:outline-none transition-all duration-300 placeholder:text-white/20 glass-card"
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 0 20px var(--accent-glow-soft)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "var(--glass-border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}
