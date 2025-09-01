import React from "react";
import { Box, Placeholder, SectionTitle, Note, CTAGroup } from "../components/ui";

export default function About({ showNotes, goTo }) {
  return (
    <div className="space-y-6">
      {/* 1) Opening + At a Glance (merged) */}
      <Box title="Opening & At a Glance">
        <div className="grid md:grid-cols-[1.1fr,1.4fr] gap-6 items-start">
          {/* Left: portrait (tall) */}
          <div className="space-y-3">
            <Placeholder className="ph-2xl" label="Portrait / quiet looping video" />
          </div>

          {/* Right: opener line + short bio + quick facts in a flowing stack */}
          <div className="space-y-5">
            {/* One-sentence opener */}
            <div className="ph-sm bg-neutral-100 rounded-sm w-4/5" />

            {/* Short bio (3–4 compact lines) */}
            <div className="space-y-2">
              <SectionTitle>Short Bio</SectionTitle>
              <div className="ph-sm bg-neutral-100 rounded-sm" />
              <div className="ph-sm bg-neutral-100 rounded-sm" />
              <div className="ph-sm bg-neutral-100 rounded-sm w-5/6" />
            </div>

            {/* Quick facts (inline, airy) */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-neutral-500 mb-1">Artist</div>
                <div className="ph-xs bg-neutral-100 rounded-sm w-2/3" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Facilitator</div>
                <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Consultant</div>
                <div className="ph-xs bg-neutral-100 rounded-sm w-4/5" />
              </div>
            </div>

            {/* Optional: gentle CTAs, aligned to end for consistency */}
            <div className="flex gap-2 justify-end">
              <button
                className="btn-ghost text-sm"
                onClick={() => goTo && goTo("Portfolio")}
              >
                See selected work
              </button>
              <button
                className="btn text-sm"
                onClick={() => goTo && goTo("Contact")}
              >
                Begin a conversation
              </button>
            </div>
          </div>
        </div>

        {showNotes && (
          <Note>
            One strong image + a single-line opener. Short bio and three quick facts support fast scanning.
          </Note>
        )}
      </Box>

      {/* 2) Main narrative (single column with optional inline image/caption) */}
      <Box title="Main Narrative">
        <div className="space-y-3">
          <div className="ph-xl bg-neutral-100 rounded-sm" />
          <div className="ph-lg bg-neutral-100 rounded-sm" />
          <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-start mt-2">
            <div className="ph-lg bg-neutral-100 rounded-sm" />
            <div className="space-y-1">
              <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" />
              <div className="ph-xs bg-neutral-100 rounded-sm w-1/2" />
            </div>
          </div>
        </div>
        {showNotes && (
          <Note>
            300–500 words that tie film, facilitation, and why. Use one inline visual to pace the reading.
          </Note>
        )}
      </Box>

      {/* 3) Methods & Lineages (moved up, scannable) */}
      <Box title="Methods & Lineages">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Process Work (relational transformation)",
            "Theatre of the Oppressed",
            "Somatic practice & pacing",
            "Storytelling & narrative repair",
            "Political theory & philosophy",
            "Dream work / psychological inquiry",
          ].map((label) => (
            <div key={label} className="space-y-2">
              <SectionTitle>{label}</SectionTitle>
              <div className="ph-sm bg-neutral-100 rounded-sm" />
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            Six short statements; one sentence each. Name the lineage and your angle.
          </Note>
        )}
      </Box>

      {/* 4) Pull-quote (moved down for resonance after methods) */}
      <Box title="Pull-quote">
        <figure className="border border-brand-border rounded-sm p-4 bg-white">
          <blockquote className="text-base leading-relaxed">
            <div className="ph-sm bg-neutral-100 rounded-sm w-11/12" />
            <div className="ph-sm bg-neutral-100 rounded-sm w-4/5 mt-2" />
          </blockquote>
          <figcaption className="text-[11px] text-neutral-500 mt-2">
            <div className="ph-xs bg-neutral-100 rounded-sm w-1/3" />
          </figcaption>
        </figure>
        {showNotes && (
          <Note>
            One sentence from a collaborator, participant, or press to anchor trust.
          </Note>
        )}
      </Box>

      {/* 5) Selected recognition (tight micro-lists) */}
      <Box title="Selected Recognition">
        <div className="grid md:grid-cols-3 gap-4">
          {["Awards / Exhibitions", "Institutional Collaborations", "Press / Outcomes"].map((heading) => (
            <div key={heading} className="space-y-2">
              <SectionTitle>{heading}</SectionTitle>
              <div className="ph-sm bg-neutral-100 rounded-sm" />
              <div className="ph-sm bg-neutral-100 rounded-sm" />
              <div className="ph-sm bg-neutral-100 rounded-sm w-4/5" />
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            3–5 items per column. Add links/dates when available; keep the list spare.
          </Note>
        )}
      </Box>

      {/* 6) Invitation */}
      <Box title="Invitation">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Begin a conversation</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm w-3/4" />
          </div>
          <CTAGroup
            layout="row"
            align="end"
            secondary="See Portfolio"
            primary="Contact"
            onSecondary={() => goTo && goTo("Portfolio")}
            onPrimary={() => goTo && goTo("Contact")}
          />
        </div>
        {showNotes && (
          <Note>
            Two consistent CTAs. Keep language invitational, not sales-driven.
          </Note>
        )}
      </Box>
    </div>
  );
}