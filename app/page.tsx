import { Footer, Header } from "./site-components";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Little Lute Studio" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <p className="eyebrow home-intro">Embroidery + mobile spray tanning<br />by Megan in Philadelphia.</p>
          <h1 className="home-title" aria-label="Little Lute Studio">
            <span>Little Lute</span>
            <span>Studio</span>
          </h1>
          <Image className="hero-stitch-photo" src="/embroidery/brand-crewneck.png" alt="Little Lute Embroidery crewneck" width={1200} height={1200} priority />
          <Image className="hero-glow-photo" src="/spray-tan/bride-outdoors.png" alt="On The Glow Tan bridal client outdoors" width={900} height={1200} priority />
          <a className="choose-link" href="#choose">choose your side <span>↓</span></a>
        </section>

        <section className="split-choice" id="choose" aria-label="Choose a Little Lute Studio service">
          <a className="choice choice-stitch" href="/embroidery">
            <span className="choice-number">01</span>
            <span className="choice-title">Stitch</span>
            <span className="choice-arrow">↗</span>
            <span className="choice-copy">Personalized pieces for gifts, celebrations, businesses, and everyday favorites.</span>
          </a>
          <a className="choice choice-glow" href="/spray-tanning">
            <span className="choice-number">02</span>
            <span className="choice-title">Glow</span>
            <span className="choice-arrow">↗</span>
            <span className="choice-copy">A natural, customized spray tan brought to the comfort of your home.</span>
          </a>
        </section>

        <section className="home-about content-grid">
          <p className="section-label">The heart behind the studio</p>
          <div>
            <h2>Hi, I’m Megan.</h2>
            <p className="large-copy">I’m a wife, mom of three, and the creative heart behind Little Lute Studio.</p>
          </div>
          <div className="body-copy">
            <p>Whether I’m creating a personalized piece or helping someone feel confident with a spray tan, I put genuine care into every order and appointment.</p>
            <a className="text-link" href="/about">more about me ↗</a>
          </div>
        </section>

        <section className="featured-review">
          <p className="section-label">Kind words</p>
          <blockquote>“She makes the spray tan experience so easy and convenient and gives me the most flawless, natural-looking tan every time.”</blockquote>
          <p className="review-name">Marisa Harding · 5 stars</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
