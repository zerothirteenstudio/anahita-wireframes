import React from "react";
import { Box, SectionTitle, Placeholder, CTAGroup, Tag, Note } from "../components/ui";

export default function Home({ showNotes, goTo }) {
  const openDetail = () => typeof goTo === "function" && goTo("Project Detail");
  const toPortfolio = () => typeof goTo === "function" && goTo("Portfolio");
  const toOfferings = () => typeof goTo === "function" && goTo("Offerings");
  const toContact = () => typeof goTo === "function" && goTo("Contact");

  return (
    <div className="space-y-6">
      {/* —————————————————————————————————————————————
          HERO — quiet, cinematic, typographic
         ————————————————————————————————————————————— */}
      <Box title="Hero">
        <div className="relative overflow-hidden rounded-md border border-brand-border">
          {/* Visual (16:9): replace with film still/loop later */}
          <Placeholder className="ph-2xl" label="Wide still / short loop (16:9) with alt/captions" />
          {/* Soft gradient for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          {/* Overlay copy + CTAs */}
          <div className="absolute inset-0 p-4 md:p-6 flex items-end">
            <div className="space-y-3 max-w-2xl">
              <div className="text-white text-xl tracking-tight">Anahita</div>
              <div className="text-white/95 text-sm leading-snug">
                Artist & facilitator holding space for transformation.
              </div>

              <div className="pt-1">
                <CTAGroup
                  layout="row"
                  align="start"
                  secondary="View portfolio"
                  primary="Explore offerings"
                  onSecondary={toPortfolio}
                  onPrimary={toOfferings}
                />
              </div>
            </div>
          </div>
        </div>

        {showNotes && (
          <div className="mt-2 space-y-1">
            <Note>Use one filmic image or subtle loop. Keep the line under the name to a single sentence.</Note>
            <Note>Both CTAs are intentionally quiet and typographic (not bulky buttons).</Note>
          </div>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          FEATURED PROJECT — single anchor work
         ————————————————————————————————————————————— */}
      <Box title="Featured Project">
        <article
          className="card !p-0 overflow-hidden cursor-pointer focus:outline-none"
          role="button"
          tabIndex={0}
          onClick={openDetail}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetail()}
          aria-label="Open featured project"
        >
          <div className="pad">
            <Placeholder className="ph-xl" label="Featured visual (image/video with alt/captions)" />
          </div>

          <div className="px-4 pb-4 space-y-2">
            <div className="ph-sm bg-neutral-100 rounded-sm w-2/3" aria-label="Project title" />
            <div className="flex items-center gap-2 text-[10px] text-neutral-600">
              <Tag>2024</Tag>
              <Tag>Film</Tag>
              <Tag>Installation</Tag>
            </div>
            <div
              className="ph-sm bg-neutral-100 rounded-sm w-10/12"
              aria-label="One-line impact statement"
            />
            <div className="text-[11px]">
              <button className="inline-flex items-center gap-1 underline-offset-2 hover:underline">
                View case study <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </article>

        {showNotes && (
          <div className="mt-2 space-y-1">
            <Note>One representative project: title, year, tags, one-sentence outcome. Card is fully clickable.</Note>
          </div>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          MENTIONS / QUOTES — light human proof
         ————————————————————————————————————————————— */}
      <Box title="Mentions & voices">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Two short quotes */}
          <div className="space-y-2 sm:col-span-1">
            <Placeholder className="ph-md" label="Short quote from collaborator / participant" />
            <div className="ph-xs bg-neutral-100 rounded-sm w-2/3" />
          </div>
          <div className="space-y-2 sm:col-span-1">
            <Placeholder className="ph-md" label="Another short quote (authentic, specific)" />
            <div className="ph-xs bg-neutral-100 rounded-sm w-1/2" />
          </div>

          {/* Two or three discrete logos / press */}
          {[1, 2, 3].map((n) => (
            <div key={n} className="space-y-2">
              <Placeholder className="ph-md" label="Small logo / press mention" />
              <div className="ph-xs bg-neutral-100 rounded-sm w-1/2" />
            </div>
          ))}
        </div>

        {showNotes && <Note>Prefer 2 quotes + 2–3 logos over a dense logo wall. Keep it airy.</Note>}
      </Box>

      {/* —————————————————————————————————————————————
          OFFERINGS BRIDGE — one breath, one path
         ————————————————————————————————————————————— */}
      <Box title="Offerings snapshot">
        <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-center">
          <div className="space-y-2">
            <div
              className="ph-sm bg-neutral-100 rounded-sm"
              aria-label="One sentence: Workshops, facilitation, and consulting — rooted in accountability and empowerment."
            />
          </div>
          <div className="flex justify-end">
            <CTAGroup layout="row" align="end" primary="Explore offerings" onPrimary={toOfferings} />
          </div>
        </div>

        {showNotes && <Note>One-sentence bridge into the Offerings page. No extra buttons.</Note>}
      </Box>

      {/* —————————————————————————————————————————————
          INVITATION — soft close with two paths
         ————————————————————————————————————————————— */}
      <Box title="Invitation">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Start a conversation</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" aria-label="Short friendly line" />
          </div>
          <CTAGroup
            layout="row"
            align="end"
            primary="Contact"
            secondary="See portfolio"
            onPrimary={toContact}
            onSecondary={toPortfolio}
          />
        </div>

        {showNotes && <Note>End with openness, not a sales push. Keep language human.</Note>}
      </Box>
    </div>
  );
}