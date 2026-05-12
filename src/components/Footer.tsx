"use client";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/fcproduction_/" },
  { label: "TikTok", href: "https://www.tiktok.com/@fcproduction_?is_from_webapp=1&sender_device=pc" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-10 px-6 lg:px-12" style={{ background: "var(--bg-secondary)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/logo.png" alt="FC Production" className="h-8 w-auto" style={{ opacity: 0.7 }} />
        <p className="section-label">© {year} Farachmond. Alle rechten voorbehouden.</p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a key={s.label} href={s.href}
              className="section-label hover:text-white transition-colors duration-300"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
