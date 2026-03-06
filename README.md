# nihonshufyi

[![npm](https://img.shields.io/npm/v/nihonshufyi)](https://www.npmjs.com/package/nihonshufyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/nihonshufyi)

TypeScript API client for [NihonshuFYI](https://nihonshufyi.com) -- the comprehensive sake reference with 80 sake expressions, 10 rice varieties, 50 breweries, 9 sake grades, and 101 expert guides covering the tokutei meishoshu classification, polishing ratios, koji cultivation, and parallel multiple fermentation. Zero dependencies, uses native `fetch`.

> **Explore sake at [nihonshufyi.com](https://nihonshufyi.com)** -- [Sake](https://nihonshufyi.com/sake/) | [Rice](https://nihonshufyi.com/rice/) | [Breweries](https://nihonshufyi.com/breweries/) | [API Docs](https://nihonshufyi.com/developers/)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
  - [Sake Grade Classification](#sake-grade-classification)
  - [Rice Polishing (Seimaibuai)](#rice-polishing-seimaibuai)
  - [Sake Rice Varieties](#sake-rice-varieties)
  - [Key Sake Concepts](#key-sake-concepts)
- [API Reference](#api-reference)
- [TypeScript Types](#typescript-types)
- [Learn More About Sake](#learn-more-about-sake)
- [Also Available for Python](#also-available-for-python)
- [Beverage FYI Family](#beverage-fyi-family)
- [License](#license)

## Install

```bash
npm install nihonshufyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { NihonshuFYI } from "nihonshufyi";

const api = new NihonshuFYI();

// Search sake, breweries, rice, glossary
const results = await api.search("junmai daiginjo");

// Get sake detail with polishing ratio
const dassai = await api.sake("dassai-23");
console.log(dassai.polishing_ratio); // 23
console.log(dassai.grade);           // "Junmai Daiginjo"

// Get rice variety detail
const yamada = await api.rice("yamada-nishiki");
console.log(yamada.characteristics);

// Compare two sake expressions
const comparison = await api.compare("dassai-23", "kubota-manju");
```

## What You Can Do

### Sake Grade Classification

The tokutei meishoshu (special designation sake) system classifies premium sake by polishing ratio and whether distilled alcohol is added:

| Grade | Polishing | Alcohol Added | Characteristics |
|-------|----------|---------------|-----------------|
| Junmai Daiginjo | 50% or less | No | Pinnacle, highly aromatic, elegant |
| Daiginjo | 50% or less | Yes (small) | Fragrant, refined, light |
| Junmai Ginjo | 60% or less | No | Fruity, floral, balanced |
| Ginjo | 60% or less | Yes (small) | Aromatic, crisp, delicate |
| Tokubetsu Junmai | 60% or less | No | Rice character, umami |
| Junmai | No requirement | No | Wide range of styles |
| Honjozo | 70% or less | Yes | Light, smooth, approachable |

The "junmai" prefix means pure rice -- no distilled alcohol added.

Learn more: [Sake Grades](https://nihonshufyi.com/grade/) -- [Sake Encyclopedia](https://nihonshufyi.com/sake/)

### Rice Polishing (Seimaibuai)

Polishing ratio is the percentage of rice grain remaining after milling. Outer layers contain proteins and fats that produce off-flavors:

| Polishing | Result |
|-----------|--------|
| 70% | Honjozo level -- balanced |
| 60% | Ginjo level -- fruity esters |
| 50% | Daiginjo level -- highly aromatic |
| 23% | Extreme polishing (Dassai 23) |

### Sake Rice Varieties

10 sake-specific rice varieties (sakamai) with larger grains, prominent starch core (shinpaku), and lower protein:

| Variety | Origin | Character |
|---------|--------|-----------|
| Yamada Nishiki | Hyogo | "King of sake rice," elegant |
| Gohyakumangoku | Niigata | Clean, crisp, tanrei karakuchi |
| Miyama Nishiki | Nagano | Light, dry |
| Omachi | Okayama | Rich, deep, umami |

### Key Sake Concepts

| Concept | Description |
|---------|-------------|
| Nihonshu-do (SMV) | Positive = dry, negative = sweet |
| Nama | Unpasteurized, fresh, must refrigerate |
| Genshu | Undiluted, 17-20% ABV |
| Koshu | Aged sake, amber, nutty |
| Nigori | Cloudy, coarsely filtered, creamy |
| Toji | Master brewer |

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Search sake, breweries, rice, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `sake(slug)` | Sake detail with grade, tasting notes |
| `brewery(slug)` | Brewery detail with location, history |
| `grade(slug)` | Sake grade detail |
| `rice(slug)` | Rice variety detail |
| `yeast(slug)` | Yeast strain detail |
| `compare(slugA, slugB)` | Compare two sake expressions |
| `random()` | Random sake expression |

## TypeScript Types

```typescript
import type { SearchResult, GlossaryTerm, SakeDetail, BreweryDetail, GradeDetail, RiceDetail, YeastDetail, CompareResult, RandomResult } from "nihonshufyi";
```

## Learn More About Sake

- **Reference**: [Sake](https://nihonshufyi.com/sake/) | [Rice](https://nihonshufyi.com/rice/) | [Breweries](https://nihonshufyi.com/breweries/)
- **Guides**: [Sake Guides](https://nihonshufyi.com/guides/) | [Glossary](https://nihonshufyi.com/glossary/)
- **API**: [Developer Docs](https://nihonshufyi.com/developers/) | [OpenAPI Spec](https://nihonshufyi.com/api/openapi.json)
- **Python**: [PyPI Package](https://pypi.org/project/nihonshufyi/)

## Also Available for Python

```bash
pip install nihonshufyi
```

See the [Python package on PyPI](https://pypi.org/project/nihonshufyi/).

## Beverage FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- world beverages from cocktails to sake.

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| cocktailfyi | [PyPI](https://pypi.org/project/cocktailfyi/) | [npm](https://www.npmjs.com/package/cocktailfyi) | 636 cocktails, ABV, calories -- [cocktailfyi.com](https://cocktailfyi.com/) |
| vinofyi | [PyPI](https://pypi.org/project/vinofyi/) | [npm](https://www.npmjs.com/package/vinofyi) | Wines, grapes, regions, food pairings -- [vinofyi.com](https://vinofyi.com/) |
| beerfyi | [PyPI](https://pypi.org/project/beerfyi/) | [npm](https://www.npmjs.com/package/beerfyi) | 112 beer styles, hops, malts -- [beerfyi.com](https://beerfyi.com/) |
| brewfyi | [PyPI](https://pypi.org/project/brewfyi/) | [npm](https://www.npmjs.com/package/brewfyi) | 72 coffee varieties, brew methods -- [brewfyi.com](https://brewfyi.com/) |
| whiskeyfyi | [PyPI](https://pypi.org/project/whiskeyfyi/) | [npm](https://www.npmjs.com/package/whiskeyfyi) | 80 whiskey expressions, distilleries -- [whiskeyfyi.com](https://whiskeyfyi.com/) |
| teafyi | [PyPI](https://pypi.org/project/teafyi/) | [npm](https://www.npmjs.com/package/teafyi) | 60 tea varieties, teaware -- [teafyi.com](https://teafyi.com/) |
| **nihonshufyi** | [PyPI](https://pypi.org/project/nihonshufyi/) | [npm](https://www.npmjs.com/package/nihonshufyi) | **80 sake, rice varieties -- [nihonshufyi.com](https://nihonshufyi.com/)** |

## License

MIT
