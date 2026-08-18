import { Footer, PageIntro } from "../site-components";
import { EmbroideryGallery, type EmbroideryDesign } from "./embroidery-gallery";

const designs: EmbroideryDesign[] = [
  { image: "/embroidery/pet-portrait.png", name: "Custom Pet Portrait", label: "Custom favorites", category: "cozy-apparel" },
  { image: "/embroidery/baby-rompers.png", name: "Personalized Baby Rompers", label: "Baby + little ones", category: "baby" },
  { image: "/embroidery/wifey.png", name: "Wifey Est. 2026", label: "Bridal + celebrations", category: "bridal" },
  { image: "/embroidery/weekender.png", name: "Personalized Weekender", label: "Bags + accessories", category: "bags" },
  { image: "/embroidery/mri-quarterzip.png", name: "MRI Technologist Quarter-Zip", label: "Business + professional", category: "business" },
  { image: "/embroidery/phillies-family.png", name: "Phillies Family Crewnecks", label: "Custom favorites", category: "cozy-apparel" },
];

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
          <EmbroideryGallery designs={designs} />
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
