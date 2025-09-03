import React from "react";
import { Placeholder, Note, Button, Tag, CTAGroup } from "../components/ui";
import { SectionBand, EditorialHeading, Plate } from "../components/system";

/* HERO: Cinematic band using system Plate */
function HeroCinematic({ onPrimary, onSecondary }) {
  return (
    <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Hero</EditorialHeading>}>
      <Plate variant="border" aspect="21x9">
        <div className="absolute inset-0">
          <Placeholder className="absolute inset-0 w-full h-full border-0" label="Cinematic still / short loop (21:9)" />
        </div>
        {/* Copy overlay (subtle; keep CTAs here for Services) */}
        <div className="absolute inset-0 p-4 md:p-8 flex items-end">
          <div className="max-w-2xl space-y-3 text-neutral-900">
            <h1 className="heading">I hold space for transformation and creation</h1>
            <p className="body measure">
              Work grounded in power-sharing, consent, and care—meeting teams,
              communities, and institutions where they are.
            </p>
            <CTAGroup
              layout="row"
              align="start"
              primary="Start a conversation"
              secondary="View selected work"
              onPrimary={onPrimary}
              onSecondary={onSecondary}
              gap="sm"
            />
          </div>
        </div>
      </Plate>
    </SectionBand>
  );
}

/* -------------------------------
   OFFERING CARD
-------------------------------- */
function OfferingCard({ title = "Offering", onClick }) {
  return (
    <article
      className={`space-y-2 ${onClick ? "cursor-pointer" : ""}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) =>
        onClick && (e.key === "Enter" || e.key === " ") && onClick()
      }
      aria-label={onClick ? `Open ${title}` : undefined}
    >
      <EditorialHeading as="h3" variant="section">{title}</EditorialHeading>
      <div className="ph-sm bg-neutral-100" /> {/* 1–2 line intro */}
      <div className="ph-md bg-neutral-100" /> {/* short description */}
      <Plate variant="grey" aspect="3x2">
        <Placeholder className="absolute inset-0 w-full h-full border-0" label="Optional image / icon" />
      </Plate>
    </article>
  );
}

function MethodChip({ children }) {
  return <Tag>{children}</Tag>;
}

/* -------------------------------
   MAIN PAGE
-------------------------------- */
export default function Offerings({ showNotes, goTo }) {
  const toContact = () => typeof goTo === "function" && goTo("Contact");
  const toPortfolio = () => typeof goTo === "function" && goTo("Portfolio");

  return (
    <div className="sections sections-roomy">
      {/* Page heading */}
      <div className="mb-3">
        <h1 className="page-title">Offerings</h1>
        <p className="lede measure text-neutral-700">
          Workshops, facilitation, and collaboration — grounded in consent and care.
        </p>
      </div>
      {/* HERO */}
      <HeroCinematic onPrimary={toContact} onSecondary={toPortfolio} />
      {showNotes && (
        <Note>
          Wide visual with overlayed text + one primary action. Keep copy concise; the image sets the tone.
        </Note>
      )}

      {/* OFFERINGS */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Offerings</EditorialHeading>}>
        <div className="grid md:grid-cols-3 gap-4">
          <OfferingCard title="Workshops" onClick={toContact} />
          <OfferingCard title="Facilitation" onClick={toContact} />
          <OfferingCard
            title="Consulting / Collaboration"
            onClick={toContact}
          />
        </div>
        {showNotes && (
          <Note>
            Each card includes: a concise intro, a short description of
            outcomes, and an optional visual.
          </Note>
        )}
      </SectionBand>

{/* METHODS & APPROACH */}
<SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Methods & Approach</EditorialHeading>}>
  <div className="space-y-6">
    {/* Lead block */}
    <div className="space-y-2">
      <EditorialHeading as="h3" variant="heading">Power-sharing</EditorialHeading>
      <div className="ph-md bg-neutral-100 w-5/6" />
      <div className="ph-sm bg-neutral-100 w-2/3" />
    </div>

    {/* Mid row: two side blocks */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <EditorialHeading as="h3" variant="heading">Somatic attunement</EditorialHeading>
        <div className="ph-md bg-neutral-100" />
        <div className="ph-sm bg-neutral-100 w-4/5" />
      </div>
      <div className="space-y-2">
        <EditorialHeading as="h3" variant="heading">Narrative work</EditorialHeading>
        <div className="ph-md bg-neutral-100" />
        <div className="ph-sm bg-neutral-100 w-3/4" />
      </div>
    </div>

    {/* Closing block */}
    <div className="space-y-2 max-w-md">
      <EditorialHeading as="h3" variant="heading">Conflict transformation</EditorialHeading>
      <div className="ph-md bg-neutral-100" />
      <div className="ph-sm bg-neutral-100 w-2/3" />
    </div>

    {/* Practices tags */}
    <div className="pt-4 rule-x">
      <div className="text-xs text-neutral-500 mb-2">Practices I draw from</div>
      <div className="flex flex-wrap gap-2 text-[11px] text-neutral-700">
        {[
          "Process Work (Jungian)",
          "Somatics / Movement",
          "Storytelling",
          "Theatre of the Oppressed",
          "Political Theory",
          "Philosophy",
          "Dream work",
          "Humor / Comedy",
        ].map((m) => (
          <Tag key={m}>{m}</Tag>
        ))}
      </div>
    </div>
  </div>

  {showNotes && (
    <Note>
      Staggered layout: one wide lead block, two mid-sized side blocks, and a shorter closing block. 
      Feels more editorial, less like a grid. Tags underline breadth without heavy text.
    </Note>
  )}
</SectionBand>

      {/* OUTCOMES */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Outcomes & voices</EditorialHeading>}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">What changes</EditorialHeading>
            <div className="ph-sm bg-neutral-100" />
            <div className="ph-sm bg-neutral-100" />
          </div>
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">In participants’ words</EditorialHeading>
            <div className="ph-sm bg-neutral-100" />
            <div className="ph-sm bg-neutral-100" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Two or three meaningful shifts, plus one or two short quotations.
          </Note>
        )}
      </SectionBand>

      {/* PRACTICALITIES */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Practicalities</EditorialHeading>}>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Formats</EditorialHeading>
            <div className="ph-sm bg-neutral-100" />
          </div>
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Languages</EditorialHeading>
            <div className="ph-sm bg-neutral-100" />
          </div>
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Scheduling & access</EditorialHeading>
            <div className="ph-sm bg-neutral-100" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Clear logistics for funders and organizers: formats, languages,
            lead times, and access practices.
          </Note>
        )}
      </SectionBand>

      {/* CLOSING */}
      <SectionBand ruleTop title={<EditorialHeading as="h2" variant="section">Invitation</EditorialHeading>}>
        <div className="grid md:grid-cols-[1fr,1fr] gap-4 items-center">
          <Plate variant="grey" aspect="3x2">
            <Placeholder className="absolute inset-0 w-full h-full border-0" label="Quiet still / empty room / hands in circle (optional)" />
          </Plate>
          <div className="flex flex-col items-end gap-3">
            <div className="ph-sm bg-neutral-100" />
            <Button variant="rule" onClick={toContact}>
              Get in touch
            </Button>
          </div>
        </div>
        {showNotes && (
          <Note>A single, gentle call to reach out. Keep it focused.</Note>
        )}
      </SectionBand>
    </div>
  );
}
