import { Mountain } from "lucide-react";
import Image from "next/image";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand-logo ${inverse ? "brand-logo--inverse" : ""}`}>
      <Image src="/logo.jpeg" alt="Aravali Marbles Logo" width={70} height={50} />
      <span className="brand-logo__copy">
        <strong>ARAVALI</strong>
        <small>MARBLES</small>
      </span>
    </span>
  );
}
