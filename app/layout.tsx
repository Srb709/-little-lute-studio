import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Little Lute Studio",
    template: "%s | Little Lute Studio",
  },
  description:
    "Personalized embroidery and mobile spray tanning by Megan in Philadelphia and the surrounding suburbs.",
  icons: { icon: "/brand/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
