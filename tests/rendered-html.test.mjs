import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the approved Nelva Homepage positioning", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /International market development for technology manufacturers\./);
  assert.match(html, /International market development/);
  assert.match(html, /Based in Espoo, Finland/);
  assert.match(html, /Manufacturer Representation/);
  assert.match(html, /Technical &amp; Commercial Coordination/);
  assert.match(html, /Payment Technology/);
  assert.match(html, /Payment Technology represents Nelva/);
  assert.match(html, /Business ID: 3574517-6/);
});

test("renders the approved structure and accuracy boundaries", async () => {
  const response = await render();
  const html = await response.text();

  for (const href of ["/company", "/capabilities", "/industries", "/contact"]) {
    assert.match(html, new RegExp(`href="${href}"`));
  }

  for (const stage of ["Assess", "Identify", "Qualify", "Develop", "Coordinate", "Advance"]) {
    assert.match(html, new RegExp(`>${stage}<`));
  }

  assert.match(html, /does not guarantee sales, contracts, partner suitability/);
  assert.doesNotMatch(html, /contact@nelvaglobal\.com/i);
  assert.doesNotMatch(html, /engineering company|engineering solutions|engineering partner/i);
  assert.doesNotMatch(html, /our team|headquarters|world-class|guaranteed results/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("renders the capabilities page with current services and explicit boundaries", async () => {
  const response = await render("/capabilities");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Connected capabilities for international technology market development/);
  assert.match(html, /Manufacturer Representation/);
  assert.match(html, /Current capability/);
  assert.match(html, /Discuss a representation requirement/);
  assert.match(html, /Technical &amp; Commercial Coordination/);
  assert.match(html, /Distributors &amp;/);
  assert.match(html, /selected stages or a broader agreed scope/);
  assert.match(html, /does not automatically imply exclusivity/);
  assert.match(html, /does not perform complete technical integrations/);
  assert.match(html, /does not guarantee sales, contracts, or successful market entry/);
  assert.doesNotMatch(html, /mailto:|contact@nelvaglobal\.com/i);
});

test("renders the industries page around structured market development", async () => {
  const response = await render("/industries");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /One market-development framework/);
  assert.match(html, /structured market intelligence/);
  assert.match(html, /Payment Technology is Nelva/);
  assert.match(html, /Android payment terminals/);
  assert.match(html, /Retail &amp;/);
  assert.match(html, /Selected adjacent opportunities/);
  assert.match(html, /not in supplying databases or generic leads/);
  assert.match(html, /not presented as equal specialisation/);
  assert.match(html, /does not claim to manufacture, install, integrate, certify, or maintain/);
  assert.doesNotMatch(html, /lead generation service|sales outsourcing company|engineering contractor/i);
  assert.doesNotMatch(html, /mailto:|contact@nelvaglobal\.com/i);
});

test("renders the company page with a clear corporate and professional foundation", async () => {
  const response = await render("/company");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /specialized international market development company/i);
  assert.match(html, /A new business built on more than ten years of professional experience/);
  assert.match(html, /The business itself has not operated for more than ten years/);
  assert.match(html, /Maged Mukred/);
  assert.match(html, /Founder &amp; International Market Development Lead/);
  assert.match(html, /Relevance before volume/);
  assert.match(html, /does not present itself as a manufacturer/);
  assert.doesNotMatch(html, /our team|headquarters|managing director/i);
});

test("renders the contact page without invented or unverified contact channels", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Start with the market objective/);
  assert.match(html, /Confidential information is not required/);
  assert.match(html, /Business ID: 3574517-6/);
  assert.match(html, /verified business channel will be published here/i);
  assert.match(html, /does not create a representation, agency, exclusivity/);
  assert.doesNotMatch(html, /mailto:|contact@nelvaglobal\.com|<form/i);
});
