/**
 * NihonshuFYI API client -- TypeScript wrapper for nihonshufyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
  BreweryDetail,
  CompareResult,
  GlossaryTerm,
  GradeDetail,
  RandomResult,
  RiceDetail,
  SakeDetail,
  SearchResult,
  YeastDetail,
} from "./types.js";

export class NihonshuFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://nihonshufyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search sake, breweries, rice varieties, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get sake detail by slug. */
  async sake(slug: string): Promise<SakeDetail> {
    return this.get<SakeDetail>(`/api/sake/${slug}/`);
  }

  /** Get brewery detail by slug. */
  async brewery(slug: string): Promise<BreweryDetail> {
    return this.get<BreweryDetail>(`/api/brewery/${slug}/`);
  }

  /** Get sake grade detail by slug. */
  async grade(slug: string): Promise<GradeDetail> {
    return this.get<GradeDetail>(`/api/grade/${slug}/`);
  }

  /** Get sake rice variety detail by slug. */
  async rice(slug: string): Promise<RiceDetail> {
    return this.get<RiceDetail>(`/api/rice/${slug}/`);
  }

  /** Get yeast strain detail by slug. */
  async yeast(slug: string): Promise<YeastDetail> {
    return this.get<YeastDetail>(`/api/yeast/${slug}/`);
  }

  /** Compare two sake expressions. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random sake expression. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }
}
