import React from "react";
import { Placeholder, CTAGroup, Note } from "../components/ui";
import { SectionBand, EditorialHeading, Plate } from "../components/system";

export default function Home({ showNotes, goTo }) {
  const openDetail = () => typeof goTo === "function" && goTo("Project Detail");
  const toPortfolio = () => typeof goTo === "function" && goTo("Portfolio");
  const toOfferings = () => typeof goTo === "function" && goTo("Offerings");
  const toAbout = () => typeof goTo === "function" && goTo("About");
  const toContact = () => typeof goTo === "function" && goTo("Contact");

  return (
    <div id="main" className="sections sections-roomy">
      {/* HERO — cinematic intro */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Hero</EditorialHeading>}>
        <Plate variant="border" aspect="21x9">
          <Placeholder
            className="absolute inset-0 w-full h-full border-0"
            label="Hero still / subtle loop (21:9) with alt/caption"
          />
          {/* Centered logline strip on plate */}
          <div className="absolute inset-0 grid place-items-center px-6">
            <h1 className="page-title mono text-black bg-white px-4 py-2 inline-block text-center">One‑line logline that frames the practice and its values.</h1>
          </div>
          <div className="absolute right-3 top-3 md:right-4 md:top-4 flex items-center gap-3">
            <button className="btn-link caption mono caps" onClick={toPortfolio}>View Portfolio</button>
            <button className="btn-link caption mono caps" onClick={toOfferings}>Explore Services</button>
          </div>
        </Plate>
        {showNotes && (
          <Note>
            Orientation + trust in one scroll. Story‑first hero with a single logline centered on the image. Quiet links in the top‑right (Portfolio / Offerings). Name is optional here; it appears on About and site chrome.
          </Note>
        )}
      </SectionBand>

      {/* —————————————————————————————————————————————
          FEATURED + WORK SNAPSHOT
         ————————————————————————————————————————————— */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Featured & snapshot</EditorialHeading>}>
        <div className="grid gap-5 md:gap-6 lg:grid-cols-[2fr,1fr] items-start">
          {/* Featured project */}
          <article className="overflow-hidden cursor-pointer focus:outline-none" role="button" tabIndex={0} onClick={openDetail} aria-label="Open featured project" aria-describedby="feat-title feat-teaser feat-meta">
            <Plate variant="border" aspect="16x9">
              <Placeholder className="absolute inset-0 w-full h-full border-0" label="Featured project visual" />
            </Plate>
            <div className="pt-3 space-y-1">
              <div id="feat-title" className="ph-sm bg-neutral-100 w-3/4" aria-label="Featured project title (heading)" />
              <div id="feat-teaser" className="ph-xs bg-neutral-100 w-4/5" aria-label="One-line project teaser (body)" />
              <div id="feat-meta" className="legend mono caps text-neutral-600">FILM · 2024</div>
            </div>
          </article>

          {/* Work snapshot (2 teasers) */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {[1, 2].map((n) => (
              <button
                key={n}
                className="group relative overflow-hidden focus:outline-none"
                onClick={toPortfolio}
                aria-label={`Open work ${n}`}
              >
                <Plate variant="border" aspect="16x9">
                  <Placeholder className="absolute inset-0 w-full h-full border-0" label={`Work ${n} thumbnail`} />
                </Plate>
              </button>
            ))}
          </div>
        </div>
        {showNotes && (
          <Note>
            One anchor project with a 1–2 line human context (not metrics). Two small thumbnails link to Portfolio to show range without turning Home into a gallery. Featured opens the project; thumbnails route to Portfolio.
          </Note>
        )}
      </SectionBand>

      {/* —————————————————————————————————————————————
          ABOUT TEASER
         ————————————————————————————————————————————— */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">About teaser</EditorialHeading>}>
        <div className="grid gap-5 md:gap-6 md:grid-cols-[1fr,2fr] items-start">
          <div className="max-md:mb-2">
            <Plate variant="border" aspect="3x2" aria-describedby="about-intro about-meta">
              <Placeholder className="absolute inset-0 w-full h-full border-0" label="Portrait / still" />
            </Plate>
          </div>
          <div className="space-y-3">
            <p id="about-intro" className="body" aria-label="Short intro line about the artist">
              Short intro line about the artist, situating their work and approach.
            </p>
            <div id="about-meta" className="legend mono caps text-neutral-600">ARTIST & FACILITATOR — CITY</div>
            <div>
              <button className="btn-link caption mono caps" onClick={toAbout}>Read full bio →</button>
            </div>
          </div>
        </div>
        {showNotes && (
          <Note>
            Connect the work to the human behind it. Portrait/still + 1–2 sentence micro‑intro (philosophy and motive). Link: Read full bio. This is not the full story—just the thread that invites the click.
          </Note>
        )}
      </SectionBand>

      {/* —————————————————————————————————————————————
          OFFERINGS — with methods/outcomes teaser
         ————————————————————————————————————————————— */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Offerings &amp; how I work</EditorialHeading>}>
        <div className="space-y-3">
          <div className="ph-sm bg-neutral-100 w-3/4" aria-label="Methods/outcomes teaser (1–2 lines)" />
          <div className="grid gap-4 md:gap-5 sm:grid-cols-3">
            {["Workshops", "Facilitation", "Consulting"].map((label) => (
              <button
                key={label}
                onClick={toOfferings}
                className="w-full text-left focus:outline-none"
                aria-label={`Open ${label}`}
              >
                <Plate variant="border" aspect="4x3">
                  <Placeholder className="absolute inset-0 w-full h-full border-0" label={`${label} visual`} />
                </Plate>
                <div className="mt-2 ph-xs bg-neutral-100 w-1/2" aria-label={`${label} label`} />
              </button>
            ))}
          </div>
          <div className="flex justify-end">
            <CTAGroup
              layout="row"
              align="end"
              primary="Explore services"
              onPrimary={toOfferings}
            />
          </div>
        </div>
        {showNotes && (
          <Note>
            For hirers and participants: 1–2 lines on methods/outcomes (trauma‑informed, participatory, arts‑rooted). Cards are labels only: Workshops / Facilitation / Consulting. Save formats, case examples, and testimonials for the Services page.
          </Note>
        )}
      </SectionBand>

      {/* —————————————————————————————————————————————
          PARTICIPANT TRUST — quotes block
         ————————————————————————————————————————————— */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Lived voices</EditorialHeading>}>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {/* Participant voice */}
          <figure className="space-y-2">
            <blockquote className="lede mono" aria-label="Participant quote">
              “Short participant line about safety, clarity, or usefulness.”
            </blockquote>
            <figcaption className="caption text-neutral-600">Participant — Workshop Cohort</figcaption>
          </figure>

          {/* Organization voice */}
          <figure className="space-y-2">
            <blockquote className="lede mono" aria-label="Organization quote">
              “Short organization line naming the quality of facilitation or outcomes.”
            </blockquote>
            <figcaption className="caption text-neutral-600">Program Lead — Organization</figcaption>
          </figure>
        </div>
        {showNotes && (
          <Note>
            Two short quotes: one from a participant (safety/usefulness), one from an organization (credibility of practice). Text‑only; keep it brief.
          </Note>
        )}
      </SectionBand>

      {/* —————————————————————————————————————————————
          INVITATION — soft close
         ————————————————————————————————————————————— */}
      <SectionBand ruleTop title={<EditorialHeading as="h2" variant="section">Next steps</EditorialHeading>}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <EditorialHeading as="h3" variant="heading">Continue exploring</EditorialHeading>
            <div className="ph-sm bg-neutral-100 w-4/5" aria-label="Closing line (friendly, human)" />
          </div>
          <CTAGroup
            layout="row"
            align="end"
            primary="View portfolio"
            secondary="Explore offerings"
            onPrimary={toPortfolio}
            onSecondary={toOfferings}
          />
        </div>
        {showNotes && (
          <Note>
            Soft close. One calm line, then two routes: Portfolio (artistic depth) and Offerings (methods + outcomes). Keep it on-brand and unsalesy.
          </Note>
        )}
      </SectionBand>
    </div>
  );
}
