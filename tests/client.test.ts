import { describe, expect, it } from "vitest";
import { NihonshuFYI } from "../src/index.js";

describe("NihonshuFYI", () => {
  it("can be instantiated with default base URL", () => {
    const api = new NihonshuFYI();
    expect(api).toBeInstanceOf(NihonshuFYI);
  });

  it("can be instantiated with custom base URL", () => {
    const api = new NihonshuFYI("http://localhost:8035");
    expect(api).toBeInstanceOf(NihonshuFYI);
  });

  it("has search method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.search).toBe("function");
  });

  it("has glossaryTerm method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.glossaryTerm).toBe("function");
  });

  it("has sake method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.sake).toBe("function");
  });

  it("has brewery method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.brewery).toBe("function");
  });

  it("has grade method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.grade).toBe("function");
  });

  it("has rice method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.rice).toBe("function");
  });

  it("has yeast method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.yeast).toBe("function");
  });

  it("has compare method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.compare).toBe("function");
  });

  it("has random method", () => {
    const api = new NihonshuFYI();
    expect(typeof api.random).toBe("function");
  });
});
