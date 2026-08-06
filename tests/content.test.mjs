import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePaths = {
  home: "app/page.tsx",
  company: "app/company/page.tsx",
  capabilities: "app/capabilities/page.tsx",
  industries: "app/industries/page.tsx",
  contact: "app/contact/page.tsx",
};

async function page(name) {
  return readFile(new URL(`../${pagePaths[name]}`, import.meta.url), "utf8");
}

test("preserves the approved Homepage positioning and routes", async () => {
  const source = await page("home");

  assert.match(
    source,
    /International market development for technology manufacturers/
  );
  assert.match(source, /Based in Espoo, Finland/);
  assert.match(source, /Manufacturer Representation/);
  assert.match(source, /Technical & Commercial Coordination/);
  assert.match(
    source,
    /Payment Technology is Nelva’s strongest specialist area/
  );
  assert.match(source, /Business ID: 3574517-6/);

  for (const route of [
    "/company",
    "/capabilities",
    "/industries",
    "/contact",
  ]) {
    assert.match(source, new RegExp(`href=["']${route}["']`));
  }

  for (const stage of [
    "Assess",
    "Identify",
    "Qualify",
    "Develop",
    "Coordinate",
    "Advance",
  ]) {
    assert.match(source, new RegExp(`["]${stage}["]`));
  }
});

test("preserves the approved capability boundaries", async () => {
  const source = await page("capabilities");

  assert.match(
    source,
    /Capabilities for better market and channel decisions/
  );
  assert.match(source, /Manufacturer Representation/);
  assert.match(source, /Current capability/);
  assert.match(
    source,
    /does not automatically include\s+exclusivity/
  );
  assert.match(
    source,
    /does not perform complete systems integration/
  );
  assert.match(
    source,
    /does not guarantee sales, contracts,\s+partner suitability, or successful market entry/
  );
});

test("preserves the approved Industries positioning", async () => {
  const source = await page("industries");

  assert.match(
    source,
    /The sector changes\. The commercial discipline remains\./
  );
  assert.match(
    source,
    /Professional databases,\s+public business information/
  );
  assert.match(
    source,
    /strongest specialist experience\s+in Payment Technology/
  );
  assert.match(source, /Android payment terminals/);
  assert.match(source, /Selected adjacent opportunities/);
  assert.match(
    source,
    /not\s+in supplying generic databases or contact lists/
  );
  assert.match(
    source,
    /does not claim to manufacture, install, engineer,\s+integrate, certify, test, or maintain/
  );
});

test("preserves the Company foundation and founder information", async () => {
  const source = await page("company");

  assert.match(
    source,
    /A specialist company for better market and channel decisions\./
  );
  assert.match(
    source,
    /A new business built on more than ten years of relevant\s+professional experience/
  );
  assert.match(
    source,
    /The business itself has not\s+operated for more than ten years/
  );
  assert.match(source, /Maged Mukred/);
  assert.match(
    source,
    /Founder &amp; International Market Development Lead/
  );
  assert.match(source, /Relevance before volume/);
});

test("preserves the Contact page without unverified channels", async () => {
  const source = await page("contact");

  assert.match(
    source,
    /Discuss a Market &amp; Channel Readiness Assessment/
  );
  assert.match(source, /Confidential information is not required/);
  assert.match(source, /Business ID: 3574517-6/);
  assert.match(source, /partnerships@nelvaglobal\.com/i);
  assert.doesNotMatch(
    source,
    /contact@nelvaglobal\.com|<form/i
  );
});

test("contains no unsupported public claims across website pages", async () => {
  const sources = await Promise.all(
    Object.keys(pagePaths).map(page)
  );
  const combined = sources.join("\n");

  assert.doesNotMatch(
    combined,
    /engineering company|engineering solutions|engineering partner/i
  );
  assert.doesNotMatch(
    combined,
    /our team|headquarters|managing director|guaranteed results/i
  );
});
