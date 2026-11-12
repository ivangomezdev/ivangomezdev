"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

function ThemeIcon({ light }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      {light ? (
        <path d="M20.9 13.4A9 9 0 0 1 10.6 3.1 9 9 0 1 0 20.9 13.4Z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
        </>
      )}
    </svg>
  );
}

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const detail = pathname.startsWith("/work/");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [nearTop, setNearTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    ["/work", t.nav[0]],
    ["/about", t.nav[2]],
    ["/contact", t.contactTitle],
  ];

  useEffect(() => {
    try {
      setLight(localStorage.getItem("portfolio-theme") === "light");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);

  useEffect(() => {
    setOpen(false);
    setNearTop(false);
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    function onPointerMove(event) {
      setNearTop(event.clientY < 100);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (detail) window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [pathname, detail]);

  function toggleTheme() {
    const theme = light ? "dark" : "light";
    setLight(theme === "light");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header
        className="header"
        data-detail={detail}
        data-reveal={nearTop}
        data-scrolled={scrolled}
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            event.currentTarget.querySelector(".header__menu")?.focus();
          }
        }}
      >
        <div className="header__inner container">
          <Link className="header__brand" href="/" onClick={() => setOpen(false)}>{profile.name}</Link>
          <nav id="main-navigation" className="header__nav" data-open={open} aria-label={t.navigation}>
            {links.map(([href, label], index) => (
              <Link
                key={href}
                href={`${href}/`}
                aria-current={pathname === href ? "page" : undefined}
                style={{ "--delay": `${index * 100}ms` }}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header__actions">
            <div className="language" aria-label="Idioma / Language">
              {["es", "en"].map((value) => (
                <button type="button" key={value} aria-pressed={language === value} onClick={() => setLanguage(value)}>
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="header__theme" type="button" onClick={toggleTheme} aria-label={t.toggleTheme} aria-pressed={light}>
              <ThemeIcon light={light} />
            </button>
            <button
              className="header__menu"
              type="button"
              aria-expanded={open}
              aria-controls="main-navigation"
              aria-label={open ? t.close : t.menu}
              onClick={() => setOpen(!open)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d={open ? "m5 5 14 14M19 5 5 19" : "M3 8h18M3 16h18"} />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
