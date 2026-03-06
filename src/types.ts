/**
 * NihonshuFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface SakeDetail {
  slug: string;
  name: string;
  grade?: string;
  brewery?: string;
  prefecture?: string;
  rice?: string;
  polishing_ratio?: number;
  abv?: number;
  smv?: number;
  description: string;
  tasting_notes?: string[];
  url: string;
}

export interface BreweryDetail {
  slug: string;
  name: string;
  prefecture?: string;
  description: string;
  founded?: number;
  url: string;
}

export interface GradeDetail {
  slug: string;
  name: string;
  description: string;
  polishing_ratio?: string;
  alcohol_added?: boolean;
  url: string;
}

export interface RiceDetail {
  slug: string;
  name: string;
  description: string;
  origin?: string;
  characteristics?: string[];
  url: string;
}

export interface YeastDetail {
  slug: string;
  name: string;
  description: string;
  characteristics?: string[];
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
