import React from "react";
import {
  Box,
  SectionTitle,
  Note,
  Placeholder,
  Button,
  CTAGroup,
} from "../components/ui";

export default function ProjectDetail({ showNotes, goTo }) {
  const goBackToPortfolio = () =>
    typeof goTo === "function" && goTo("Portfolio");
  const goToContact = () => typeof goTo === "function" && goTo("Contact");
  const goToOfferings = () => typeof goTo === "function" && goTo("Offerings");

  return (
    <div className="sections sections-roomy">
      {/* Page heading */}
      <div className="mb-3">
        <h1 className="page-title">Project</h1>
      </div>

      {/* PROJECT HERO — overlay meta on media */}
      <Box title="Project">
        <div className="relative max-w-6xl mx-auto mb-8 md:mb-10">

          {/* Media plate (simple) */}
          <div className="relative w-full aspect-[16/9]">
            <div className="absolute inset-0">
              <Placeholder className="w-full h-full border-[0.5px]" label="Featured video (poster) / hero image" />
            </div>
          </div>

          {/* Info under plate (title, meta, logline) */}
          <div className="mt-6 grid md:grid-cols-[1fr,1.5fr] gap-6 items-start">
            {/* Left: small label / project name (mono, caps) */}
            <div>
              <div className="mono caps legend text-neutral-700">Project Type</div>
            </div>

            {/* Right: stacked details (title, italic logline, simple meta) */}
            <div className="space-y-2">
              <div className="heading">Title (One Line)</div>
              <div className="italic text-neutral-700">One‑sentence logline placeholder that names people/context.</div>
              <div className="legend space-y-1">
                <div><span className="mono caps">Genre</span>: Documentary</div>
                <div><span className="mono caps">Year</span>: 2024</div>
                <div><span className="mono caps">Runtime</span>: 96 min</div>
              </div>
            </div>
          </div>
        </div>

        {showNotes && (
          <Note>
            A. Project Overview — 16:9 cover with title, year/type, and a one‑line logline placed beneath. Orient visitors in one glance. All fields come from the Projects CMS.
          </Note>
        )}
      </Box>

      {/* BODY — Left: Narrative; Right: Quick Facts + Collaborators (sticky) */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-6 md:gap-8 items-start">
        {/* LEFT */}
        <Box title="Narrative" id="project-statement">
          <div className="space-y-3">
            <SectionTitle>Short Description (1–2 sentences)</SectionTitle>
            <div className="ph-sm bg-neutral-100" />

            <SectionTitle>Full Statement (2–3 short paragraphs)</SectionTitle>
            <div className="ph-xl bg-neutral-100" />
          </div>
          {showNotes && (
            <Note>
              C. Short Description + D. Full Statement — Plain, compact 1–2 sentences, then 2–3 short paragraphs on concept, process, themes, and links to wider practice.
            </Note>
          )}
        </Box>

        {/* RIGHT (sticky) */}
        <aside className="space-y-4 md:sticky md:top-4">
          <Box title="Quick Facts">
            <ul className="space-y-4 text-[0.8125rem]">
              <li>
                <div className="legend text-neutral-500 mb-1">Medium / Type</div>
                <div className="ph-xs bg-neutral-100" />
              </li>
              <li>
                <div className="legend text-neutral-500 mb-1">
                  Collaborators / Institutions
                </div>
                <div className="ph-xs bg-neutral-100" />
              </li>
              <li>
                <div className="legend text-neutral-500 mb-1">
                  Venue / Festival / Event
                </div>
                <div className="ph-xs bg-neutral-100" />
              </li>
              <li>
                <div className="legend text-neutral-500 mb-1">Supporters / Partners</div>
                <div className="ph-xs bg-neutral-100" />
              </li>
              <li>
                <div className="legend text-neutral-500 mb-1">Tags</div>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block h-5 w-14 bg-neutral-200" />
                  <span className="inline-block h-5 w-20 bg-neutral-200" />
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                variant="link"
                onClick={() =>
                  document
                    .getElementById("project-statement")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Read project statement ↓
              </Button>
            </div>
            {showNotes && (
              <Note>B. Quick Facts — Medium/type, collaborators, venue/festival/event, tags/themes. Curators and funders scan here first.</Note>
            )}
          </Box>

          <Box title="Collaborators">
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-1">
                  <div className="ph-xs bg-neutral-100 w-3/4" />
                  <div className="ph-xs bg-neutral-100 w-1/2" />
                </div>
              ))}
            </div>
            {showNotes && (
              <Note>G. Collaborators — Names, roles, optional links. Recognizes the collective nature of the work.</Note>
            )}
          </Box>
        </aside>
      </div>

      {/* IMPACT / RECOGNITION */}
      <Box title="Impact &amp; Recognition">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <SectionTitle>Outcomes</SectionTitle>
            <div className="ph-md bg-neutral-100" />
            <div className="ph-md bg-neutral-100" />
          </div>
          <div className="space-y-3">
            <SectionTitle>Awards / Festivals / Press</SectionTitle>
            <div className="ph-sm bg-neutral-100" />
            <div className="ph-sm bg-neutral-100" />
          </div>
        </div>
        {showNotes && (
          <Note>E. Impact & Recognition — Screenings, exhibitions, festivals, awards, partners, press. Optional; keep curated.</Note>
        )}
      </Box>

      {/* MEDIA GALLERY */}
      <Box title="Media Gallery">
        <div className="rule-x pt-5">
          <div
            className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] pb-3"
          >
            <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
            {[
              { aspect: 'aspect-[3/2]' },
              { aspect: 'aspect-[4/3]' },
              { aspect: 'aspect-square' },
              { aspect: 'aspect-[2/3]' }, // portrait
              { aspect: 'aspect-[16/9]' },
              { aspect: 'aspect-[3/2]' },
              { aspect: 'aspect-[4/3]' },
              { aspect: 'aspect-[2/3]' },
            ].map((cfg, i) => (
              <figure
                key={i}
                className="snap-start shrink-0 w-[34vw] sm:w-[27vw] md:w-[21vw] lg:w-[18vw] xl:w-[14vw]"
              >
                <div className={`relative w-full ${cfg.aspect} bg-neutral-200`}>
                  <button
                    className="absolute inset-0 w-full h-full text-left focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutral-500"
                    aria-label={`Open image ${i + 1}`}
                  >
                    <Placeholder className="w-full h-full border-[0.5px]" label={`Image ${i + 1}`} />
                  </button>
                </div>
                <figcaption className="legend text-neutral-600 mt-2 max-w-[70%] opacity-70">
                  <div className="inline-block h-3 w-3/4 bg-neutral-300" aria-hidden="true" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        {showNotes && (
          <Note>F. Media Gallery — Stills, posters, documentation with short captions and alt text. Complements the written statement.</Note>
        )}
      </Box>

      {/* RELATED PROJECTS */}
      <Box title="Related Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative w-full aspect-[16/9]">
              <button
                className="absolute inset-0 w-full h-full text-left focus:outline-none"
                aria-label={`Open related project ${i + 1}`}
              >
                <Placeholder
                  className="w-full h-full border-[0.5px]"
                  label={`Related project ${i + 1}`}
                />
              </button>
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>H. Related Projects — 2–3 links by theme/format/collaborators. Shows continuity and evolution.</Note>
        )}
      </Box>

      {/* Prev/Next (intention only; wire up in parent later) */}
      <div className="flex items-center justify-between">
        <Button variant="link" aria-label="Previous project">
          ← Previous
        </Button>
        <Button variant="link" aria-label="Next project">
          Next →
        </Button>
      </div>

      {/* Invitation */}
      <Box title="Closing">
        <CTAGroup
          align="between"
          primary="Get in touch"
          secondary="View portfolio"
          onPrimary={goToContact}
          onSecondary={goBackToPortfolio}
        >
          <SectionTitle>Continue the conversation</SectionTitle>
          {showNotes && (
            <Note>
              Closing Invitation — One calm line that points to Contact or back to Portfolio. Keeps people engaged without being promotional.
            </Note>
          )}
        </CTAGroup>
      </Box>
    </div>
  );
}
