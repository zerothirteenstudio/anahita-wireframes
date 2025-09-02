import React from "react";
import { Box, SectionTitle, Placeholder, CTAGroup, Note } from "../components/ui";

export default function Home({ showNotes, goTo }) {
  const openDetail = () => typeof goTo === "function" && goTo("Project Detail");
  const toPortfolio = () => typeof goTo === "function" && goTo("Portfolio");
  const toOfferings = () => typeof goTo === "function" && goTo("Offerings");
  const toAbout = () => typeof goTo === "function" && goTo("About");
  const toContact = () => typeof goTo === "function" && goTo("Contact");

  return (
    <div id="main" className="space-y-6">
      {/* —————————————————————————————————————————————
          HERO — cinematic intro
         ————————————————————————————————————————————— */}
      <Box title="Hero">
        <div className="relative overflow-hidden rounded-md border border-brand-border">
          <Placeholder
            className="ph-2xl"
            label="Hero image or subtle video loop (16:9) with alt/captions"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 p-4 md:p-6 flex items-end">
            <div className="space-y-3 max-w-2xl text-white">
              <div className="ph-md bg-neutral-100 rounded-sm w-2/3" aria-label="Name / role" />
              <div className="ph-sm bg-neutral-100 rounded-sm w-3/4" aria-label="One-line positioning statement" />
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
        {showNotes && (
          <Note>
            Hero should hold name, one-line positioning, and main CTAs. Tone: cinematic, human, values-forward.
          </Note>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          FEATURED + WORK SNAPSHOT
         ————————————————————————————————————————————— */}
      <Box title="Featured & snapshot">
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          {/* Featured project */}
          <article
            className="card !p-0 overflow-hidden cursor-pointer focus:outline-none"
            role="button"
            tabIndex={0}
            onClick={openDetail}
            aria-label="Open featured project"
          >
            <Placeholder className="ph-xl" label="Featured project visual" />
            <div className="px-4 pb-4 space-y-2">
              <div className="ph-sm bg-neutral-100 rounded-sm w-3/4" aria-label="Project title" />
              <div className="ph-xs bg-neutral-100 rounded-sm w-4/5" aria-label="One-line project teaser" />
            </div>
          </article>

          {/* Work snapshot (2 teasers) */}
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((n) => (
              <button
                key={n}
                className="group relative overflow-hidden rounded-md border border-brand-border focus:outline-none"
                onClick={toPortfolio}
                aria-label={`Open work ${n}`}
              >
                <Placeholder className="ph-lg" label={`Work ${n} thumbnail`} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </button>
            ))}
          </div>
        </div>
        {showNotes && (
          <Note>
            Featured project = anchor. Two teasers show breadth. Portfolio page carries full depth.
          </Note>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          ABOUT TEASER
         ————————————————————————————————————————————— */}
      <Box title="About teaser">
        <div className="grid gap-4 md:grid-cols-[1fr,2fr] items-start">
          <div className="max-md:mb-2">
            <Placeholder className="ph-lg" label="Portrait / still" />
          </div>
          <div className="space-y-2">
            <div className="ph-sm bg-neutral-100 rounded-sm w-11/12" aria-label="Short intro line (1–2 sentences)" />
            <button className="underline text-[12px]" onClick={toAbout}>
              Read full bio →
            </button>
          </div>
        </div>
        {showNotes && (
          <Note>
            Teaser gives a small human anchor (photo + 1–2 lines). Full story lives on About.
          </Note>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          OFFERINGS — with methods/outcomes teaser
         ————————————————————————————————————————————— */}
      <Box title="Offerings">
        <div className="space-y-3">
          <div className="ph-sm bg-neutral-100 rounded-sm w-3/4" aria-label="Methods/outcomes teaser (1–2 lines)" />
          <div className="grid gap-3 sm:grid-cols-3">
            {["Workshops", "Facilitation", "Consulting"].map((label) => (
              <button
                key={label}
                onClick={toOfferings}
                className="card w-full text-left focus:outline-none"
                aria-label={`Open ${label}`}
              >
                <Placeholder className="ph-md" label={`${label} visual`} />
                <div className="mt-2 ph-xs bg-neutral-100 rounded-sm w-1/2" aria-label={`${label} label`} />
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <CTAGroup
              layout="row"
              align="end"
              primary="Explore offerings"
              onPrimary={toOfferings}
            />
          </div>
        </div>
        {showNotes && (
          <Note>
            Intro line explains methods/outcomes (participants + hirers). Cards show service categories. Details live on Services page.
          </Note>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          PARTICIPANT TRUST — quotes block
         ————————————————————————————————————————————— */}
      <Box title="Participant trust">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Placeholder className="ph-md" label="Short participant quote" />
            <div className="ph-xs bg-neutral-100 rounded-sm w-1/3" aria-label="Attribution" />
          </div>
          <div className="space-y-1">
            <Placeholder className="ph-md" label="Short organization quote" />
            <div className="ph-xs bg-neutral-100 rounded-sm w-1/3" aria-label="Attribution" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Two lived-voice quotes (participant + org). Shows both safety and outcomes without logo walls.
          </Note>
        )}
      </Box>

      {/* —————————————————————————————————————————————
          INVITATION — soft close
         ————————————————————————————————————————————— */}
      <Box title="Invitation">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Start a conversation</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm w-4/5" aria-label="Closing line (friendly, human)" />
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
        {showNotes && (
          <Note>
            Warm, simple close with two next steps: Contact or Portfolio.
          </Note>
        )}
      </Box>
    </div>
  );
}