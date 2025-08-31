import React from "react";
import Box from "../components/ui/Box.jsx";
import Placeholder from "../components/ui/Placeholder.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Note from "../components/ui/Note.jsx";

export default function ServicesWireframe({ showNotes }) {
  return (
    <div className="space-y-6">
      {/* 1. Service Blocks (x3) */}
      <Box title="Services">
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <SectionTitle>Service Title</SectionTitle>
              <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* Short Intro */}
              <div className="ph-md bg-neutral-100 rounded-2xl" /> {/* Detailed Description */}
              <div className="ph-md bg-neutral-100 rounded-2xl" />
              <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* Optional image/icon */}
            </div>
          ))}
        </div>
        {showNotes && (
          <Note>
            Each service module includes name, short intro, detailed description (methods,
            outcomes, value for audience), and optional icon/image.
          </Note>
        )}
      </Box>

      {/* 2. Methods / Approach Block */}
      <Box title="Methods / Approach">
        <div className="ph-md bg-neutral-100 rounded-2xl" />
        {showNotes && (
          <Note>
            Concise description of overall philosophy, frameworks: trauma-informed,
            participatory, intersectional, rooted in decolonial practices.
          </Note>
        )}
      </Box>

      {/* 3. Impact & Results */}
      <Box title="Impact & Results">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <SectionTitle>Outcomes</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
          </div>
          <div className="space-y-2">
            <SectionTitle>Testimonials / Quotes</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
            <div className="ph-sm bg-neutral-100 rounded-2xl" />
          </div>
        </div>
        {showNotes && (
          <Note>
            Use authentic quotes (1–2 per service). Attribution optional. Outcomes may include
            transformation stories, growth metrics, or key results.
          </Note>
        )}
      </Box>

      {/* 4. Booking / Inquiry */}
      <Box title="Booking / Inquiry">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Ready to book?</SectionTitle>
            <div className="ph-sm bg-neutral-100 rounded-2xl" />{" "}
            {/* Short explanation of next steps */}
          </div>
          <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">
            Book a Session
          </button>
        </div>
      </Box>
    </div>
  );
}