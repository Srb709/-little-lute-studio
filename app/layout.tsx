import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.littlelutestudio.com"),
  title: {
    default: "Little Lute Studio",
    template: "%s | Little Lute Studio",
  },
  description:
    "Personalized embroidery and mobile spray tanning by Megan in Philadelphia and the surrounding suburbs.",
  openGraph: {
    type: "website",
    siteName: "Little Lute Studio",
    title: "Little Lute Studio",
    description:
      "Personalized embroidery and mobile spray tanning by Megan in Philadelphia and the surrounding suburbs.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Lute Studio",
    description:
      "Personalized embroidery and mobile spray tanning by Megan in Philadelphia and the surrounding suburbs.",
  },
  icons: { icon: "/brand/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
