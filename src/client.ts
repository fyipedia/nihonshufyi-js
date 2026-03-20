/**
 * NihonshuFYI API client — TypeScript wrapper for nihonshufyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { NihonshuFYI } from "nihonshufyi";
 * const api = new NihonshuFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class NihonshuFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://nihonshufyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all breweries. */
  async listBreweries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/breweries/", params);
  }

  /** Get brewery by slug. */
  async getBrewery(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/breweries/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all glossary categories. */
  async listGlossaryCategories(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary-categories/", params);
  }

  /** Get glossary category by slug. */
  async getGlossaryCategory(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary-categories/${slug}/`);
  }

  /** List all grades. */
  async listGrades(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/grades/", params);
  }

  /** Get grade by slug. */
  async getGrade(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/grades/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all prefectures. */
  async listPrefectures(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/prefectures/", params);
  }

  /** Get prefecture by slug. */
  async getPrefecture(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/prefectures/${slug}/`);
  }

  /** List all rice. */
  async listRice(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/rice/", params);
  }

  /** Get rice by slug. */
  async getRice(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/rice/${slug}/`);
  }

  /** List all sake. */
  async listSake(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/sake/", params);
  }

  /** Get sake by slug. */
  async getSake(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/sake/${slug}/`);
  }

  /** List all serving. */
  async listServing(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/serving/", params);
  }

  /** Get serving by slug. */
  async getServing(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/serving/${slug}/`);
  }

  /** List all tools. */
  async listTools(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tools/", params);
  }

  /** Get tool by slug. */
  async getTool(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tools/${slug}/`);
  }

  /** List all yeast. */
  async listYeast(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/yeast/", params);
  }

  /** Get yeast by slug. */
  async getYeast(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/yeast/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
