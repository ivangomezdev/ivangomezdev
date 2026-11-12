const covers = {
  sockets: "native-sockets",
  aserebank: "aserebank",
  TMCOnline: "tmc-online",
  dbet: "dbet",
  smartsbettings: "smart-bettings",
  "arbs-in-vps": "distributed-execution",
  "dashboard-bets": "operations-dashboard",
};

const byVariant = {
  network: covers.sockets,
  engine: covers["arbs-in-vps"],
  wallet: covers.aserebank,
  monitor: covers.TMCOnline,
  architecture: covers.smartsbettings,
  commerce: covers["dashboard-bets"],
};

function screenshot(name, width, height, es, en) {
  return { src: `/images/work/screenshots/${name}.webp`, width, height, label: { es, en } };
}

const projectScreenshots = {
  winbet420: screenshot("winbet420", 996, 780, "Página de inicio", "Homepage"),
  "ool-wellness": screenshot("ool-wellness", 997, 754, "Sitio del retiro", "Retreat website"),
  "clearance-radar": screenshot("clearance-radar", 987, 804, "Buscador de ofertas", "Deal finder"),
  "heat-padel": screenshot("heat-padel", 985, 804, "Propuesta web del club", "Club website proposal"),
  aserebank: screenshot("aserebank", 920, 803, "Página de inicio", "Homepage"),
  "nasim-group": screenshot("nasim-group", 943, 805, "Acceso de afiliados", "Affiliate sign-in"),
  "technova-ai": screenshot("technova-ai", 919, 780, "Sección de servicios", "Services section"),
  "winbet420-offers": screenshot("winbet420-offers", 767, 903, "Catálogo de promociones", "Promotions catalogue"),
};

const nativeSocketsCover = {
  src: "/images/work/native-sockets-live-odds.webp",
  width: 900,
  height: 1200,
  label: { es: "Proveedores de cuotas en vivo", en: "Live odds providers" },
};

const tmcOnlineCover = {
  src: "/images/work/tmc-online-monitoring.webp",
  width: 900,
  height: 1200,
};

export const homeCovers = [
  "winbet420",
  "ool-wellness",
  "horsebet",
  "clearance-radar",
  "heat-padel",
  "aserebank",
  "nasim-group",
].map((name) => ({
  src: `/images/work/home/${name}.webp`,
  width: 900,
  height: 1200,
})).concat(nativeSocketsCover);

export const projectPreviewOrder = Object.values(projectScreenshots).map(({ src }) => src);

export const projectHeroImages = {
  dbet: {
    src: "/images/work/winbet-hero.webp",
    width: 1440,
    height: 960,
  },
};

export function projectImages(project) {
  if (project.screenshots) return project.screenshots.map((name) => projectScreenshots[name]);
  if (project.id === "sockets") return [nativeSocketsCover];
  if (project.id === "TMCOnline") return [tmcOnlineCover];

  const cover = covers[project.id] ?? byVariant[project.visual] ?? covers.sockets;
  return [{ src: `/images/work/${cover}.webp`, width: 384, height: 512 }];
}
