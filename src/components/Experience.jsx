"use client";

import { experience } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="about__group experience">
      <h2 className="eyebrow">{t.experienceTitle}</h2>
      {experience.map((item) => (
        <article className="experience__item" key={item.company}>
          <div className="experience__date">
            <span>{item.period[language]}</span>
            <span>{item.mode[language]}</span>
          </div>
          <div>
            <h3>{item.role[language]}</h3>
            <p>{item.company}</p>
            <p>{item.description[language]}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
