import { brands } from "../data/brands";

export default function BrandLogo({ name }) {
  const brand = brands[name];
  if (!brand) return <span>{name}</span>;
  return (
    <span className={`brand-logo brand-logo--${brand.variant || "standard"}`}>
      {brand.file ? (
        <img
          src={`/logos/${brand.file}`}
          alt={brand.label || name}
          width="180"
          height="90"
          loading="lazy"
        />
      ) : (
        <span className="brand-logo__wordmark">{brand.label || name}</span>
      )}
    </span>
  );
}
