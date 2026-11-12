"use client";

import Link from "next/link";
import { useRef } from "react";
import { homeCovers } from "../data/covers";
import { profile } from "../data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language, t } = useLanguage();
  const mosaic = useRef(null);

  function moveMosaic(event) {
    if (event.pointerType !== "mouse") return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const grid = mosaic.current;
    const verticalSpace = (height - grid.getBoundingClientRect().height) / 2;
    const verticalTravel = Math.max(0, Math.min(40, verticalSpace));
    const x = (0.5 - (event.clientX - left) / width) * 48;
    const y = (0.5 - (event.clientY - top) / height) * 2 * verticalTravel;
    grid.style.setProperty("--mosaic-x", `${x}px`);
    grid.style.setProperty("--mosaic-y", `${y}px`);
  }

  function resetMosaic() {
    mosaic.current.style.removeProperty("--mosaic-x");
    mosaic.current.style.removeProperty("--mosaic-y");
  }

  return (
    <section className="hero" onPointerMove={moveMosaic} onPointerLeave={resetMosaic}>
      <div className="hero__art" aria-hidden="true">
        <div className="hero__mosaic" ref={mosaic}>
          {homeCovers.map(({ src, width, height }) => (
            <img className="hero__tile" key={src} src={src} alt="" width={width} height={height} />
          ))}
        </div>
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <h1 className="hero__title">{profile.name}</h1>
      <div className="hero__copy">
        <p>{t.intro}</p>
        <div className="hero__links">
          <Link href="/work/">{t.explore} <span aria-hidden="true">↗</span></Link>
          <a href={profile.cv[language]} download>{t.download} <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}
