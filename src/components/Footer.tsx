"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 lg:px-12"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--glass-border)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-8">
          <img src="/logo.png" alt="FC Production" className="h-10 w-auto" style={{ opacity: 0.8 }} />
          <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
            © {year} Farachmond. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["Vimeo", "Instagram", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)", opacity: 0.35 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.opacity = "0.35";
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
