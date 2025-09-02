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
function FeaturedCard({ item, onOpen }) {
  return (
    <article
      className="
        snap-start shrink-0
        w-[92%] sm:w-[90%] md:w-[88%] lg:w-[82%] xl:w-[76%]
        mr-4 cursor-pointer
      "
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(item)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen?.(item)}
      aria-label={`Open ${item.title}`}
    >
      <div className="overflow-hidden border border-brand-border bg-white">
        {/* Media area: true 16:9 */}
        <div className="relative w-full aspect-[16/9]">
          <div className="absolute inset-0 p-3">
            <Placeholder className="w-full h-full" label="Featured video / image" />
          </div>
        </div>

        {/* Meta / CMS-like fields */}
        <div className="px-4 pb-4 pt-3 space-y-2">
          <div className="ph-xs bg-neutral-100 w-3/4" aria-label="Project title" />
          <div className="flex items-center gap-2 text-[10px] text-neutral-600">
            <Tag>{item.year}</Tag>
            <Tag>{item.type}</Tag>
          </div>
          <div className="ph-sm bg-neutral-100 w-10/12" aria-label="One-line teaser (context)" />
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
    <div className="space-y-6">
      {/* Intro */}
      <Box title="Intro">
        <div className="space-y-2">
          <div className="ph-sm bg-neutral-100" />
          <div className="ph-sm bg-neutral-100 w-2/3" />
          {showNotes && (
            <Note>
              One or two lines to position the practice (mediums, themes, contexts). Titles, types, years, teasers, and covers are sourced from the Projects CMS; full field guidance lives in the Project Detail strategy.
            </Note>
          )}
        </div>
      </Box>

      {/* Featured — horizontal scroller */}
      <Box title="Featured">
        <div
          ref={stripRef}
          className="
            flex overflow-x-auto snap-x snap-mandatory gap-2
            scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none]
            pb-1 no-scrollbar
          "
        >
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          {featured.map((it) => (
            <FeaturedCard key={it.id} item={it} onOpen={openDetail} />
          ))}
        </div>

        {showNotes && (
          <Note>
            Widescreen 16:9 cards (video-first), square corners, thin rules (no drop shadow). One large card per snap with a subtle peek of the next. Card fields are sourced from the Projects CMS.
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
            Hover/focus shows a larger preview on desktop; stays within the section. List rows pull basic fields from the Projects CMS.
          </Note>
        )}
      </Box>

      {/* Closing invitation */}
      <Box title="Invitation">
        <CTAGroup
          align="between"
          primary="Contact"
          secondary="See Services"
          onPrimary={() => goTo && goTo("Contact")}
          onSecondary={() => goTo && goTo("Services")}
        >
          <SectionTitle>Bring this work to your audience</SectionTitle>
          <Note>
            Use this slot to invite screenings, exhibitions, or facilitated sessions.
          </Note>
        </CTAGroup>
      </Box>
    </div>
  );
}