"use client";

import Link from "next/link";
import { projectHeroImages, projectImages } from "../data/covers";
import { profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function ProjectDetail({ project }) {
  const { language, t } = useLanguage();
  const category = t.categories[project.category];
  const images = projectImages(project);
  const cover = projectHeroImages[project.id] ?? images[0];

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <div className="container project-detail__hero-inner">
          <div className="project-detail__hero-copy">
            <h1 className="display enter enter--fade">{project.name}</h1>
            <div className="project-detail__hero-meta">
              <span className="eyebrow">{category}</span>
              <div className="tags">{project.stack.slice(0, 2).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </div>
          <img className="project-detail__cover" src={cover.src} alt="" width={cover.width} height={cover.height} fetchPriority="high" />
        </div>
      </header>
      <div className="container project-detail__body">
        <aside className="project-detail__info" aria-label={t.details}>
          <div>
            <h2 className="eyebrow">{t.categoryTitle}</h2>
            <p>{category}</p>
          </div>
          <div>
            <h2 className="eyebrow">{t.skillsTitle}</h2>
            <div className="tags">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </div>
          <div>
            <h2 className="eyebrow">{t.linksTitle}</h2>
            <div className="project-detail__links">
              {project.private ? <span>{t.private}</span> : project.repo && (
                <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer">{t.repo} ↗</a>
              )}
              {project.website ? (
                <a className="text-link" href={project.website} target="_blank" rel="noopener noreferrer">
                  {t[project.websiteLabel ?? "website"]} ↗
                </a>
              ) : <span>{t.noDemo}</span>}
            </div>
          </div>
        </aside>
        <div className="project-detail__text">
          <p className="project-detail__intro">{project.description[language]}</p>
          {project.detail && (
            <div>
              <h2 className="eyebrow">{t.focus}</h2>
              <ul>{project.detail[language].map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          )}
          {project.private && <p>{t.privateNote}</p>}
          {project.related && (
            <div>
              <h2 className="eyebrow">{t.related}</h2>
              <div className="project-detail__links">
                {project.related.map((repo) => (
                  <a className="text-link" key={repo} href={`${profile.github}/${repo}`} target="_blank" rel="noopener noreferrer">{repo} ↗</a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container project-detail__gallery">
        {images.map(({ src, width, height, label }) => (
          <figure className="project-detail__art" data-full-image={Boolean(label)} key={src}>
            <img src={src} alt={label ? `${project.name} · ${label[language]}` : ""} width={width} height={height} loading="lazy" />
            <figcaption className="eyebrow">{label?.[language] ?? t.conceptArt}</figcaption>
          </figure>
        ))}
      </div>
      <div className="container project-detail__back">
        <Link className="text-link" href="/work/"><span aria-hidden="true">←</span> {t.backToWork}</Link>
      </div>
    </article>
  );
}
