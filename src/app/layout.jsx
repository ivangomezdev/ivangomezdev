import "./globals.css";
import { LanguageProvider } from "../components/LanguageProvider";
import Navigation from "../components/Navigation";

export const metadata = {
  title: "Iván Gómez | Desarrollador Full-stack",
  description:
    "Portfolio de Iván Gómez. Desarrollo full-stack, sistemas en tiempo real, automatización y productos digitales. Disponible para trabajo remoto o híbrido.",
  applicationName: "Iván Gómez Portfolio",
  openGraph: {
    title: "Iván Gómez — Full-stack Developer",
    description: "Interfaces, data and real-time systems. Explore my work.",
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navigation />
          <main id="main" tabIndex={-1}>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
