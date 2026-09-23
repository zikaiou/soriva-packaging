export type BuyerGuideItem = {
  tag: string;
  title: string;
  desc: string;
  href: string;
};

type ProductBuyerGuidesProps = {
  guides: BuyerGuideItem[];
  title?: string;
  subtitle?: string;
};

export default function ProductBuyerGuides({
  guides,
  title = "Related Buyer Guides & Packaging Resources",
  subtitle = "Practical advice on box specifications, sampling checklists, insert materials and RFQ preparation.",
}: ProductBuyerGuidesProps) {
  return (
    <section className="mrb-section soft product-buyer-guides" aria-label="Related buyer guides">
      <div className="container">
        <div className="mrb-head center">
          <span className="eyebrow dark">BUYER GUIDES</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="mrb-res-cards">
          {guides.map((g) => (
            <article className="mrb-res-card" key={g.href}>
              <small>{g.tag}</small>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <a href={g.href}>Read Guide →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
