import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Esta página no existe.<br />This page does not exist.</h1>
      <Link className="button" href="/">Volver al inicio / Back home</Link>
    </section>
  );
}
