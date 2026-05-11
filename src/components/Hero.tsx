"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Animated background image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Slow Ken Burns pan */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.6)" }} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-medium"
          style={{ color: "var(--accent-light)" }}
        >
          Motion Designer & Filmmaker
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="tracking-tight leading-[0.88] text-white font-black uppercase"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)", fontFamily: "Arome, sans-serif", fontWeight: 900 }}
          >
            Farachmond
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-thin tracking-[0.15em]"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2.2rem)",
              color: "var(--text-muted)",
            }}
          >
            Visual Storytelling
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="btn-glow group flex items-center gap-3 px-8 py-4 text-black text-xs font-bold tracking-widest uppercase w-full sm:w-auto justify-center"
          >
            View Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="glass-card px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300 hover:text-white w-full sm:w-auto text-center"
            style={{ color: "var(--text-muted)" }}
          >
            About Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.25em] uppercase font-mono" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>

      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute top-24 left-8 text-xs tracking-widest font-mono"
        style={{ color: "var(--text-muted)", opacity: 0.2 }}
      >
        01 / REEL
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute top-24 right-8 text-xs tracking-widest font-mono"
        style={{ color: "var(--text-muted)", opacity: 0.2 }}
      >
        2025
      </motion.div>
    </section>
  );
}
