import Image from "next/image";

const brands = [
  { name: "Supreme", logo: "/images/brands/supreme-logo.png" },
  { name: "CERA", logo: "/images/brands/cera-logo.svg" },
  { name: "Vectus", logo: "/images/brands/vectus-logo.png" },
  { name: "Ferrous Crete", logo: "/images/brands/ferrous-crete-logo.png" },
  { name: "Greenpanel", logo: "/images/brands/greenpanel-logo.png" },
];

export function BrandPartners() {
  return (
    <section className="partners-section">
      <div className="shell">
        <p className="partners-title">Trusted Products & Material Partners</p>
      </div>

      <div className="brand-marquee" aria-label="Trusted product and material partners">
        <div className="brand-marquee__track">
          {[0, 1].map((groupIndex) => (
            <div
              className="brand-marquee__group"
              aria-hidden={groupIndex === 1}
              key={groupIndex}
            >
              {brands.map((brand) => (
                <div className="brand-logo-card" key={`${groupIndex}-${brand.name}`}>
                  <Image
                    src={brand.logo}
                    alt={groupIndex === 0 ? `${brand.name} logo` : ""}
                    fill
                    sizes="(max-width: 640px) 150px, 190px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell">
        <p className="partner-note">Brand availability may vary by product category and stock.</p>
      </div>
    </section>
  );
}
