import React from "react";
import { Placeholder, Note, CTAGroup } from "../components/ui";
import { SectionBand, EditorialHeading, Plate } from "../components/system";

export default function About({ showNotes, goTo }) {
  return (
    <div className="sections sections-roomy">
      {/* Page heading */}
      <div className="mb-3">
        <h1 className="page-title">About</h1>
        <p className="lede measure-wide text-neutral-700">
          Practice at the intersection of film, facilitation, and narrative
          repair.
        </p>
      </div>
      {/* 1) Opening & At a Glance (merged) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Opening & At a Glance</EditorialHeading>}>
        <div className="grid md:grid-cols-[1fr,1.6fr] gap-3 md:gap-4 items-start">
          {/* Left: portrait (tall) */}
          <div className="space-y-3">
            <div className="max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem]">
              <Plate variant="border" aspect="2x3" aria-describedby="about-opener about-roles">
                <Placeholder className="absolute inset-0 w-full h-full border-0" label="Portrait / quiet looping video" />
              </Plate>
              <div className="legend text-neutral-600 mt-2">Portrait caption (optional)</div>
            </div>
          </div>

          {/* Right: opener line + short bio + practice at a glance in a flowing stack */}
          <div className="space-y-5">
            {/* One-sentence opener */}
            <div id="about-opener" className="ph-sm bg-neutral-100 w-4/5" aria-label="One-sentence opener" />

            {/* Short bio (3–4 compact lines) */}
            <div className="space-y-2">
              <EditorialHeading as="h3" variant="heading">Short Bio</EditorialHeading>
              <div className="ph-sm bg-neutral-100" />
              <div className="ph-sm bg-neutral-100" />
              <div className="ph-sm bg-neutral-100 w-5/6" />
            </div>

            {/* Practice at a Glance (inline, airy) */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div id="about-roles">
                <div className="legend mono caps text-neutral-600 mb-1">Artist</div>
                <div className="ph-xs bg-neutral-100 w-2/3" />
              </div>
              <div>
                <div className="legend mono caps text-neutral-600 mb-1">Facilitator</div>
                <div className="ph-xs bg-neutral-100 w-3/4" />
              </div>
              <div>
                <div className="legend mono caps text-neutral-600 mb-1">Consultant</div>
                <div className="ph-xs bg-neutral-100 w-4/5" />
              </div>
            </div>


            {/* Consistent CTAs, aligned to end for clarity */}
            {/* CTA removed per request — calm scan below the portrait */}
          </div>
        </div>

        {showNotes && (
          <Note>
            Fast human orientation. Add a portrait/still, a one‑sentence opener, 3–4 bio lines, and a few quick facts (roles, location, languages).
          </Note>
        )}
      </SectionBand>

      {/* 2) Main Narrative (single column with optional inline image/caption) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Main Narrative</EditorialHeading>}>
        <div className="space-y-3">
          <div className="ph-xl bg-neutral-100" />
          <div className="ph-lg bg-neutral-100" />
          <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-start mt-2">
            <div className="ph-lg bg-neutral-100" />
            <div className="space-y-1">
              <div className="ph-xs bg-neutral-100 w-3/4" />
              <div className="ph-xs bg-neutral-100 w-1/2" />
            </div>
          </div>
        </div>
        {showNotes && (
          <Note>
            300–500 words linking your story, values, and the intersection of film/facilitation/consulting. One inline image optional.
          </Note>
        )}
      </SectionBand>

      {/* 3) Methods & Lineages (moved up, scannable) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Methods & Lineages</EditorialHeading>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Process Work (relational transformation)",
            "Theatre of the Oppressed",
            "Somatic practice & pacing",
            "Storytelling & narrative repair",
            "Political theory & philosophy",
            "Dream work / psychological inquiry",
          ].map((label) => (
            <div key={label} className="space-y-2">
              <EditorialHeading as="h3" variant="heading">{label}</EditorialHeading>
              <div className="ph-sm bg-neutral-100" />
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            List 3–6 frameworks/lineages. Each gets one sentence in your own words (how it shapes practice).
          </Note>
        )}
      </SectionBand>

      {/* 4) Pull-quote (moved down for resonance after methods) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">External voice</EditorialHeading>}>
        <figure className="space-y-2">
          <blockquote className="lede mono" aria-label="Short pull-quote">
            “Short line from collaborator, participant, or press.”
          </blockquote>
          <figcaption className="caption text-neutral-600">Name — Affiliation</figcaption>
        </figure>
        {showNotes && (
          <Note>
            One short quote (participant, collaborator, or press) with attribution. Keeps the page human without logos.
          </Note>
        )}
      </SectionBand>

      {/* 5) Selected Recognition (tight micro-lists) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Selected Recognition</EditorialHeading>}>
        <div className="grid md:grid-cols-3 gap-4">
          {["Awards / Exhibitions", "Institutional Collaborations", "Press / Outcomes"].map((heading) => (
            <div key={heading} className="space-y-2">
              <EditorialHeading as="h3" variant="heading">{heading}</EditorialHeading>
              <div className="ph-sm bg-neutral-100" />
              <div className="ph-sm bg-neutral-100" />
              <div className="ph-sm bg-neutral-100 w-4/5" />
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            Curate 3–5 items in 2–3 categories (awards/exhibitions, collaborations, press/outcomes). This is not a full CV.
          </Note>
        )}
      </SectionBand>

      {/* 6) Invitation */}
      <SectionBand ruleTop title={<EditorialHeading as="h2" variant="section">Invitation</EditorialHeading>}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <EditorialHeading as="h3" variant="heading">Begin a conversation</EditorialHeading>
            <div className="ph-sm bg-neutral-100 w-3/4" />
          </div>
          <CTAGroup
            layout="row"
            align="end"
            secondary="View portfolio"
            primary="Get in touch"
            onSecondary={() => goTo && goTo("Portfolio")}
            onPrimary={() => goTo && goTo("Contact")}
          />
        </div>
        {showNotes && (
          <Note>
            One calm line that invites contact or collaboration. Buttons link to Portfolio and Contact.
          </Note>
        )}
      </SectionBand>
    </div>
  );
}
