import { Footer, PageIntro } from "../site-components";
import Image from "next/image";

const designs = [
  ["/embroidery/pet-portrait.png", "Custom Pet Portrait", "Custom favorites"],
  ["/embroidery/baby-rompers.png", "Personalized Baby Rompers", "Baby + little ones"],
  ["/embroidery/wifey.png", "Wifey Est. 2026", "Bridal + celebrations"],
  ["/embroidery/weekender.png", "Personalized Weekender", "Bags + accessories"],
  ["/embroidery/mri-quarterzip.png", "MRI Technologist Quarter-Zip", "Business + professional"],
  ["/embroidery/phillies-family.png", "Phillies Family Crewnecks", "Custom favorites"],
] as const;

export const metadata = { title: "Embroidery" };

export default function Embroidery() {
  return (
    <>
      <main>
        <PageIntro word="Stitch" title="Little Lute Embroidery" image="/embroidery/brand-crewneck.png" imageAlt="Little Lute Embroidery logo crewneck" current="embroidery">
          <p>I create personalized embroidery for gifts, celebrations, businesses, and everyday favorites.</p>
          <div className="facts"><span>Turnaround</span><span>1–2 weeks</span><span>Payment</span><span>Cash + Venmo</span></div>
          <a className="primary-link" href="sms:+12158803494?body=Hi%20Megan!%20I%E2%80%99d%20like%20to%20start%20an%20embroidery%20order.">start an order ↗</a>
        </PageIntro>

        <section className="section-shell">
          <div className="section-topline">
            <p className="section-label">Recent designs</p>
            <div className="filters" aria-label="Embroidery gallery categories"><span>All</span><span>Cozy apparel</span><span>Baby</span><span>Bridal</span><span>Bags</span><span>Business</span></div>
          </div>
          <div className="gallery-grid">
            {designs.map(([image, name, category]) => <article className="gallery-card" key={name}><Image src={image} alt={name} width={900} height={970} /><h3>{name}</h3><p>{category}</p></article>)}
          </div>
        </section>

        <section className="content-grid">
          <p className="section-label">Made personally</p>
          <div><h2 className="section-heading">Your idea,<br />stitched by me.</h2></div>
          <div className="body-copy"><p>Every order is created with attention to detail and a cozy, personal feeling. Tell me what you have in mind and I’ll help bring it to life.</p><a className="text-link" href="sms:+12158803494">text Megan ↗</a></div>
        </section>

        <section className="policy-strip"><div><p className="section-label">Before ordering</p><h2>Order details + policies</h2></div><a className="primary-link" href="/order-policy">read the full policy ↗</a></section>
      </main>
      <Footer />
    </>
  );
}
