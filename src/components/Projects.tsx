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
    video: undefined, poster: undefined, comingSoon: true,
  },
  {
    id: 3, title: "Intro Symposium", category: "Motion Graphics", year: "2026",
    description: "Intro video gemaakt voor het ROC Mondriaan Symposium — een krachtige opening voor een inspirerende dag.",
    tags: ["Motion Graphics", "Event"], duration: "",
    gradient: "from-stone-900 via-zinc-800 to-neutral-900",
    video: "/intro-symposium.mov", poster: "/poster-intro-symposium.jpg", posterFit: "cover" as const,
  },
  {
    id: 4, title: "Andy Schleck Edit", category: "Video Edit", year: "2024",
    description: "Video edit gemaakt voor Andy Schleck — montage door Farachmond Curiel.",
    tags: ["Video Edit", "Sport"], duration: "",
    gradient: "from-neutral-900 via-stone-800 to-zinc-900",
    video: "/andy-schleck.mp4", poster: "/poster-andy-schleck.jpg", posterFit: "cover" as const,
  },
  {
    id: 5, title: "The Breakfast Club Trailer", category: "Film", year: "2026",
    description: "Zelfgemaakte trailer van The Breakfast Club — een creatieve hervertelling van een iconische film.",
    tags: ["Trailer", "Film"], duration: "",
    gradient: "from-zinc-900 via-stone-800 to-neutral-900",
    video: "/breakfast-club-trailer.mp4", poster: "/poster-breakfast-club.jpg", posterFit: "cover" as const,
  },
];

const photos: { src: string; alt: string }[] = [
  { src: "/photos/img_0557.jpg", alt: "Foto" },
  { src: "/photos/398a9854.jpg", alt: "Foto" },
  { src: "/photos/facu-2025-09-17-066.jpg", alt: "Foto" },
  { src: "/photos/398a9840.jpg", alt: "Foto" },
  { src: "/photos/img_0633.jpg", alt: "Foto" },
  { src: "/photos/398a9865.jpg", alt: "Foto" },
  { src: "/photos/facu-2025-09-17-055.jpg", alt: "Foto" },
  { src: "/photos/398a9850.jpg", alt: "Foto" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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

        {/* Photo marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20"
        >
          <p className="section-label mb-6 text-center">Fotografie</p>
          <h3 className="text-white font-black uppercase text-center mb-12" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            Foto's
          </h3>
          <Marquee3D speed={25}>
            {[...(photos.length > 0 ? photos : Array(8).fill(null)), ...(photos.length > 0 ? photos : Array(8).fill(null))].map((photo, i) => (
              <div key={i} className="flex-shrink-0 w-56 md:w-72 aspect-square overflow-hidden rounded-sm">
                {photo ? (
                  <Image src={photo.src} alt={photo.alt} width={400} height={400} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full glass-card flex items-center justify-center" style={{ borderStyle: "dashed" }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} style={{ color: "rgba(255,255,255,0.15)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </Marquee3D>
        </motion.div>

        {/* Video marquee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-16"
        >
          <p className="section-label mb-6 text-center">Video</p>
          <h3 className="text-white font-black uppercase text-center mb-12" style={{ fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 0.9, letterSpacing: "-0.02em" }}>
            Films
          </h3>
          <Marquee3D speed={40} reverse>
            {[...projects, ...projects].map((project, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-48 md:w-64 aspect-[3/4] relative overflow-hidden rounded-sm ${project.video ? "cursor-pointer" : "cursor-default"}`}
                onClick={() => project.video && setActiveVideo(project.video)}
              >
                <ProjectCardInner project={project} featured={false} />
              </div>
            ))}
          </Marquee3D>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-8"
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") { e.preventDefault(); togglePlay(); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose}
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

        {/* Video */}
        <div className="relative bg-black rounded-sm overflow-hidden" style={{ maxHeight: "80vh" }}>
          <video
            ref={videoRef} src={src} autoPlay playsInline
            onContextMenu={(e) => e.preventDefault()}
            onTimeUpdate={() => { const v = videoRef.current; if (v) setProgress(v.currentTime / v.duration * 100); }}
            onLoadedMetadata={() => { if (videoRef.current) setDuration(videoRef.current.duration); }}
            onEnded={() => setPlaying(false)}
            className="w-full"
            style={{ maxHeight: "calc(80vh - 56px)", display: "block" }}
          />

          {/* Custom controls */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "rgba(0,0,0,0.85)" }}>
            {/* Play/pause */}
            <button onClick={togglePlay} className="text-white flex-shrink-0">
              {playing
                ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              }
            </button>

            {/* Time */}
            <span className="text-xs font-mono flex-shrink-0" style={{ color: "rgba(255,255,255,0.5)" }}>
              {fmt(duration * progress / 100)} / {fmt(duration)}
            </span>

            {/* Progress bar */}
            <input type="range" min={0} max={100} value={progress}
              onChange={(e) => { const v = videoRef.current; if (v) { v.currentTime = v.duration * Number(e.target.value) / 100; setProgress(Number(e.target.value)); } }}
              className="flex-1 h-1 cursor-pointer accent-white"
            />

            {/* Mute */}
            <button onClick={() => { const v = videoRef.current; if (v) { v.muted = !v.muted; setMuted(!muted); } }} className="text-white flex-shrink-0">
              {muted
                ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
              }
            </button>
          </div>
        </div>
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

      {(project as any).comingSoon && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 border z-10" style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(8,8,8,0.6)" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>Coming Soon</span>
        </div>
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

function Marquee3D({ children, speed = 30, reverse = false }: { children: React.ReactNode; speed?: number; reverse?: boolean }) {
  return (
    <div style={{
      perspective: "800px",
      overflow: "hidden",
      maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    }}>
      <div style={{ transform: "rotateX(8deg)", transformOrigin: "center center" }}>
        <div
          className="flex gap-4 w-max py-4"
          style={{ animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}` }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {children}
        </div>
      </div>
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
