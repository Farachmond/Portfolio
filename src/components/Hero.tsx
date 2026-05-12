"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fcproduction_/",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@fcproduction_?is_from_webapp=1&sender_device=pc",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>

      {/* Atmospheric bokeh orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bokeh-a absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-[100px]" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="bokeh-b absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: "rgba(200,200,220,0.05)" }} />
        <div className="bokeh-c absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[80px]" style={{ background: "rgba(255,255,255,0.04)" }} />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(8,8,8,0.72)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#080808]" />

      {/* Left: scroll label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <div className="divider" />
        <span className="section-label" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>scrollen</span>
      </motion.div>

      {/* Right: social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5"
      >
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="transition-all duration-300"
            style={{ color: "rgba(255,255,255,0.35)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            {s.icon}
          </a>
        ))}
        <div className="divider" />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="section-label mb-8"
        >
          Motion Designer & Filmmaker
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white uppercase font-black"
            style={{
              fontFamily: "Arome, sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            FCProduction
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mb-12 tracking-[0.15em] font-light"
          style={{ color: "var(--text-muted)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
        >
          Visueel Verhalen Vertellen
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 border"
            style={{ background: "#fff", color: "#000", borderColor: "#fff" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#fff"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "#fff"; el.style.color = "#000"; }}
          >
            Bekijk Werk
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact"
            className="inline-flex items-center px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border"
            style={{ background: "transparent", color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.2)" }}
            onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.6)"; el.style.color = "#fff"; }}
            onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.2)"; el.style.color = "rgba(255,255,255,0.6)"; }}
          >Inhuren</a>
        </motion.div>
      </div>

      {/* Bottom center scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
