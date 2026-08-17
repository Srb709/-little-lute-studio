import { Footer, PageIntro } from "../site-components";
import Image from "next/image";

const services = [
  ["Wedding Consultation", "Let’s talk through your date, desired color, trial tan, bridal party, and questions.", "https://calendly.com/contact-ontheglowtan/wedding-consultation"],
  ["Group Spray Tan Party", "Perfect for bridal parties, vacations, celebrations, or a fun night with friends.", "https://calendly.com/contact-ontheglowtan/group-spray-tan-party"],
  ["Deluxe Organic Rapid Spray Tan", "A customized organic rapid tan for when you want to rinse sooner.", "https://calendly.com/contact-ontheglowtan/deluxe-organic-rapid-spray-tan"],
  ["Organic Spray Tan", "A personalized organic spray tan designed for a smooth, natural-looking glow.", "https://calendly.com/contact-ontheglowtan/organic-spray-tan"],
  ["30-Minute Consultation", "Time to discuss goals, timing, skin tone, preparation, aftercare, or questions.", "https://calendly.com/contact-ontheglowtan/30min"],
] as const;

const reviews = [
  ["Marisa Harding", "Meg is the absolute best!!! She makes the spray tan experience so easy and convenient and gives me the most flawless, natural-looking tan every time. I wish I could give her more stars - HIGHLY recommend !!!"],
  ["Leah C", "Meg was great, it was my first spray tan and she made me feel so comfortable, tan was so natural and I got a lot of compliments on it!"],
  ["Tamara Kravitz", "Highly recommended! Meg was amazing! She came to my house and made me feel comfortable from the second we said hello. She is thorough and ensures that your hands and feet are blended well. My tan is beautiful and perfect for my vacation."],
] as const;

export const metadata = { title: "Spray Tanning" };

export default function SprayTanning() {
  return (
    <>
      <main>
        <PageIntro word="Glow" title="On The Glow Tan" image="/spray-tan/bride-outdoors.png" imageAlt="On The Glow Tan bridal client outdoors" current="spray tan">
          <p>I bring a private, comfortable spray-tan experience directly to you for a natural, beautiful result.</p>
          <div className="facts"><span>Serving</span><span>Philadelphia + suburbs</span><span>Payment</span><span>Cash + Venmo</span></div>
          <a className="primary-link" href="#book">book your glow ↓</a>
        </PageIntro>

        <section className="section-shell" id="book">
          <div className="section-topline"><div><p className="section-label">Simple pricing</p><h2 className="section-heading">Choose your glow.</h2></div></div>
          <div className="pricing-grid">
            <div className="price"><strong>$75</strong><span>Rapid or regular spray tan</span></div>
            <div className="price"><strong>$245</strong><span>Package of four tans</span></div>
            <div className="price"><strong>$65</strong><span>Per person · groups of 4+</span></div>
          </div>
        </section>

        <section className="services">
          <div><p className="section-label">Booking choices</p><h2 className="section-heading">I’ll meet you where you are.</h2></div>
          <div className="service-list">{services.map(([name, copy, link], i) => <article className="service" key={name}><span>0{i + 1}</span><div><h3>{name}</h3><p>{copy}</p></div><a href={link} target="_blank" rel="noreferrer">Book ↗</a></article>)}</div>
        </section>

        <section className="section-shell">
          <div className="section-topline"><div><p className="section-label">Real glow</p><h2 className="section-heading">For the moments that matter.</h2></div></div>
          <div className="photo-row"><Image src="/spray-tan/bride-indoor.png" alt="Bride with a natural spray tan" width={900} height={1200} /><Image src="/spray-tan/bridesmaids.png" alt="Bridesmaids after spray tans" width={900} height={1200} /><Image src="/spray-tan/bride-white-dress.png" alt="Bride outdoors after a spray tan" width={900} height={1200} /></div>
        </section>

        <section className="section-shell">
          <div className="section-topline"><div><p className="section-label">Kind words</p><h2 className="section-heading">Comfortable from hello.</h2></div></div>
          <div className="reviews-grid">{reviews.map(([name, quote]) => <article className="review-card" key={name}><span className="stars" aria-label="5 stars">★★★★★</span><blockquote>“{quote}”</blockquote><cite>{name}</cite></article>)}</div>
        </section>

        <section className="policy-strip"><div><p className="section-label">Ready when you are</p><h2>Book your glow.</h2></div><a className="primary-link" href="https://calendly.com/contact-ontheglowtan/organic-spray-tan" target="_blank" rel="noreferrer">choose a time ↗</a></section>
      </main>
      <Footer />
    </>
  );
}
