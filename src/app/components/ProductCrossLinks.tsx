type ProductCrossLinksProps = {
  industryHref: string;
  industryLabel: string;
};

export default function ProductCrossLinks({ industryHref, industryLabel }: ProductCrossLinksProps) {
  return (
    <section className="mrb-section product-cross-links" aria-label="Related packaging links">
      <div className="container">
        <div className="mrb-head center">
          <span className="eyebrow dark">CONTINUE EXPLORING</span>
          <h2>Build Your Packaging System</h2>
          <p>Explore related SORIVA capabilities and packaging resources for your project.</p>
        </div>
        <div className="product-cross-grid">
          <a href="/products/">All Products<span>Explore the full product center →</span></a>
          <a href={industryHref}>{industryLabel}<span>View industry packaging →</span></a>
          <a href="/custom-packaging/">Custom Packaging<span>Develop your structure and materials →</span></a>
          <a href="/factory/">Factory<span>See manufacturing capability →</span></a>
          <a href="/projects/">Projects<span>Review packaging applications →</span></a>
          <a href="/contact/">Request a Quote<span>Start your packaging inquiry →</span></a>
        </div>
      </div>
    </section>
  );
}
