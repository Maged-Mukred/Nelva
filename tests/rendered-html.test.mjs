import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Nelva homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Nelva \| International Technology Market Development<\/title>/i,
  );
  assert.match(
    html,
    /International market development for technology manufacturers\./,
  );
  assert.match(html, /International Market &amp; Sales Development/);
  assert.match(html, /Technology Sourcing &amp; Commercial Coordination/);
  assert.match(html, /Payment Technology Advisory &amp; Integration Support/);
  assert.match(
    html,
    /Nelva is built on more than ten years of experience in international technology markets\./,
  );
  assert.doesNotMatch(
    html,
    /our team|headquarters|turnkey|industry-leading|world-class/i,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders accessible navigation and focused commercial scope", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /href="#main">Skip to content/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-controls="mobile-menu"/);
  assert.match(
    html,
    /Engagements may cover selected stages or a broader programme/,
  );
  assert.match(
    html,
    /Support device selection, initial suitability assessment, requirements coordination/,
  );
  assert.match(html, /Experience across the technology value chain\./);
  assert.match(html, /Broader Technology Markets/);
  assert.doesNotMatch(html, /Security &amp; Access-Control Technology/);
});
