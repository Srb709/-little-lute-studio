import { Footer, Header } from "../site-components";

export const metadata = { title: "About Megan" };

export default function About() {
  return (
    <>
      <Header current="megan" />
      <main>
        <section className="about-layout">
          <div><p className="section-label">The person behind the studio</p><h1>Megan</h1></div>
          <div className="about-copy">
            <p className="lead">Hi, I’m Megan—the wife, mom of three, and creative heart behind Little Lute Studio.</p>
            <p>Little Lute Studio is home to my two businesses: Little Lute Embroidery and On The Glow Tan. Whether I’m creating a personalized piece or helping someone feel confident with a spray tan, I put genuine care into every order and appointment.</p>
            <p>I proudly serve Philadelphia and the surrounding suburbs, and I love being part of the moments that matter—weddings, celebrations, thoughtful gifts, and everything in between.</p>
            <p>My goal is to make your experience personal, easy, and special from beginning to end.</p>
            <a className="primary-link" href="/contact">say hello ↗</a>
          </div>
        </section>
        <section className="personal-notes">
          <article className="personal-note"><span>01</span><h2>Homebody at heart</h2><p>I built both businesses around personal experiences that feel comfortable, unrushed, and close to home.</p></article>
          <article className="personal-note"><span>02</span><h2>Creating personally</h2><p>I love turning your ideas into meaningful pieces you’ll be excited to wear, gift, and keep.</p></article>
          <article className="personal-note"><span>03</span><h2>Confidence, delivered</h2><p>I bring the glow to you, making the entire experience private, easy, and natural.</p></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
