"use client";

import Link from "next/link";
import { useState } from "react";
import { projectLogos } from "../data/brands";
import { projectImages, projectPreviewOrder } from "../data/covers";
import { projects } from "../data/projects";
import { useLanguage } from "./LanguageProvider";

const initialLimit = 9;
const coverOrder = new Map(projectPreviewOrder.map((src, index) => [src, index]));
const orderedProjects = projects
  .map((project) => ({ ...project, images: projectImages(project) }))
  .sort((a, b) =>
    (coverOrder.get(a.images[0].src) ?? projectPreviewOrder.length) -
    (coverOrder.get(b.images[0].src) ?? projectPreviewOrder.length),
  );
const normalize = (value) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function ProjectLogo({ project }) {
  const file = projectLogos[project.id];
  const initials = project.name.split(/\s+/, 2).map((word) => word[0]).join("").toUpperCase();

  return (
    <span className="work-row__logo" data-light-logo={project.id === "oolwellnes" || project.id === "beachreferral"} aria-hidden="true">
      {file ? (
        <img src={`/logos/${file}`} alt="" width="42" height="25" loading="lazy" />
      ) : initials}
    </span>
  );
}

export default function Projects() {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const search = normalize(query.trim());
  const filtered = orderedProjects.filter(
    (project) =>
      (category === "all" || project.category === category) &&
      normalize([project.name, project.id, project.description[language], ...project.stack].join(" ")).includes(search),
  );
  const visible = expanded ? filtered : filtered.slice(0, initialLimit);

  return (
    <section id="projects" className="page-section work">
      <div className="container work__heading">
        <h1 className="display enter">{t.catalogueTitle}</h1>
      </div>
      <div className="container work__toolbar">
        <div className="work__filters" aria-label={t.filterProjects}>
          {["all", ...Object.keys(t.categories).filter((key) => key !== "data")].map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={category === key}
              onClick={() => {
                setCategory(key);
                setExpanded(false);
              }}
            >
              {key === "all" ? t.all : t.categories[key]}
            </button>
          ))}
        </div>
        <label className="work__search">
          <span className="sr-only">{t.search}</span>
          <input
            type="search"
            value={query}
            placeholder={t.search}
            onChange={(event) => {
              setQuery(event.target.value);
              setExpanded(false);
            }}
          />
        </label>
        <p className="sr-only" role="status">{filtered.length} {t.results}</p>
      </div>
      <ul id="catalogue" className="work__list">
        {visible.map((project) => (
          <li key={project.id}>
            <Link href={`/work/${project.id}/`} className="work-row" prefetch={false}>
              <div className="container work-row__inner">
                <h2>{project.name}</h2>
                <div className="work-row__tags" aria-hidden="true">
                  {project.stack.slice(0, 2).map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <ProjectLogo project={project} />
              </div>
              <div
                className="work-row__preview"
                data-screenshot={Boolean(project.screenshots)}
                data-gallery={project.images.length > 1}
                aria-hidden="true"
              >
                {project.images.map(({ src, width, height }) => (
                  <img key={src} src={src} alt="" width={width} height={height} loading="lazy" />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {!filtered.length && (
        <div className="container work__more">
          <p>{t.empty}</p>
          <button className="button" type="button" onClick={() => {
            setQuery("");
            setCategory("all");
          }}>{t.reset}</button>
        </div>
      )}
      {filtered.length > initialLimit && (
        <div className="container work__more">
          <button className="button" type="button" aria-expanded={expanded} aria-controls="catalogue" onClick={() => setExpanded(!expanded)}>
            {expanded ? t.less : t.more}
            <span aria-hidden="true">{expanded ? "−" : "+"}</span>
          </button>
        </div>
      )}
    </section>
  );
}
