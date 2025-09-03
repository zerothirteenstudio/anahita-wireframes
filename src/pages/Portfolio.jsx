import React, { useMemo, useState, useRef } from "react";
import {
  Box,
  Tag,
  SectionTitle,
  Note,
  Placeholder,
  CTAGroup,
} from "../components/ui";

/* ---------------------------------------------
   Featured card — horizontal strip (editorial styling)
   - 16:9 media plate, square corners, thin rule
---------------------------------------------- */
function EditorialRow({ item, index, onOpen }) {
  return (
    <article className="grid md:grid-cols-[1fr,2fr] gap-6 items-start py-6">
      {/* Left: meta and blurb */}
      <div className="space-y-2">
        <button
          className="heading underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700"
          onClick={() => onOpen?.(item)}
        >
          {item.title}
        </button>
        <div className="ph-sm bg-neutral-100 w-5/6" />
        <div className="text-[11px] text-neutral-500 space-x-2">
          <Tag>{item.type}</Tag>
          <Tag>{item.year}</Tag>
        </div>
      </div>

      {/* Right: large plate with tiny code in the corner */}
      <div className="relative border border-brand-border bg-white">
        <div className="absolute -top-5 right-0 text-[11px] text-neutral-600">
          {String(index + 1).padStart(2, '0')}/{item.year}
        </div>
        <div className="aspect-[16/9]">
          <Placeholder className="w-full h-full" label="Cover / still" />
        </div>
      </div>
    </article>
  );
}

function EditorialSlide({ item, index, onOpen }) {
  return (
    <article
      className="snap-start shrink-0 w-[180%] sm:w-[170%] md:w-[160%] lg:w-[140%] xl:w-[120%] mr-6"
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(item)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen?.(item)}
      aria-label={`Open ${item.title}`}
    >
      <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start bg-white">
        {/* Left: meta and blurb */}
        <div className="space-y-2 p-3">
          <div className="text-[11px] text-neutral-500 space-x-2">
            <Tag>{item.type}</Tag>
            <Tag>{item.year}</Tag>
          </div>
          <button className="heading underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-700">
            {item.title}
          </button>
          <div className="ph-sm bg-neutral-100 w-5/6" />
        </div>
        {/* Right: media plate with small code */}
        <div className="relative">
          <div className="absolute -top-5 right-0 text-[11px] text-neutral-600">
            {String(index + 1).padStart(2, '0')}/{item.year}
          </div>
          <div className="border border-brand-border aspect-[16/9] max-h-[90vh] w-full">
            <Placeholder className="w-full h-full" label="Cover / still" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------
   Editorial list with hover preview hook
---------------------------------------------- */
function ProjectList({ items, onOpen, onHover }) {
  return (
    <ul className="divide-y divide-brand-border">
      {items.map((it) => (
        <li key={it.id} className="py-3">
          <button
            className="w-full text-left group grid grid-cols-[1fr,auto] gap-3 items-center"
            onClick={() => onOpen?.(it)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen?.(it)}
            onMouseEnter={() => onHover?.(it)}
            onMouseLeave={() => onHover?.(null)}
            onFocus={() => onHover?.(it)}
            onBlur={() => onHover?.(null)}
            aria-label={`Open ${it.title}`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] text-neutral-600 mb-1">
                <Tag>{it.type}</Tag>
                <Tag>{it.year}</Tag>
              </div>
              <div className="ph-xs bg-neutral-100 w-3/4" /> {/* title line */}
            </div>
            <span className="text-[11px] text-neutral-400 group-hover:text-neutral-700">
              View →
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------
   In-section preview (editorial; stays inside the Box)
---------------------------------------------- */
function InContainerPreview({ item }) {
  if (!item) return null;
  return (
    <div
      className="
        hidden md:block absolute right-2 top-8
        w-[320px] lg:w-[380px] xl:w-[420px]
        border border-brand-border bg-white
        pointer-events-none
      "
      aria-hidden="true"
    >
      <div className="p-3">
        <div className="text-[10px] text-neutral-500 mb-2">{item.title}</div>
        <div className="border border-brand-border overflow-hidden">
          {/* 16:9 here too for consistency */}
          <div className="relative w-full aspect-[16/9]">
            <div className="absolute inset-0">
              <Placeholder className="w-full h-full" label="Preview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Page
---------------------------------------------- */
export default function Portfolio({ showNotes, goTo }) {
  const [hovered, setHovered] = useState(null);
  const stripRef = useRef(null);

  // Demo data
  const items = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        type: ["Film", "Visual Art", "Performance", "Workshops"][i % 4],
        year: (2025 - (i % 5)).toString(),
        featured: i < 3, // three featured
      })),
    []
  );

  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  const openDetail = () => {
    if (typeof goTo === "function") goTo("Project Detail");
  };

  return (
    <div className="sections">
      {/* Page heading */}
      <div className="mb-3">
        <h1 className="page-title">Portfolio</h1>
        <p className="lede measure-wide text-neutral-700">
          Selected work across film, performance, and facilitation.
        </p>
      </div>
      {/* Intro */}
      <Box title="Intro">
        <div className="space-y-2 measure">
          <p>
            A concise catalogue view. Titles link to detail pages; years and
            types appear in small caps for quick scan.
          </p>
          {showNotes && (
            <Note>
              One or two lines to position the practice (mediums, themes, contexts). Titles, types, years, teasers, and covers are sourced from the Projects CMS; full field guidance lives in the Project Detail strategy.
            </Note>
          )}
        </div>
      </Box>

      {/* Selected Work — editorial rows */}
      <Box title="Selected Work">
        <div
          ref={stripRef}
          className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] pb-1"
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {featured.map((it, idx) => (
            <EditorialSlide key={it.id} item={it} index={idx} onOpen={openDetail} />
          ))}
        </div>

        {showNotes && (
          <Note>
            Highlights 2–3 key projects with title, type, year, a one‑line teaser, and film‑ratio media. Opens to the Project Detail for full context.
          </Note>
        )}
      </Box>

      {/* All Projects — clean list with preview */}
      <Box title="All Projects">
        <div className="relative">
          <ProjectList items={rest} onOpen={openDetail} onHover={setHovered} />
          <InContainerPreview item={hovered} />
        </div>

        {showNotes && (
          <Note>
            Compact list of all projects (title, type, year, optional teaser). Hover/focus preview is for orientation only. Fields are sourced from the Projects CMS.
          </Note>
        )}
      </Box>

      {/* Closing invitation */}
      <Box title="Invitation">
        <div className="rule-x pt-6 pb-4">
          <CTAGroup
            align="between"
            primary="Get in touch"
            secondary="Explore services"
            onPrimary={() => goTo && goTo("Contact")}
            onSecondary={() => goTo && goTo("Services")}
          >
            <SectionTitle>Bring this work to your audience</SectionTitle>
            <Note>
              Use this slot to invite screenings, exhibitions, or facilitated sessions.
            </Note>
          </CTAGroup>
        </div>
        <div className="rule-x" />
      </Box>
    </div>
  );
}
