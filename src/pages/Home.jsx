import React from "react";
import Box from "../components/ui/Box.jsx";
import Placeholder from "../components/ui/Placeholder.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Note from "../components/ui/Note.jsx";

export default function Home({ showNotes }) {
  return (
    <div className="space-y-6">
      {/* A. Hero / Intro Section */}
      <Box title="A. Hero Test / Intro">
        <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-stretch">
          <div className="ph-xl border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
            Hi-res image / short looping video (mobile/desktop optimized)
          </div>
          <div className="flex flex-col gap-3">
            <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* Name */}
            <div className="ph-md bg-neutral-100 rounded-2xl" /> {/* Tagline */}
            <div className="flex flex-wrap gap-2">
              <button className="border border-neutral-400 rounded-2xl px-3 py-1 text-sm">View Portfolio</button>
              <button className="border border-neutral-400 rounded-2xl px-3 py-1 text-sm">See Services</button>
            </div>
            {showNotes && (
              <Note>Hero carries name + concise positioning. Include alt text and captions for any video.</Note>
            )}
          </div>
        </div>
      </Box>

      {/* B. Portfolio / Featured Project Highlight */}
      <Box title="B. Featured Project Highlight">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-4 items-start">
          <div className="ph-lg border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
            Thumbnail / key still (with descriptive alt)
          </div>
          <div className="space-y-2">
            <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* Project title */}
            <div className="ph-md bg-neutral-100 rounded-2xl" /> {/* 1–2 sentence impact summary */}
            <div className="flex gap-2">
              <button className="border border-neutral-400 rounded-2xl px-3 py-1 text-sm">View Project</button>
              <button className="border border-neutral-400 rounded-2xl px-3 py-1 text-sm">All Projects</button>
            </div>
          </div>
        </div>
        {showNotes && <Note>Pick the most relevant/impressive work. Use a CMS “Featured” flag.</Note>}
      </Box>

      {/* C. Services Snapshot */}
      <Box title="C. Services Snapshot">
        <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-center">
          <div className="space-y-2">
            <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* 1–2 line description */}
            {showNotes && <Note>Keep it crisp. Mention facilitation, consulting, workshops.</Note>}
          </div>
          <div className="flex gap-2 justify-start md:justify-end">
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">See Services</button>
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Book Consultation</button>
          </div>
        </div>
      </Box>

      {/* D. Social & Press Mentions (or Testimonials) */}
      <Box title="D. Social & Press / Testimonials">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="ph-md border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
                Logo / Headline / Pull-quote
              </div>
              <div className="ph-xs bg-neutral-100 rounded-2xl" />
            </div>
          ))}
        </div>
        {showNotes && <Note>3–5 items are enough. Alt text for logos; or swap to testimonial cards.</Note>}
      </Box>

      {/* F. Primary Call-to-Action */}
      <Box title="F. Primary Call-to-Action">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="space-y-1">
            <SectionTitle>Ready to collaborate?</SectionTitle>
            <Note>Options: Contact • Book Consultation • Join Workshop (if timely).</Note>
          </div>
          <div className="flex gap-2">
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Contact</button>
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Book a Consultation</button>
          </div>
        </div>
      </Box>
    </div>
  );
}
