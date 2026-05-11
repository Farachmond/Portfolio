"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Animation",
    year: "2024",
    description: "A surreal journey through neon-lit cityscapes exploring urban loneliness and human connection.",
    tags: ["3D Animation", "Narrative"],
    duration: "3:42",
    gradient: "from-violet-950 via-purple-900 to-blue-950",
    accent: "#7C3AED",
  },
  {
    id: 2,
    title: "Velocity",
    category: "Motion Graphics",
    year: "2024",
    description: "High-octane motion graphics reel for an automotive brand launch campaign.",
    tags: ["Motion Graphics", "Brand"],
    duration: "1:30",
    gradient: "from-purple-950 via-violet-900 to-indigo-950",
    accent: "#9D6FFF",
  },
  {
    id: 3,
    title: "Silent Waters",
    category: "Film",
    year: "2023",
    description: "A meditative short film about the intersection of nature and technology in modern life.",
    tags: ["Cinematography", "Documentary"],
    duration: "8:20",
    gradient: "from-indigo-950 via-blue-900 to-violet-950",
    accent: "#6366f1",
  },
  {
    id: 4,
    title: "Fractals",
    category: "Animation",
    year: "2023",
    description: "Generative animation exploring mathematical beauty through recursive visual patterns.",
    tags: ["Generative", "Abstract"],
    duration: "2:15",
    gradient: "from-violet-950 via-purple-900 to-pink-950",
    accent: "#7C3AED",
  },
  {
    id: 5,
    title: "Emergence",
    category: "Motion Graphics",
    year: "2023",
    description: "Title sequence design for an award-winning documentary series on human evolution.",
    tags: ["Title Design", "Motion Graphics"],
    duration: "0:45",
    gradient: "from-blue-950 via-indigo-900 to-violet-950",
    accent: "#9D6FFF",
  },
  {
    id: 6,
    title: "The Long Road",
    category: "Film",
    year: "2022",
    description: "A road trip short capturing the raw beauty of American landscapes and open highways.",
    tags: ["Cinematography", "Travel"],
    duration: "12:00",
    gradient: "from-violet-950 via-indigo-900 to-blue-950",
    accent: "#7C3AED",
  },
];

const categories = ["All", "Animation", "Motion Graphics", "Film"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" ref={ref} className="py-32 px-6 lg:px-12 relative" style={{ background: "var(--bg)" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "rgba(124,58,237,0.05)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-5 font-medium"
            style={{ color: "var(--accent-light)" }}>
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
              Projects
            </h2>

            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                  style={
                    active === cat
                      ? {
                          background: "var(--accent)",
                          color: "#fff",
                          fontWeight: 700,
                          boxShadow: "0 0 20px var(--accent-glow)",
                        }
                      : {
                          border: "1px solid var(--glass-border)",
                          color: "var(--text-muted)",
                          background: "var(--glass)",
                          backdropFilter: "blur(10px)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.borderColor = "var(--glass-border)";
                      e.currentTarget.style.color = "var(--text-muted)";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--glass-border)" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14 text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)", opacity: 0.4 }}
        >
          More work available upon request
        </motion.p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative aspect-video overflow-hidden cursor-pointer"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Gradient thumbnail */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Purple glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `radial-gradient(ellipse at center, ${project.accent}20 0%, transparent 70%)` }}
      />

      {/* Badges */}
      <div className="absolute top-4 left-4 text-xs font-mono" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
        {project.year}
      </div>
      <div className="absolute top-4 right-4 px-2.5 py-1 text-xs font-mono glass-card" style={{ color: "var(--text-muted)" }}>
        {project.duration}
      </div>

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex flex-col justify-end p-6"
        style={{ background: "rgba(5,5,5,0.88)" }}
      >
        <p className="text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: "var(--accent-light)" }}>
          {project.category}
        </p>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 glass-card" style={{ color: "var(--text-muted)" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Play button */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center border"
          style={{ borderColor: "var(--accent)", boxShadow: "0 0 20px var(--accent-glow)" }}
        >
          <svg className="w-5 h-5 ml-1" style={{ color: "var(--accent-light)" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Default label */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      >
        <h3 className="text-white font-semibold text-base">{project.title}</h3>
        <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "var(--text-muted)" }}>
          {project.category}
        </p>
      </motion.div>
    </motion.article>
  );
}
