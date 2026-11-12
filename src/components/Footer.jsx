"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer__details">
        <div>
          <p className="eyebrow">{t.workMode}</p>
          <p>{t.remote}</p>
        </div>
        <div>
          <p className="eyebrow">{t.navigation}</p>
          <Link href="/work/">{t.nav[0]}</Link>
          <Link href="/about/">{t.nav[2]}</Link>
          <Link href="/about/#experience">{t.nav[1]}</Link>
          <Link href="/contact/">{t.contactTitle}</Link>
        </div>
        <div>
          <p className="eyebrow">{t.contactTitle}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div>
          <p className="eyebrow">{t.legal}</p>
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <button className="footer__pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{t.pauseMarquee}</button>
        </div>
      </div>
      <div className="footer__marquee" data-paused={paused} aria-hidden="true">
        <div className="footer__track">
          {[0, 1].map((group) => (
            <div className="footer__group" key={group}>
              {[0, 1, 2, 3].map((item) => <span key={item}>@IVANGOMEZDEV</span>)}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
