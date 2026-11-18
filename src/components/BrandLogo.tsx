type BrandLogoProps = {
  brand: string;
  slug: string;
  className?: string;
  decorative?: boolean;
};

export default function BrandLogo({
  brand,
  slug,
  className = "brand-logo",
  decorative = false,
}: BrandLogoProps) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={decorative ? "" : `${brand} logo`}
      aria-hidden={decorative ? true : undefined}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
