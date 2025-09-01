// src/pages/Home.jsx
import React from "react";
import {
  Box,
  SectionTitle,
  Placeholder,
  CTAGroup,
  Tag,
  Note,
} from "../components/ui";

/**
 * Home — artist-first, editorial, minimal CTA
 * Sections:
 *  1) Hero: full canvas image/loop with soft overlay text
 *  2) Featured reel (wide 16:9 band)
 *  3) Two pathways: Portfolio / Offerings (bold typographic tiles)
 *  4) Glimpses: small previews (quiet)
 *  5) Invitation: one gentle CTA
 */
export default function Home({ showNotes, goTo }) {
  const openDetail = () => typeof goTo === "function" && goTo("Project Detail");

  return (
    <div className="space-y-8 md:space-y-10">
      {/* 1) HERO — full, atmospheric, almost no chrome */}
      <section className="relative overflow-hidden rounded-md border border-brand-border bg-white">
        {/* Media (image or subtle loop) */}
        <div className="relative">
          <Placeholder
            className="ph-2xl md:ph-2xl"
            label="Hero image or subtle loop (include alt/captions)"
          />
          {/* Overlay text block */}
          <div className="absolute inset-0 pointer-events-none flex items-end">
            <div className="w-full p-4 md:p-6">
              <div className="max-w-[55ch] space-y-2 bg-white/70 backdrop-blur-sm rounded-sm p-3 md:p-4 pointer-events-auto">
                <h1 className="text-xl md:text-2xl leading-tight">
                  <span className="block">Anahita Natascha</span>
                  <span className="block font-normal text-neutral-700">
                    Artist & facilitator holding space for transformation, accountability, and new relations.
                  </span>
                </h1>
                <div className="text-[11px] text-neutral-600 flex flex-wrap gap-2">
                  <Tag>Film</Tag>
                  <Tag>Installation</Tag>
                  <Tag>Performance</Tag>
                  <Tag>Workshops</Tag>
                </div>
                <div className="pt-1">
                  <CTAGroup
                    layout="row"
                    align="start"
                    gap="sm"
                    primary="Enter the work"
                    secondary="Explore offerings"
                    onPrimary={() => goTo && goTo("Portfolio")}
                    onSecondary={() => goTo && goTo("Offerings")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showNotes && (
          <div className="p-3">
            <Note>
              Quiet hero with text on a soft backdrop. Keep copy short; the image/loop sets tone. The two CTAs are subtle and typographic.
            </Note>
          </div>
        )}
      </section>

      {/* 2) FEATURED REEL — wide 16:9 band, visual is the link */}
      <section>
        <Box title="Featured reel">
          <article
            className="cursor-pointer focus:outline-none"
            role="button"
            tabIndex={0}
            onClick={openDetail}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openDetail()}
            aria-label="Open featured project"
          >
            <div className="rounded-md overflow-hidden border border-brand-border">
              <Placeholder className="ph-xl" label="16:9 still or video reel" />
            </div>
            <div className="mt-2 space-y-1">
              <div className="ph-xs bg-neutral-100 rounded-sm w-2/3" aria-label="Project title" />
              <div className="flex items-center gap-2 text-[11px] text-neutral-600">
                <Tag>2024</Tag>
                <Tag>Film</Tag>
              </div>
            </div>
          </article>

          {showNotes && (
            <Note>Use a single strong reel/project. No extra button—the visual is the link.</Note>
          )}
        </Box>
      </section>

      {/* 3) TWO PATHWAYS — big type tiles, minimal chrome */}
      <section>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => goTo && goTo("Portfolio")}
            className="group text-left rounded-md border border-brand-border p-4 md:p-6 bg-white hover:bg-neutral-50 transition"
          >
            <div className="text-lg md:text-xl leading-tight">
              Portfolio
            </div>
            <div className="mt-2 text-sm text-neutral-600 max-w-[48ch]">
              Selected works in film, installation, and performance.
            </div>
            <div className="mt-4">
              <Placeholder className="ph-lg" label="Widescreen still" />
            </div>
            <div className="mt-2 text-[12px] underline underline-offset-2 opacity-80 group-hover:opacity-100">
              Enter → 
            </div>
          </button>

          <button
            onClick={() => goTo && goTo("Offerings")}
            className="group text-left rounded-md border border-brand-border p-4 md:p-6 bg-white hover:bg-neutral-50 transition"
          >
            <div className="text-lg md:text-xl leading-tight">
              Offerings
            </div>
            <div className="mt-2 text-sm text-neutral-600 max-w-[48ch]">
              Facilitation, workshops, and collaborative formats.
            </div>
            <div className="mt-4">
              <Placeholder className="ph-lg" label="Session / workshop image" />
            </div>
            <div className="mt-2 text-[12px] underline underline-offset-2 opacity-80 group-hover:opacity-100">
              Explore →
            </div>
          </button>
        </div>

        {showNotes && (
          <div className="mt-2">
            <Note>
              Pathways are large typographic tiles with an image to set mood; they shouldn’t feel like “cards.”
            </Note>
          </div>
        )}
      </section>

      {/* 4) GLIMPSES — small quiet previews */}
      <section>
        <Box title="Glimpses">
          <div className="grid sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="space-y-2">
                <div className="rounded-md overflow-hidden border border-brand-border">
                  <Placeholder className="ph-md" label="Still / detail" />
                </div>
                <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" />
              </div>
            ))}
          </div>
          {showNotes && (
            <Note>Three gentle previews—details, stills, or process. Keep captions short.</Note>
          )}
        </Box>
      </section>

      {/* 5) INVITATION — single CTA, warm */}
      <section>
        <Box title="Invitation">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="space-y-1">
              <SectionTitle>Start a conversation</SectionTitle>
              <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" />
            </div>
            <CTAGroup
              layout="row"
              align="end"
              primary="Contact"
              secondary="See Portfolio"
              onPrimary={() => goTo && goTo("Contact")}
              onSecondary={() => goTo && goTo("Portfolio")}
            />
          </div>
          {showNotes && (
            <Note>One clear next step. Keep the tone invitational, not salesy.</Note>
          )}
        </Box>
      </section>
    </div>
  );
}