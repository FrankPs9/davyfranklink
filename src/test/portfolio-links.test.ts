import { describe, expect, it } from "vitest";
import { portfolioLinks } from "../lib/portfolio-links";

describe("Portfolio destinations", () => {
  it("opens the requested Behance portfolio", () => {
    expect(portfolioLinks.behance).toBe("https://www.behance.net/frankvergara4");
  });
  it("opens the requested Instagram profile", () => {
    expect(portfolioLinks.instagram).toBe("https://www.instagram.com/soydavyd.frank_/");
  });
  it("opens the requested WhatsApp contact", () => {
    expect(portfolioLinks.whatsapp).toBe("https://api.whatsapp.com/send/?phone=51946308432&text&type=phone_number&app_absent=0");
  });
});