import Image from "next/image";
import Link from "next/link";

const nav = [
  ["home", "/"],
  ["embroidery", "/embroidery"],
  ["spray tan", "/spray-tanning"],
  ["megan", "/about"],
  ["contact", "/contact"],
] as const;

export function Header({ current = "" }: { current?: string }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Little Lute Studio home">
        <span className="brand-mark">LL</span>
        <span>Little Lute Studio</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <Link key={href} className={current === label ? "active" : ""} href={href}>{label}</Link>
        ))}
      </nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <Link key={href} className={current === label ? "active" : ""} href={href}>{label}</Link>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <span className="footer-mark">LL</span>
        <p>Personalized embroidery and mobile spray tanning by Megan.</p>
      </div>
      <div>
        <p className="footer-heading">Explore</p>
        <a href="/embroidery">Embroidery</a>
        <a href="/spray-tanning">Spray tanning</a>
        <a href="/about">About Megan</a>
      </div>
      <div>
        <p className="footer-heading">Contact</p>
        <a href="sms:+12158803494">Text Megan</a>
        <a href="mailto:contact.ontheglowtan@gmail.com">Email</a>
        <a href="https://www.instagram.com/littlelutestudio_/" target="_blank" rel="noreferrer">Instagram</a>
      </div>
      <div>
        <p className="footer-heading">Details</p>
        <a href="/privacy">Privacy</a>
        <a href="/order-policy">Embroidery policy</a>
        <p>Philadelphia + surrounding suburbs</p>
      </div>
      <p className="copyright">© 2026 Little Lute Studio · Created by my super hot husband</p>
    </footer>
  );
}

export function PageIntro({ word, title, children, image, imageAlt, current }: {
  word: string; title: string; children: React.ReactNode; image?: string; imageAlt?: string; current: string;
}) {
  return (
    <>
      <Header current={current} />
      <section className="page-hero">
        <h1 className="page-word">{word}</h1>
        <div className="page-intro-copy">
          <h2>{title}</h2>
          {children}
        </div>
        {image && <Image className={`page-hero-image${current === "spray tan" ? " glow-hero-image" : ""}`} src={image} alt={imageAlt || ""} width={1200} height={1200} priority />}
      </section>
    </>
  );
}
