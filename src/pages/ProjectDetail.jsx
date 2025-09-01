import React from "react";
import {
  Box,
  SectionTitle,
  Note,
  Placeholder,
  Button,
  CTAGroup,
  Tag, // kept for later sections
} from "../components/ui";

export default function ProjectDetail({ showNotes, goTo }) {
  const goBackToPortfolio = () => typeof goTo === "function" && goTo("Portfolio");

  return (
    <div className="space-y-6">
      {/* Back */}
      <div className="flex items-center justify-start">
        <Button variant="ghost" onClick={goBackToPortfolio} aria-label="Back to Portfolio">
          ← Back to Portfolio
        </Button>
      </div>

      {/* PROJECT HERO — overlay meta on media */}
      <Box title="Project">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
          {/* Media */}
          <div className="absolute inset-0 p-3">
            <Placeholder className="w-full h-full rounded-sm" label="Featured video (poster) / hero image" />
          </div>

          {/* Bottom gradient for readability */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent h-1/2" />

          {/* Overlay content */}
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
            <div className="max-w-3xl text-white space-y-3">
              {/* Title (wireframe block) */}
              <div className="h-6 md:h-7 bg-white/85 rounded-sm w-3/4" aria-label="Project Title" />

              {/* Meta chips (year / format / etc.) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block h-5 w-14 rounded-full bg-white/80" />
                <span className="inline-block h-5 w-20 rounded-full bg-white/80" />
                <span className="inline-block h-5 w-16 rounded-full bg-white/80" />
              </div>

              {/* Logline (80–120 chars) */}
              <div className="h-5 bg-white/80 rounded-sm w-11/12" aria-label="Logline (80–120 chars)" />
            </div>
          </div>
        </div>

        {showNotes && (
          <Note>
            Overlay shows: Title, meta chips (Year/Format/etc.), and one-line logline. The media runs full-bleed (16:9). Replace blocks with real text later.
          </Note>
        )}
      </Box>

      {/* BODY — Left: Statement / Context; Right: Quick Facts + Credits (sticky) */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-start">
        {/* LEFT */}
        <Box title="Artist Statement / Context">
          <div className="space-y-3">
            <SectionTitle>Concept & Process</SectionTitle>
            <div className="ph-xl bg-neutral-100 rounded-sm" />
            <SectionTitle>Methodology & Themes</SectionTitle>
            <div className="ph-lg bg-neutral-100 rounded-sm" />
          </div>
          {showNotes && (
            <Note>
              Keep paragraphs short. Prioritize intent, audience, and approach.
            </Note>
          )}
        </Box>

        {/* RIGHT (sticky) */}
        <aside className="space-y-4 md:sticky md:top-4">
          <Box title="Quick Facts">
            <ul className="space-y-3 text-xs">
              <li>
                <div className="text-neutral-500 mb-1">Medium / Type</div>
                <div className="ph-xs bg-neutral-100 rounded-sm" />
              </li>
              <li>
                <div className="text-neutral-500 mb-1">Collaborators / Institutions</div>
                <div className="ph-xs bg-neutral-100 rounded-sm" />
              </li>
              <li>
                <div className="text-neutral-500 mb-1">Venue / Festival / Event</div>
                <div className="ph-xs bg-neutral-100 rounded-sm" />
              </li>
              <li>
                <div className="text-neutral-500 mb-1">Funding / Support</div>
                <div className="ph-xs bg-neutral-100 rounded-sm" />
              </li>
              <li>
                <div className="text-neutral-500 mb-1">Tags</div>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block h-5 w-14 rounded-full bg-neutral-200" />
                  <span className="inline-block h-5 w-20 rounded-full bg-neutral-200" />
                </div>
              </li>
            </ul>
          </Box>

          <Box title="Credits">
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" /> {/* Name / Org */}
                  <div className="ph-xs bg-neutral-100 rounded-sm w-1/2" /> {/* Role */}
                </div>
              ))}
            </div>
          </Box>
        </aside>
      </div>

      {/* IMPACT / RECOGNITION */}
      <Box title="Impact & Recognition">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <SectionTitle>Outcomes</SectionTitle>
            <div className="ph-md bg-neutral-100 rounded-sm" />
            <div className="ph-md bg-neutral-100 rounded-sm" />
          </div>
          <div className="space-y-3">
            <SectionTitle>Awards / Festivals / Press</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
        </div>
        {showNotes && <Note>Bullet outcomes or short blurbs; link to press when possible.</Note>}
      </Box>

      {/* MEDIA GALLERY */}
      <Box title="Media Gallery">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="relative w-full aspect-[16/9]">
                <div className="absolute inset-0 p-2">
                  <Placeholder className="w-full h-full rounded-sm" label={`Asset ${i + 1}`} />
                </div>
              </div>
              <div className="ph-xs bg-neutral-100 rounded-sm w-3/4" /> {/* Caption */}
            </div>
          ))}
        </div>
        {showNotes && <Note>Keep aspect consistent; include captions/alt.</Note>}
      </Box>

      {/* RELATED PROJECTS */}
      <Box title="Related Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative w-full aspect-[16/9]">
              <div className="absolute inset-0 p-3">
                <Placeholder className="w-full h-full rounded-sm" label={`Related project ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Prev/Next (placeholder actions) */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={goBackToPortfolio}>← Previous</Button>
        <Button variant="ghost" onClick={goBackToPortfolio}>Next →</Button>
      </div>

      {/* CTA */}
      <Box title="Work with Natascha">
        <CTAGroup
          align="between"
          primary="Contact"
          secondary="Request Workshop"
          onPrimary={() => goTo && goTo("Contact")}
          onSecondary={() => goTo && goTo("Offerings")}
        >
          <SectionTitle>Let’s work together</SectionTitle>
          <Note>Bring this work into your program, festival, classroom, or institution.</Note>
        </CTAGroup>
      </Box>
    </div>
  );
}