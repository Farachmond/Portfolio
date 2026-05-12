"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1, title: "Feel Good Aftermovie", category: "Film", year: "2026",
    description: "Aftermovie voor het Feel Good Charity event — de energie, emotie en gemeenschapssfeer van die avond vastgelegd.",
    tags: ["Aftermovie", "Event Film"], duration: "",
    gradient: "from-zinc-900 via-neutral-800 to-stone-900",
    video: "/feel-good-aftermovie.mp4",
    poster: "/feel-good-poster.png", posterFit: "cover" as const,
  },
  {
    id: 2, title: "Showreel", category: "Showreel", year: "2026",
    description: "Mijn persoonlijke showreel — een overzicht van mijn beste werk in fotografie, video en content creatie.",
    tags: ["Showreel", "Best Of"], duration: "",
    gradient: "from-neutral-900 via-zinc-800 to-stone-900",
    video: undefined, poster: undefined,
  },
  {
    id: 3, title: "Intro Symposium", category: "Motion Graphics", year: "2026",
    description: "Intro video gemaakt voor het ROC Mondriaan Symposium — een krachtige opening voor een inspirerende dag.",
    tags: ["Motion Graphics", "Event"], duration: "",
    gradient: "from-stone-900 via-zinc-800 to-neutral-900",
    video: "/intro-symposium.mov", poster: "/roc-mondriaan-poster.jpg", posterFit: "contain" as const,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const featured = projects.slice(0, 3);
  const rest = projects.slice(3);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 lg:px-12 overflow-hidden" style={{ background: "var(--bg)" }}>

      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bokeh-a absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px]" style={{ background: "rgba(255,255,255,0.03)" }} />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="section-label mb-6">Geselecteerd Werk</p>
          <h2 className="text-white font-black uppercase" style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            Projecten
          </h2>
        </motion.div>

        {/* Staggered featured cards */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => project.video && setActiveVideo(project.video)}
              className={`relative overflow-hidden group flex-shrink-0 ${
                project.video ? "cursor-pointer" : "cursor-default"
              } ${
                i === 1
                  ? "w-full md:w-72 aspect-[3/4]"
                  : "w-full md:w-56 aspect-[3/4] md:mb-10"
              }`}
            >
              <ProjectCardInner project={project} featured={i === 1} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <a href="#contact"
            className="inline-flex items-center px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border"
            style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.5)"; el.style.color = "#fff"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.15)"; el.style.color = "rgba(255,255,255,0.5)"; }}
          >Neem Contact Op</a>
        </motion.div>
      </div>

      {/* Video lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.4)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
        >
          Close
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video player */}
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-sm"
          style={{ maxHeight: "80vh", background: "#000" }}
        >
        </video>
      </motion.div>
    </motion.div>
  );
}

function ProjectCardInner({ project, featured }: { project: typeof projects[0]; featured: boolean }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (project.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (project.video && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="w-full h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Background: poster image or gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient}`} />
      {project.poster && (
        <Image
          src={project.poster}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: project.posterFit ?? "cover",
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.5s",
          }}
        />
      )}

      {/* Video preview on hover */}
      {project.video && (
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          playsInline
          loop
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
      )}

      {!project.video && (
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
      )}

      {/* Default info */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
      >
        <p className="section-label mb-1">{project.category}</p>
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
        {featured && <p className="text-white/40 text-xs mt-1">{project.year}</p>}
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex flex-col justify-end p-5"
        style={{ background: project.video ? "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)" : "rgba(8,8,8,0.88)" }}
      >
        {project.video ? (
          <div className="w-full">
            {/* Play button indicator */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>Klik om af te spelen</span>
            </div>
            <p className="section-label mb-1">{project.category}</p>
            <h3 className="text-white font-bold text-lg">{project.title}</h3>
            <p className="text-white/40 text-xs mt-1">{project.year}</p>
            <div className="flex gap-2 flex-wrap mt-2">
              {project.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 glass-card text-white/40">{t}</span>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 text-center">{project.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-3 text-center">{project.description}</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.tags.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 glass-card text-white/40">{t}</span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Duration badge */}
      {project.duration && (
        <div className="absolute top-4 right-4 glass-card px-2 py-1 text-xs font-mono text-white/40">
          {project.duration}
        </div>
      )}
    </div>
  );
}

function SmallCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 flex flex-col justify-end p-4"
        style={{ background: "rgba(8,8,8,0.85)" }}
      >
        <p className="section-label mb-1">{project.category}</p>
        <h3 className="text-white font-semibold text-sm">{project.title}</h3>
      </motion.div>
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
      >
        <h3 className="text-white font-semibold text-sm">{project.title}</h3>
        <p className="section-label mt-0.5">{project.year}</p>
      </motion.div>
    </div>
  );
}
