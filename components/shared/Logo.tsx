import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? "brand-logo--inverse" : ""}`}>
      <Image className="brand-logo__image" src="/logo.jpeg" alt="Aravali Marbles Logo" width={56} height={56} />
      <span className="brand-logo__copy">
        <strong>ARAVALI</strong>
        <small>MARBLES</small>
      </span>
    </span>
  );
}
