import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const outputDirectory = new URL("../.next/server/app/", import.meta.url);

const pages = [
  ["index.html", "Little Lute Studio", /Little Lute/],
  ["embroidery.html", "Embroidery | Little Lute Studio", /Little Lute Embroidery/],
  ["spray-tanning.html", "Spray Tanning | Little Lute Studio", /On The Glow Tan/],
  ["about.html", "About Megan | Little Lute Studio", /Homebody at heart/],
  ["contact.html", "Contact | Little Lute Studio", /Start with a text/],
  ["privacy.html", "Privacy Policy | Little Lute Studio", /Information collected/],
  ["order-policy.html", "Embroidery Order Policy | Little Lute Studio", /Deadlines and Rush Orders/],
];

async function renderedPage(filename) {
  return readFile(new URL(filename, outputDirectory), "utf8");
}

test("builds every public page with its final content", async (t) => {
  for (const [filename, title, expectedContent] of pages) {
    await t.test(filename, async () => {
      const html = await renderedPage(filename);
      assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`, "i"));
      assert.match(html, expectedContent);
      assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
      assert.doesNotMatch(html, /private Design Manager|Supabase/i);
    });
  }
});

test("home page exposes the primary navigation and contact routes", async () => {
  const html = await renderedPage("index.html");

  for (const href of [
    "/embroidery",
    "/spray-tanning",
    "/about",
    "/contact",
    "/privacy",
    "/order-policy",
    "sms:+12158803494",
    "mailto:contact.ontheglowtan@gmail.com",
  ]) {
    assert.match(html, new RegExp(`href=["']${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i"));
  }
});

test("spray-tan page contains every approved Calendly booking link", async () => {
  const html = await renderedPage("spray-tanning.html");

  for (const slug of [
    "wedding-consultation",
    "group-spray-tan-party",
    "deluxe-organic-rapid-spray-tan",
    "organic-spray-tan",
    "30min",
  ]) {
    assert.match(html, new RegExp(`https://calendly\\.com/contact-ontheglowtan/${slug}`));
  }
});

test("embroidery gallery exposes accessible category filters and enlargement controls", async () => {
  const html = await renderedPage("embroidery.html");

  for (const category of ["All", "Cozy apparel", "Baby", "Bridal", "Bags", "Business"]) {
    assert.match(html, new RegExp(`>${category}<`, "i"));
  }

  for (const design of [
    "Custom Pet Portrait",
    "Personalized Baby Rompers",
    "Wifey Est. 2026",
    "Personalized Weekender",
    "MRI Technologist Quarter-Zip",
    "Phillies Family Crewnecks",
  ]) {
    assert.match(html, new RegExp(`aria-label=["']Enlarge ${design.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"));
  }
});
