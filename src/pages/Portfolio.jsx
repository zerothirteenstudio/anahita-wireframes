import React, { useMemo, useState } from "react";
import Box from "../components/ui/Box.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Tag from "../components/ui/Tag.jsx";
import Note from "../components/ui/Note.jsx";

/**
 * Props:
 *  - showNotes (boolean)
 *  - goTo?: (pageName: string) => void   // optional nav helper passed from App
 */
const TYPES = ["All", "Film", "Visual Art", "Performance", "Workshops"];
const YEARS = ["All", "2025", "2024", "2023", "2022", "≤2021"];

export default function Portfolio({ showNotes, goTo }) {
  const [activeType, setActiveType] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [view, setView] = useState("grid"); // "grid" | "list"
  const [sort, setSort] = useState("newest");

  // --- demo data (max 12)
  const items = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        type: TYPES[((i % (TYPES.length - 1)) + 1)], // cycle types (skip "All")
        year: (2025 - (i % 5)).toString(),           // 2025..2021
        featured: i < 2,                              // first two featured
      })),
    []
  );

  // --- filtering
  const filtered = items.filter((it) => {
    const byType = activeType === "All" || it.type === activeType;
    const byYear =
      activeYear === "All" ||
      (activeYear === "≤2021"
        ? parseInt(it.year, 10) <= 2021
        : it.year === activeYear);
    return byType && byYear;
  });

  // --- sorting
  const sorted = useMemo(() => {
    const s = [...filtered];
    if (sort === "newest") s.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
    else if (sort === "oldest") s.sort((a, b) => parseInt(a.year, 10) - parseInt(b.year, 10));
    else s.sort((a, b) => a.title.localeCompare(b.title)); // A–Z
    return s;
  }, [filtered, sort]);

  // nav helper
  const openDetail = () => {
    if (typeof goTo === "function") goTo("Project Detail");
  };

  return (
    <div className="space-y-6">
      {/* Intro */}
      <Box title="Intro">
        <div className="space-y-2">
          <div className="ph-sm bg-neutral-100 rounded-2xl" />
          <div className="ph-sm bg-neutral-100 rounded-2xl w-2/3" />
          {showNotes && (
            <Note>1–2 sentence portfolio statement. Keep concise.</Note>
          )}
        </div>
      </Box>
      {/* Optional Featured Row */}
      <Box title="Featured Projects (Optional)">
        <div className="grid md:grid-cols-2 gap-4">
          {items.filter((i) => i.featured).map((it) => (
            <div key={it.id} className="space-y-2" role="button" tabIndex={0}
                 onClick={openDetail}
                 onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetail()}>
              <div className="ph-lg border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
                Featured visual
              </div>
              <div className="ph-xs bg-neutral-100 rounded-2xl" />
            </div>
          ))}
        </div>
        {showNotes && <Note>Use a CMS flag to pin up to 2 projects.</Note>}
      </Box>

      {/* Controls (Type / Year / View / Sort) */}
      <Box title="Filters & Controls">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                aria-pressed={activeType === t}
                className={`px-2 py-1 rounded-2xl border text-xs ${
                  activeType === t
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <label htmlFor="year" className="text-xs">Year:</label>
              <select
                id="year"
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
                className="border border-neutral-300 rounded px-2 py-1 text-xs bg-white"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1" role="group" aria-label="View toggle">
                <button
                  aria-pressed={view === "grid"}
                  onClick={() => setView("grid")}
                  className={`px-2 py-1 rounded-l-2xl border text-xs ${
                    view === "grid"
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "border-neutral-300 hover:bg-neutral-50"
                  }`}
                  title="Grid view"
                >
                  Grid
                </button>
                <button
                  aria-pressed={view === "list"}
                  onClick={() => setView("list")}
                  className={`px-2 py-1 rounded-r-2xl border text-xs ${
                    view === "list"
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "border-neutral-300 hover:bg-neutral-50"
                  }`}
                  title="List view"
                >
                  List
                </button>
              </div>

              <label htmlFor="sort" className="text-xs ml-3">Sort:</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-neutral-300 rounded px-2 py-1 text-xs bg-white"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A–Z</option>
              </select>
            </div>
          </div>

          {showNotes && (
            <Note>
              (optional filtering)Keep filters simple (Type, Year).
            </Note>
          )}
        </div>
      </Box>

      {/* Results */}
      <Box title="Projects">
        {sorted.length === 0 ? (
          <div className="text-xs text-neutral-500">No results. Try clearing filters.</div>
        ) : view === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sorted.map((it) => (
              <article key={it.id} className="space-y-2 cursor-pointer" role="button" tabIndex={0}
                       onClick={openDetail}
                       onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetail()}>
                <div className="ph-lg border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500"
                     aria-label={`${it.title} media`}>
                  Thumb (image/video)
                </div>
                <div className="ph-xs bg-neutral-100 rounded-2xl" /> {/* title line */}
                <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                  <Tag>{it.type}</Tag>
                  <Tag>{it.year}</Tag>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((it) => (
              <article key={it.id} className="flex gap-3 items-center cursor-pointer"
                       role="button" tabIndex={0}
                       onClick={openDetail}
                       onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetail()}>
                <div className="w-32 ph-md border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-[10px] text-neutral-500 shrink-0">
                  Media
                </div>
                <div className="flex-1 space-y-1">
                  <div className="ph-xs bg-neutral-100 rounded-2xl w-2/3" />
                  <div className="ph-xs bg-neutral-100 rounded-2xl w-1/2" />
                  <div className="flex items-center gap-2 text-[10px] text-neutral-600">
                    <Tag>{it.type}</Tag>
                    <Tag>{it.year}</Tag>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Box>

      {/* Closing CTA (optional, but recommended) */}
      <Box title="Work with Natascha">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Interested in collaborating?</SectionTitle>
            <Note>Bridge portfolio → services/contact. Friendly, accessible tone.</Note>
          </div>
          <div className="flex gap-2">
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Contact</button>
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Request Workshop</button>
          </div>
        </div>
      </Box>

      {/* Notes for CMS */}
      {showNotes && (
        <Box title="Notes — CMS Fields for Portfolio Cards">
          <Note>
            Fields: Title, Featured media (image/video), Year (opt), Type tags, 80–120 char teaser, Link to detail.
            Accessibility: descriptive alt text; captions for playable media.
          </Note>
        </Box>
      )}
    </div>
  );
}