const brands = ["SUPREME", "CERA", "VECTUS", "BERGER", "FERROUS CRETE", "GREENPANEL", "CENTURY", "MERINO"];

export function BrandPartners() {
  return (
    <section className="partners-section">
      <div className="shell">
        <p className="partners-title">Trusted Products & Material Partners</p>
        <div className="brand-row">{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
        <p className="partner-note">Brand availability may vary by product category and stock.</p>
      </div>
    </section>
  );
}
