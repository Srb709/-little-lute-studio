import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );
}

const pages = [
  ["/", "Little Lute Studio", /Little Lute/],
  ["/embroidery", "Embroidery | Little Lute Studio", /Little Lute Embroidery/],
  ["/spray-tanning", "Spray Tanning | Little Lute Studio", /On The Glow Tan/],
  ["/about", "About Megan | Little Lute Studio", /Homebody at heart/],
  ["/contact", "Contact | Little Lute Studio", /Start with a text/],
  ["/privacy", "Privacy Policy | Little Lute Studio", /Information collected/],
  ["/order-policy", "Embroidery Order Policy | Little Lute Studio", /Deadlines and Rush Orders/],
];

test("server-renders every public page with its final content", async (t) => {
  for (const [pathname, title, expectedContent] of pages) {
    await t.test(pathname, async () => {
      const response = await render(pathname);
      assert.equal(response.status, 200);
      assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

      const html = await response.text();
      assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`, "i"));
      assert.match(html, expectedContent);
      assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
      assert.doesNotMatch(html, /private Design Manager|Supabase/i);
    });
  }
});

test("home page exposes the primary navigation and contact routes", async () => {
  const response = await render("/");
  const html = await response.text();

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
  const response = await render("/spray-tanning");
  const html = await response.text();

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
