import React from "react";
import Box from "../components/ui/Box.jsx";
import Placeholder from "../components/ui/Placeholder.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Note from "../components/ui/Note.jsx";
import Tag from "../components/ui/Tag.jsx";

/**
 * Props:
 *  - showNotes (boolean)
 *  - goTo?: (pageName: string) => void  // optional; enables “Back to Portfolio”
 */
export default function ProjectDetail({ showNotes, goTo }) {
  return (
    <div className="space-y-6">
      {/* Back / Lang */}
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-500">EN | DE</div>
        {typeof goTo === "function" && (
          <button
            onClick={() => goTo("Portfolio")}
            className="border border-neutral-300 rounded-2xl px-2 py-1 text-xs hover:bg-neutral-50"
          >
            ← Back to Portfolio
          </button>
        )}
      </div>

      {/* =========================
          Project Hero (now includes Quick Facts + Project Summary)
         ========================= */}
      <Box title="Project Hero">
        <div className="grid lg:grid-cols-[2fr,1.2fr] gap-4 items-start">
          {/* Large visual */}
          <div className="ph-xl border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
            Large visual (image or featured video)
          </div>

          {/* Right column: title/meta + Quick Facts + Summary */}
          <div className="space-y-4">
            {/* Title + chips */}
            <div className="space-y-2">
              <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* Project title */}
              <div className="flex flex-wrap gap-2 text-[10px] text-neutral-600">
                <Tag>2024</Tag>
                <Tag>Film</Tag>
                <Tag>Essay</Tag>
              </div>
              {showNotes && (
                <Note>Title, year, category/format. Provide alt text and captions if video.</Note>
              )}
            </div>

            {/* Quick Facts (inside hero) */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Medium / Type</div>
                <div className="ph-sm bg-neutral-100 rounded-2xl" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Collaborators / Institutions</div>
                <div className="ph-sm bg-neutral-100 rounded-2xl" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Location / Festival / Event</div>
                <div className="ph-sm bg-neutral-100 rounded-2xl" />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-wide text-neutral-500">Tags / Categories (EN/DE)</div>
                <div className="ph-sm bg-neutral-100 rounded-2xl" />
              </div>
            </div>

            {/* Project Summary (inside hero) */}
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wide text-neutral-500">Project Summary (80–120 chars)</div>
              <div className="ph-sm bg-neutral-100 rounded-2xl w-3/4" />
              {showNotes && <Note>Short summary for quick scan; outcome-oriented.</Note>}
            </div>
          </div>
        </div>
      </Box>

      {/* =========================
          Full Description / Artist Statement
         ========================= */}
      <Box title="Full Description / Artist Statement">
        <div className="space-y-3">
          <div className="ph-md bg-neutral-100 rounded-2xl" />
          <div className="ph-md bg-neutral-100 rounded-2xl" />
          <div className="ph-md bg-neutral-100 rounded-2xl" />
        </div>
        {showNotes && (
          <Note>
            Include concept, process, methodology, and artistic/thematic context. Provide EN/DE versions where relevant.
          </Note>
        )}
      </Box>

      {/* =========================
          Impact / Outcomes + Awards / Press
         ========================= */}
      <Box title="Impact & Recognition">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <SectionTitle>Outcomes / Impact</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
          </div>
          <div className="space-y-2">
            <SectionTitle>Awards / Festival Selections</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
          </div>
          <div className="space-y-2">
            <SectionTitle>Press / Reviews (links)</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
          </div>
        </div>
      </Box>

      {/* =========================
          Media Gallery
         ========================= */}
      <Box title="Media Gallery">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="ph-lg border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-[10px] text-neutral-500">
                Asset {i + 1}
              </div>
              <div className="ph-xs bg-neutral-100 rounded-2xl" /> {/* caption */}
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            Carousel or grid. Each asset needs caption + alt; provide transcripts for A/V.
          </Note>
        )}
      </Box>

      {/* =========================
          Collaborators / Network
         ========================= */}
      <Box title="Collaborators / Network">
        <div className="grid md:grid-cols-3 gap-4">
          {["Key Partners", "Roles", "Orgs / Links"].map((h) => (
            <div key={h} className="space-y-2">
              <SectionTitle>{h}</SectionTitle>
              <div className="ph-sm bg-neutral-100 rounded-2xl" />
              <div className="ph-sm bg-neutral-100 rounded-2xl" />
            </div>
          ))}
        </div>
      </Box>

      {/* =========================
          Related Projects / Links
         ========================= */}
      <Box title="Related Projects / Links">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="space-y-2 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => typeof goTo === "function" && goTo("Project Detail")}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && typeof goTo === "function" && goTo("Project Detail")
              }
            >
              <div className="ph-lg border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
                Related visual
              </div>
              <div className="ph-xs bg-neutral-100 rounded-2xl" />
            </div>
          ))}
        </div>
        {showNotes && <Note>Auto-pull by shared tags/categories; also allow manual curation.</Note>}
      </Box>
    </div>
  );
}