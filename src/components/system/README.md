System components and utilities
===============================

This folder provides reusable primitives that mirror the editorial/Cargo look
established in the reference pages (Portfolio and Project Detail).

Utilities (CSS)
- Tokens: radii, spacing, rule width/color, band padding (`src/index.css`).
- Type: `.page-title`, `.heading`, `.section-title`, `.lede`, `.body`, `.legend`, `.note`, `.caption`.
- Layout: `.stack`, `.stack-divided`, `.band` (+ `band-rule-top/bottom`), `.ledger`, `.no-scrollbar`.
- Media: `.plate`, `.plate--grey`, `.cargo-plate` (diagonal), use Tailwind `aspect-*` for ratios.
- Meta: `.mono`, `.caps`, `.muted`.

Components (TSX)
- `SectionBand`: rule-separated section with optional title/note.
- `EditorialHeading`: semantic headings styled to the editorial scale.
- `MetaList`: stacked meta list using mono/caps labels.
- `Plate`: bordered/grey/cargo media surface with aspect helpers and optional caption.
- `GalleryStrip`: horizontal snap gallery using `Plate` tiles.
- `Ledger`: main + aside grid shell.

Examples
```tsx
import { SectionBand, EditorialHeading, MetaList, Plate, GalleryStrip, Ledger } from './components/system';

<EditorialHeading as="h1" variant="page">About</EditorialHeading>
<SectionBand ruleTop>
  <EditorialHeading as="h2" variant="section">Overview</EditorialHeading>
  <p className="body measure">…</p>
</SectionBand>

<Plate variant="border" aspect="16x9" caption="Still from …" />

<GalleryStrip items={[{ id: 1, aspect: '3x2', caption: 'Caption' }]} />

<Ledger>
  <Ledger.Main>…</Ledger.Main>
  <Ledger.Aside>…</Ledger.Aside>
</Ledger>
```

