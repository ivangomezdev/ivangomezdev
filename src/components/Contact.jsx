"use client";

import { useState } from "react";
import { profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { language, t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("copyError");
    }
  }

  return (
    <section id="contact" className="container page-section contact">
      <div className="contact__copy">
        <h1 className="display enter">{t.contactHeadline[0]}<br />{t.contactHeadline[1]}</h1>
        <p className="contact__intro enter" style={{ "--delay": "100ms" }}>{t.contactText}</p>
        <div className="contact__links enter" style={{ "--delay": "200ms" }}>
          <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button className="contact__copy-email" type="button" onClick={copyEmail}>{copyStatus === "copied" ? t.copied : t.copy}</button>
          <span className="sr-only" role="status">{copyStatus && t[copyStatus]}</span>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <div className="contact__availability enter" style={{ "--delay": "300ms" }}>
          <p className="eyebrow">{t.available}</p>
          <p>{t.remote}</p>
          <a className="text-link" href={profile.cv[language]} download>{t.download} ↓</a>
        </div>
      </div>
      <div className="contact__portrait enter enter--fade">
        <img src="/images/ivan.png" alt={profile.name} width="512" height="478" />
      </div>
    </section>
  );
}
