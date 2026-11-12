const entry = (id, name, category, stack, es, en, options = {}) => ({
  id,
  name,
  category,
  stack,
  description: { es, en },
  repo: `https://github.com/ivangomezdev/${id}`,
  private: false,
  website: null,
  ...options,
});

export const projects = [
  entry(
    "clearance-radar",
    "Clearance Radar",
    "data",
    ["APIs", "JSON"],
    "Buscador de ofertas para clientes de Estados Unidos. Reúne liquidaciones con descuentos publicados de hasta el 90% en tiendas como Amazon, Walmart, Home Depot, Target y Woot. Los usuarios pueden comparar resultados y consultar ofertas locales por código postal.",
    "A deal discovery app for customers in the United States. It brings together clearance listings with advertised discounts of up to 90% from retailers such as Amazon, Walmart, Home Depot, Target, and Woot. Users can compare results and look up local offers by ZIP code.",
    {
      repo: null,
      screenshots: ["clearance-radar"],
      detail: {
        es: [
          "Búsqueda por producto o marca y filtros por tienda y porcentaje de descuento.",
          "Sincronización de fuentes, seguimiento de la actividad de la API y guardado de ofertas.",
          "Precios publicados separados de los pendientes de confirmar, con opción de exportar en JSON.",
        ],
        en: [
          "Product and brand search, with filters for retailer and discount percentage.",
          "Source syncing, API activity tracking, and saved offers.",
          "Published prices shown separately from prices awaiting confirmation, with JSON export.",
        ],
      },
    },
  ),
  entry(
    "heat-padel",
    "HEAT Pádel",
    "business",
    ["Web", "UI/UX"],
    "Propuesta web para HEAT Pádel & Pickleball, un club de Playa del Carmen. La demo formó parte de un paquete de automatización empresarial y muestra cómo reunir la oferta del club y el acceso a reservas en una sola experiencia.",
    "A web proposal for HEAT Pádel & Pickleball, a club in Playa del Carmen. The demo was part of a business automation package and shows how the club could bring its services and booking entry point together in one place.",
    {
      repo: null,
      website: "https://heatpadel.vercel.app/",
      websiteLabel: "proposalWebsite",
      screenshots: ["heat-padel"],
      detail: {
        es: [
          "Presentación de las canchas de pádel y pickleball, la academia y la comunidad.",
          "Prototipo de navegación con acceso a reservas, rankings y área de cuenta.",
        ],
        en: [
          "Club overview covering padel and pickleball courts, the academy, and the community.",
          "Prototype navigation with entry points for bookings, rankings, and member accounts.",
        ],
      },
    },
  ),
  entry(
    "sockets",
    "Native Sockets",
    "backend",
    ["Node.js", "WebSockets", "MQTT", "Workers"],
    "Motor en Node.js que reúne cuotas de varias casas de apuestas y detecta oportunidades de arbitraje en fútbol en vivo. Compara mercados equivalentes en tiempo real para que los usuarios puedan evaluar oportunidades con margen potencial a lo largo del día.",
    "A Node.js engine that aggregates odds from multiple bookmakers and detects arbitrage opportunities in live football. It compares equivalent markets in real time so users can assess opportunities with a potential margin throughout the day.",
    {
      private: true,
      featured: true,
      visual: "network",
      detail: {
        es: [
          "Adaptadores WebSocket, MQTT y GraphQL.",
          "Normalización de partidos y mercados para comparar cuotas equivalentes entre casas de apuestas.",
          "Cálculo de márgenes en paralelo con workers y control de vigencia de las cuotas.",
        ],
        en: [
          "WebSocket, MQTT and GraphQL adapters.",
          "Match and market normalization to compare equivalent odds across bookmakers.",
          "Parallel margin calculations using workers and odds freshness checks.",
        ],
      },
    },
  ),
  entry(
    "aserebank",
    "AsereBank",
    "fullstack",
    ["Next.js", "Sequelize", "Web3"],
    "Neobanco cripto con más de 560 usuarios, orientado principalmente a Cuba. La plataforma reúne billeteras digitales, transferencias internas y un mercado P2P para comprar y vender criptomonedas y facilitar los movimientos de dinero del día a día.",
    "A crypto neobank with more than 560 users, primarily serving Cuba. The platform brings together digital wallets, internal transfers, and a peer-to-peer marketplace for buying and selling cryptocurrency and moving money day to day.",
    {
      private: true,
      website: "https://aserebank.com/",
      screenshots: ["aserebank"],
      featured: true,
      visual: "wallet",
      detail: {
        es: [
          "Flujos de wallets, P2P, chat y verificación de identidad.",
          "Retiros con claves de idempotencia y estados de conciliación.",
          "Integraciones USDT en Ethereum, BSC y Solana.",
        ],
        en: [
          "Wallet, P2P, chat and identity verification workflows.",
          "Idempotent withdrawal requests and reconciliation states.",
          "USDT integrations across Ethereum, BSC and Solana.",
        ],
      },
    },
  ),
  entry(
    "TMCOnline",
    "TMC Online",
    "fullstack",
    ["React", "WebSockets", "Data visualization"],
    "Monitorización de equipos de minería: datos por lotes, reconexión y una interfaz para observar la operación.",
    "Mining hardware monitoring with batched data, reconnection and an operational dashboard.",
    {
      repo: "https://github.com/Arielmq/TMCOnline",
      featured: true,
      visual: "monitor",
      detail: {
        es: [
          "Recepción de datos mediante WebSockets.",
          "Filtrado por IP y acumulación de lotes.",
          "Reconexión con espera progresiva.",
        ],
        en: [
          "WebSocket-based data ingestion.",
          "IP filtering and batch accumulation.",
          "Progressive reconnection backoff.",
        ],
      },
    },
  ),
  entry(
    "dbet",
    "WINBET",
    "fullstack",
    ["Next.js", "MongoDB", "Stripe"],
    "Plataforma para una comunidad de entre 400 y 500 usuarios que centraliza la búsqueda de oportunidades de matched betting. El producto reúne un comparador de cuotas y un catálogo de promociones, con seguimiento de ofertas disponibles y completadas.",
    "A platform for a community of roughly 400–500 users to find matched betting opportunities. It brings together an odds comparison tool and a promotions catalogue, with tracking for available and completed offers.",
    {
      private: true,
      website: "https://winbet420.com/",
      visual: "monitor",
      screenshots: ["winbet420", "winbet420-offers"],
      detail: {
        es: [
          "Comparación de cuotas con filtros y caché de resultados.",
          "Catálogo de promociones con tipo, importe, dificultad y estado.",
          "Gestión de cuentas y suscripciones integradas con Stripe.",
        ],
        en: [
          "Odds comparison with filtering and cached results.",
          "Promotions catalogue with offer type, amount, difficulty, and status.",
          "Account management and subscriptions integrated with Stripe.",
        ],
      },
    },
  ),
  entry(
    "beachreferral",
    "Nasim Group · Beach Referral",
    "business",
    ["Next.js", "Firebase", "Excel"],
    "Portal de referidos para los afiliados de un club de playa de Nasim Group en Playa del Carmen. Cada afiliado puede registrarse, cargar los datos de sus huéspedes y consultar cuántas personas ha referido. El programa ofrece a los huéspedes descuentos de hasta el 50%.",
    "A referral portal for affiliates of a Nasim Group beach club in Playa del Carmen. Affiliates can register, submit guest details, and track how many people they have referred. The programme offers guests discounts of up to 50%.",
    {
      visual: "monitor",
      screenshots: ["nasim-group"],
      detail: {
        es: [
          "Registro y acceso de afiliados, con historial y conteo de huéspedes referidos.",
          "Ranking semanal de ventas para seguir la actividad del programa.",
          "Vistas y reportes diferenciados para afiliados, administradores y propietarios.",
        ],
        en: [
          "Affiliate registration and sign-in, with guest referral history and totals.",
          "Weekly sales leaderboard for tracking programme activity.",
          "Views and reporting for affiliates, administrators, and owners.",
        ],
      },
    },
  ),
  entry(
    "oolwellnes",
    "ÓOL Wellness",
    "fullstack",
    ["Next.js", "Stripe", "Firebase"],
    "Sitio desarrollado para el retiro de bienestar ÓOL en Hotel Xcaret Arte, en colaboración con Grupo Xcaret México. La experiencia web reunía la información del evento y la compra de entradas, desde conocer el retiro hasta recibir el pase de acceso.",
    "A website developed for the ÓOL wellness retreat at Hotel Xcaret Arte in collaboration with Grupo Xcaret México. It brought event information and ticket purchases into one experience, from learning about the retreat to receiving an admission pass.",
    {
      website: "https://www.oolwellness.mx/",
      websiteLabel: "eventWebsite",
      visual: "architecture",
      screenshots: ["ool-wellness"],
      detail: {
        es: [
          "Información del retiro y sus experiencias en una misma web.",
          "Flujo de compra de entradas integrado con Stripe.",
          "Entrega digital de entradas mediante confirmación por correo, códigos QR y pases para Wallet.",
        ],
        en: [
          "One website for retreat information and its activities.",
          "Ticket purchase flow integrated with Stripe.",
          "Digital ticket delivery through email confirmation, QR codes, and Wallet passes.",
        ],
      },
    },
  ),
  entry(
    "technovaAi",
    "TechNova AI",
    "frontend",
    ["Next.js", "React", "AI"],
    "Landing comercial para TechNova AI, enfocada en presentar soluciones de inteligencia artificial, automatización y ciberseguridad a empresas hispanohablantes. La página organiza el catálogo de servicios y facilita que un prospecto explore una solución y contacte al equipo.",
    "A marketing site for TechNova AI that introduces AI, automation, and cybersecurity services to Spanish-speaking businesses. It organizes the service catalogue and gives prospective clients a clear path from exploring a solution to contacting the team.",
    {
      website: "https://www.technovaai.com.mx/#services",
      visual: "architecture",
      screenshots: ["technova-ai"],
      detail: {
        es: [
          "Sección interactiva de servicios con acceso a detalles de cada solución.",
          "Presentación de automatización de procesos, asistentes virtuales y seguridad empresarial.",
          "Integración de chatbot y acceso directo a contacto por WhatsApp.",
        ],
        en: [
          "Interactive services section with links to details for each offering.",
          "Presentation of process automation, virtual assistants, and enterprise security.",
          "Chatbot integration and a direct contact link to WhatsApp.",
        ],
      },
    },
  ),
];
