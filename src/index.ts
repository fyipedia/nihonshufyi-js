/**
 * nihonshufyi -- TypeScript API client for NihonshuFYI.
 *
 * Search sake, breweries, rice varieties, and sake terminology
 * from nihonshufyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { NihonshuFYI } from "nihonshufyi";
 *
 * const api = new NihonshuFYI();
 * const results = await api.search("junmai daiginjo");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { NihonshuFYI } from "./client.js";

export type {
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
