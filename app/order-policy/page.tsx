import { Footer, Header } from "../site-components";

export const metadata = { title: "Embroidery Order Policy" };

const sections = [
  ["Payment", "Payment is due upfront unless otherwise agreed upon. Orders will not enter production until payment is received."],
  ["Turnaround", "Standard turnaround time is approximately 1–2 weeks unless otherwise discussed. Turnaround begins once payment, all order details, required items, and final written approval have been received. Delays may change the completion date."],
  ["Deadlines and Rush Orders", "Any firm event or needed-by date must be disclosed before payment. Rush orders are subject to availability and may include an additional fee. A deadline is not guaranteed unless confirmed by Little Lute Embroidery in writing."],
  ["Order Details", "Please carefully confirm item style, size, color, thread color, wording and spelling, placement, quantity, and design before production."],
  ["Samples, Colors, and Materials", "Digital mockups are visual guides only. Colors may appear differently due to screens, lighting, fabric, and dye lots. Approval of a stitched sample applies only to the exact item style, material, color, placement, and thread colors shown. Additional samples may require a fee and extended turnaround time."],
  ["Natural Production Variations", "Because each item is embroidered individually, slight differences in placement, sizing, and stitch appearance may occur—especially on socks, hats, stretchy fabrics, seams, and uniquely shaped items. Minor variations are part of the custom process and are not defects."],
  ["Approval", "Any mockup or sample provided is for approval before production. Once approved, Little Lute Embroidery will proceed based on the agreed order details."],
  ["Custom Orders", "Because embroidered items are made specifically for you, all custom orders are final sale and non-refundable once materials have been purchased or production has begun."],
  ["Changes", "Changes requested after approval or once production has started may not be possible and may result in an additional charge."],
  ["Cancellations", "Orders canceled before materials are purchased may be eligible for a partial refund, less digitizing, setup, design, or administrative costs already incurred. Once materials have been purchased or production has begun, the order is non-refundable."],
  ["Client-Provided Items", "While every precaution is taken, embroidery involves machinery and there is always a small risk of damage. Little Lute Embroidery is not responsible for replacing client-provided items in the rare event of machine-related damage."],
  ["Digitizing and Artwork", "Digitizing and setup fees are non-refundable. Embroidery files remain the property of Little Lute Embroidery or the original digitizer unless ownership is purchased or otherwise agreed in writing. Clients are responsible for permission to use submitted logos, artwork, or trademarks."],
  ["Order Issues", "Please inspect your order upon receipt and report concerns within five calendar days, before items are worn or washed. If an item differs from the approved details due to an error by Little Lute Embroidery, it will be repaired, replaced, or refunded as appropriate. Client-approved errors are not eligible for a refund or remake."],
  ["Written Approval", "Approvals through text, email, direct message, or invoice confirmation are final. For group or bulk orders, one designated contact must provide all approvals and requested changes."],
  ["Photography", "Little Lute Embroidery may photograph completed products for portfolio, website, or social media use. Clients may request before production that their order not be photographed or shared."],
] as const;

export default function OrderPolicy() {
  return <><Header /><main className="legal"><p className="section-label">Little Lute Embroidery</p><h1>Order Policy</h1><p>Thank you so much for your order! Please review the following before production begins.</p>{sections.map(([title, copy]) => <section key={title}><h2>{title}</h2><p>{copy}</p></section>)}<h2>Agreement</h2><p>By submitting payment and approving your order, you acknowledge and agree to the above policies.</p><p>Questions? Text <a className="text-link" href="sms:+12158803494">215-880-3494</a>, email <a className="text-link" href="mailto:contact.ontheglowtan@gmail.com">contact.ontheglowtan@gmail.com</a>, or message <a className="text-link" href="https://www.instagram.com/littlelutestudio_/">@littlelutestudio_</a>.</p></main><Footer /></>;
}
