"use client";

import BrandLogo from "./BrandLogo";
import Experience from "./Experience";
import { certificates, education, profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { language, t } = useLanguage();
  return (
    <section id="about" className="container page-section about">
      <div className="about__intro">
        <h1 className="display enter">{t.aboutTitle}</h1>
        <div className="about__text enter" style={{ "--delay": "100ms" }}>
          <p>{t.intro}</p>
          <p>{t.aboutText}</p>
          <p>{t.aboutSecond}</p>
        </div>
      </div>
      <div className="about__group enter" style={{ "--delay": "200ms" }}>
        <h2 className="eyebrow">{t.clientsTitle}</h2>
        <ul className="about__clients">
          {t.clientWork.map(([company, title, description]) => (
            <li key={company}>
              <p>{company}</p>
              <span>{title} · {description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="about__group enter" style={{ "--delay": "300ms" }}>
        <h2 className="eyebrow">{t.skillsTitle}</h2>
        <ul className="about__skills">
          {t.skills.map(([title, tools]) => (
            <li key={title}>
              <h3>{title}</h3>
              <div className="tags">{tools.split(" · ").map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
            </li>
          ))}
        </ul>
      </div>
      <Experience />
      <div className="about__credentials">
        <section className="about__group">
          <h2 className="eyebrow">{t.education}</h2>
          {education.map((item) => (
            <article className="education__item" key={item.school}>
              <BrandLogo name={item.school} />
              <div>
                <h3>{item.title[language]}</h3>
                <p className="eyebrow">{item.period[language]}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="about__group">
          <h2 className="eyebrow">{t.certifications}</h2>
          <ul className="education__certificates">
            {certificates.map((item) => (
              <li key={item.name}>
                <span>{language === "en" && item.en ? item.en : item.name}</span>
                <span>{item.issuer} · {item.date}</span>
              </li>
            ))}
          </ul>
          <p className="education__language">{t.language}</p>
          <a className="text-link" href={`${profile.linkedin}details/certifications/`} target="_blank" rel="noopener noreferrer">
            {t.credentials} ↗
          </a>
        </section>
      </div>
    </section>
  );
}
