"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : ""
      }`}
      style={scrolled ? { background: "rgba(5,5,5,0.8)", borderColor: "var(--glass-border)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center"
          style={{ filter: "drop-shadow(0 0 0px rgba(124,58,237,0))", transition: "filter 0.4s ease" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.filter =
              "drop-shadow(0 0 14px rgba(124,58,237,0.5))";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.filter =
              "drop-shadow(0 0 0px rgba(124,58,237,0))";
          }}
        >
          <img
            src="/logo.png"
            alt="FC Production"
            className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            style={{ opacity: 0.95 }}
          />
        </motion.a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-glow px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-black"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-4 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-full bg-white origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-full bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-full bg-white origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden backdrop-blur-xl overflow-hidden border-b"
            style={{ background: "rgba(5,5,5,0.95)", borderColor: "var(--glass-border)" }}
          >
            <ul className="px-6 pb-10 pt-6 flex flex-col gap-8">
              {[...links, { href: "#contact", label: "Hire Me" }].map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
