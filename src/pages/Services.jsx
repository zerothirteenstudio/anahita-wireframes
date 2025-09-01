import React from "react";
import {
  Box,
  Placeholder,
  SectionTitle,
  Note,
  Button,
  Tag,
  CTAGroup,
} from "../components/ui";

/* -------------------------------
   HERO (cinematic band component)
-------------------------------- */
function HeroCinematic({
  align = "left", // "left" | "center"
  withVideo = false,
  onPrimary,
  onSecondary,
}) {
  const alignWrap =
    align === "center"
      ? "items-center text-center"
      : "items-end text-left";

  return (
    <section className="relative overflow-hidden rounded-md">
      {/* Media */}
      <div className="aspect-[21/9] w-full">
        {withVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="" type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full">
            <Placeholder
              className="h-full w-full"
              label="Cinematic still / short loop (16:9)"
            />
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

      {/* Copy */}
      <div className={`absolute inset-0 flex ${alignWrap} p-4 md:p-8`}>
        <div className="max-w-2xl space-y-3">
          <h1 className="text-white text-xl md:text-3xl font-medium tracking-tight">
            I hold space for transformation and creation
          </h1>
          <p className="hidden sm:block text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
            Work grounded in power-sharing, consent, and care—meeting teams,
            communities, and institutions where they are.
          </p>
          <div
            className={`${align === "center" ? "justify-center" : ""} pt-1`}
          >
            <CTAGroup
              layout="row"
              align={align === "center" ? "center" : "start"}
              primary="Begin a conversation"
              secondary="See selected work"
              onPrimary={onPrimary}
              onSecondary={onSecondary}
              gap="sm"
            />
          </div>
        </div>
      </div>
    </section>
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
      <SectionTitle>{title}</SectionTitle>
      <div className="ph-sm bg-neutral-100 rounded-sm" /> {/* 1–2 line intro */}
      <div className="ph-md bg-neutral-100 rounded-sm" /> {/* short description */}
      <Placeholder className="ph-sm" label="Optional image / icon" />
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
    <div className="space-y-6">
      {/* HERO */}
      <Box title="Hero">
        <HeroCinematic
          align="left"
          withVideo={false}
          onPrimary={toContact}
          onSecondary={toPortfolio}
        />
        {showNotes && (
          <Note>
            Wide visual with overlayed text + one primary action. Keep copy
            concise; the image sets the tone.
          </Note>
        )}
      </Box>

      {/* OFFERINGS */}
      <Box title="Offerings">
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
      </Box>

{/* METHODS & APPROACH */}
<Box title="Methods & Approach">
  <div className="space-y-6">
    {/* Lead block */}
    <div className="space-y-2">
      <SectionTitle>Power-sharing</SectionTitle>
      <div className="ph-md bg-neutral-100 rounded-sm w-5/6" />
      <div className="ph-sm bg-neutral-100 rounded-sm w-2/3" />
    </div>

    {/* Mid row: two side blocks */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <SectionTitle>Somatic attunement</SectionTitle>
        <div className="ph-md bg-neutral-100 rounded-sm" />
        <div className="ph-sm bg-neutral-100 rounded-sm w-4/5" />
      </div>
      <div className="space-y-2">
        <SectionTitle>Narrative work</SectionTitle>
        <div className="ph-md bg-neutral-100 rounded-sm" />
        <div className="ph-sm bg-neutral-100 rounded-sm w-3/4" />
      </div>
    </div>

    {/* Closing block */}
    <div className="space-y-2 max-w-md">
      <SectionTitle>Conflict transformation</SectionTitle>
      <div className="ph-md bg-neutral-100 rounded-sm" />
      <div className="ph-sm bg-neutral-100 rounded-sm w-2/3" />
    </div>

    {/* Practices tags */}
    <div className="pt-4 border-t border-dashed border-neutral-300">
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
</Box>

      {/* OUTCOMES */}
      <Box title="Outcomes & voices">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <SectionTitle>What changes</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
          <div className="space-y-2">
            <SectionTitle>In participants’ words</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Two or three meaningful shifts, plus one or two short quotations.
          </Note>
        )}
      </Box>

      {/* PRACTICALITIES */}
      <Box title="Practicalities">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <SectionTitle>Formats</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
          <div className="space-y-2">
            <SectionTitle>Languages</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
          <div className="space-y-2">
            <SectionTitle>Scheduling & access</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-sm" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Clear logistics for funders and organizers: formats, languages,
            lead times, and access practices.
          </Note>
        )}
      </Box>

      {/* CLOSING */}
      <Box title="Invitation">
        <div className="grid md:grid-cols-[1fr,1fr] gap-4 items-center">
          <Placeholder
            className="ph-md"
            label="Quiet still / empty room / hands in circle (optional)"
          />
          <div className="flex flex-col items-end gap-3">
            <div className="ph-sm bg-neutral-100 rounded-sm" />
            <Button variant="primary" onClick={toContact}>
              Begin a conversation
            </Button>
          </div>
        </div>
        {showNotes && (
          <Note>A single, gentle call to reach out. Keep it focused.</Note>
        )}
      </Box>
    </div>
  );
}