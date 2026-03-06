---
name: sake-api
description: Search sake grades, rice varieties, breweries, and sake terminology. Use when working with sake data, Japanese brewing, tokutei meishoshu classifications, or beverage applications.
license: MIT
metadata:
  author: fyipedia
  version: "0.1.0"
  homepage: "https://nihonshufyi.com"
---

# NihonshuFYI -- Sake API for AI Agents

TypeScript API client for nihonshufyi.com. Search 80 sake expressions, 10 rice varieties, 50 breweries, 9 sake grades, and sake terminology. Zero dependencies.

**Install**: `npm install nihonshufyi` -- **Web**: [nihonshufyi.com](https://nihonshufyi.com/) -- **API**: [REST API](https://nihonshufyi.com/developers/) -- **PyPI**: `pip install nihonshufyi`

## When to Use

- User asks about sake grades, junmai vs ginjo, or polishing ratios
- User needs sake rice variety information or brewery profiles
- User wants to compare sake expressions or explore regional styles
- User is building a sake recommendation or pairing tool
- User needs sake terminology definitions

## Tools

### `search(query) -> SearchResult`

Search across sake, breweries, rice varieties, and glossary terms.

```typescript
import { NihonshuFYI } from "nihonshufyi";
const api = new NihonshuFYI();
const results = await api.search("junmai daiginjo");
```

### `glossaryTerm(slug) -> GlossaryTerm`

Look up sake terminology by slug.

```typescript
const term = await api.glossaryTerm("koji");
console.log(term.definition);
```

### `sake(slug) -> SakeDetail`

Get sake detail with grade, polishing ratio, and tasting notes.

```typescript
const sake = await api.sake("dassai-23");
console.log(sake.polishing_ratio); // 23
console.log(sake.grade);           // "Junmai Daiginjo"
```

### `brewery(slug) -> BreweryDetail`

Get brewery detail with location and history.

```typescript
const brewery = await api.brewery("asahi-shuzo");
```

### `compare(slugA, slugB) -> CompareResult`

Compare two sake expressions side by side.

```typescript
const comparison = await api.compare("dassai-23", "kubota-manju");
```

## REST API (No Auth Required)

```bash
curl https://nihonshufyi.com/api/search/?q=junmai+daiginjo
curl https://nihonshufyi.com/api/sake/dassai-23/
curl https://nihonshufyi.com/api/brewery/asahi-shuzo/
curl https://nihonshufyi.com/api/term/koji/
curl https://nihonshufyi.com/api/random/
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/sake/{slug}/` | Sake detail with grade, polishing ratio, tasting notes |
| GET | `/api/brewery/{slug}/` | Brewery detail with history, location |
| GET | `/api/rice/{slug}/` | Rice variety detail with polishing characteristics |
| GET | `/api/term/{slug}/` | Sake glossary term definition |
| GET | `/api/search/?q={query}` | Search sake, breweries, rice varieties |
| GET | `/api/compare/?a={slug}&b={slug}` | Compare two sake expressions |
| GET | `/api/random/` | Random sake |
| GET | `/api/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: [OpenAPI 3.1.0](https://nihonshufyi.com/api/openapi.json)

## Sake Grade System (Tokutei Meishoshu)

| Grade | Polishing Ratio | Alcohol Added | Characteristics |
|-------|----------------|---------------|-----------------|
| Junmai Daiginjo | <=50% | No | Ultra-premium, fragrant, elegant |
| Daiginjo | <=50% | Yes | Fragrant, complex, refined |
| Junmai Ginjo | <=60% | No | Fruity, aromatic, balanced |
| Ginjo | <=60% | Yes | Light, aromatic, clean |
| Tokubetsu Junmai | <=60% | No | Premium pure rice, rich |
| Tokubetsu Honjozo | <=60% | Yes | Premium, smooth, versatile |
| Junmai | No requirement | No | Full-bodied, rice-forward |
| Honjozo | <=70% | Yes | Light, clean, everyday |
| Futsushu | No requirement | Yes | Table sake, ~65% of production |

## Sake Rice Varieties (Sakamai)

| Variety | Region | Shinpaku | Known For |
|---------|--------|----------|-----------|
| Yamada Nishiki | Hyogo | Large, distinct | King of sake rice, versatile |
| Gohyakumangoku | Niigata | Small, hard | Clean, dry, light styles |
| Miyama Nishiki | Nagano | Medium | Aromatic, moderate body |
| Omachi | Okayama | Large | Rich, earthy, full-bodied |
| Hattan Nishiki | Hiroshima | Medium | Balanced, soft water styles |

## Demo

![NihonshuFYI demo](https://raw.githubusercontent.com/fyipedia/nihonshufyi-js/main/demo.gif)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BeerFYI](https://beerfyi.com), [BrewFYI](https://brewfyi.com), [WhiskeyFYI](https://whiskeyfyi.com), [TeaFYI](https://teafyi.com).
