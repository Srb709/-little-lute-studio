import { Footer, Header } from "../site-components";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <Header current="contact" />
      <main className="contact-hero">
        <p className="section-label">Let’s make something happen</p>
        <h1>Contact</h1>
        <div className="contact-options">
          <section className="contact-panel"><p className="section-label">Little Lute Embroidery</p><h2>Start with a text.</h2><p>Send me your idea, timing, and anything you already know about the piece. I’ll help with the rest.</p><a className="primary-link" href="sms:+12158803494?body=Hi%20Megan!%20I%E2%80%99d%20like%20to%20start%20an%20embroidery%20order.">text Megan · 215-880-3494 ↗</a><div className="contact-list"><a href="tel:+12158803494"><span>Call</span><span>215-880-3494 ↗</span></a><a href="mailto:contact.ontheglowtan@gmail.com"><span>Email</span><span>contact.ontheglowtan@gmail.com ↗</span></a><a href="https://www.instagram.com/littlelutestudio_/" target="_blank" rel="noreferrer"><span>Instagram</span><span>@littlelutestudio_ ↗</span></a></div></section>
          <section className="contact-panel"><p className="section-label">On The Glow Tan</p><h2>Book your glow.</h2><p>Choose the appointment that fits what you need. I’ll bring everything directly to you in Philadelphia and the surrounding suburbs.</p><a className="primary-link" href="/spray-tanning#book">view booking choices ↗</a><div className="facts"><span>Spray tan</span><span>$75</span><span>Groups 4+</span><span>$65 each</span><span>Payment</span><span>Cash + Venmo</span></div></section>
        </div>
      </main>
      <Footer />
    </>
  );
}
