"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects Completed" },
  { value: "40+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
];

const skills = [
  "Cinema 4D",
  "After Effects",
  "DaVinci Resolve",
  "Blender",
  "Premiere Pro",
  "Nuke",
  "TouchDesigner",
  "Houdini",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-12 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}>
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none orb-1"
        style={{ background: "var(--accent-glow-soft)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none orb-2"
        style={{ background: "rgba(79,70,229,0.08)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden glass-card">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 30%, rgba(124,58,237,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(79,70,229,0.15) 0%, transparent 50%), var(--bg)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-50"
                style={{ background: "var(--accent)" }}
              />
              <div className="absolute bottom-5 left-5 text-xs font-mono" style={{ color: "var(--text-muted)", opacity: 0.3 }}>
                Add /public/portrait.jpg
              </div>
            </div>

            {/* Accent border */}
            <div
              className="absolute -bottom-5 -right-5 w-full h-full border pointer-events-none"
              style={{ borderColor: "var(--border-accent)" }}
            />

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden sm:block absolute -bottom-10 -right-10 p-5 z-10 glass-card"
              style={{ boxShadow: "0 0 30px var(--accent-glow-soft)" }}
            >
              <div className="text-3xl font-black" style={{ color: "var(--accent-light)" }}>
                8+
              </div>
              <div className="text-xs tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>
                Years of Craft
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:pl-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-medium"
              style={{ color: "var(--accent-light)" }}>
              About Me
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-10 text-white">
              Crafting
              <br />
              <span style={{ color: "var(--text-muted)", opacity: 0.4 }}>Visual</span>
              <br />
              Stories
            </h2>

            <p className="leading-relaxed mb-5 text-lg" style={{ color: "var(--text-muted)" }}>
              I'm a motion designer and filmmaker with over 8 years of experience
              creating compelling visual narratives. From brand films to abstract
              animations, I blend technical precision with artistic vision.
            </p>
            <p className="leading-relaxed mb-12" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              Based in Los Angeles, I collaborate with brands, agencies, and
              independent filmmakers to bring stories to life. Every frame is an
              opportunity to create something unforgettable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="border-l pl-5"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs tracking-wider mt-1" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                Tools & Software
              </p>
              <div className="flex gap-2 flex-wrap">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                    className="px-3 py-1.5 text-xs cursor-default transition-all duration-300 glass-card"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--accent-light)";
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.boxShadow = "0 0 12px var(--accent-glow-soft)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
