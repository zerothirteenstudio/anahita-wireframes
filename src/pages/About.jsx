import React from "react";
import Box from "../components/ui/Box.jsx";
import Placeholder from "../components/ui/Placeholder.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";
import Note from "../components/ui/Note.jsx";

export default function About({ showNotes }) {
  return (
    <div className="space-y-6">
      {/* A. Hero Statement / Opening */}
      <Box title="A. Hero Statement / Opening">
        <div className="grid md:grid-cols-[1fr,2fr] gap-4 items-start">
          <Placeholder label="Professional Headshot (hi-res, warm)" />
          <div className="space-y-3">
            <div className="ph-sm bg-neutral-100 rounded-2xl" /> {/* 2–3 sentence intro */}
            <div className="ph-md bg-neutral-100 rounded-2xl" /> {/* Values-forward positioning */}
          </div>
        </div>
        {showNotes && <Note>Hero combines artistic + facilitation identity with values-forward positioning. Warm, genuine tone.</Note>}
      </Box>

      {/* B. Professional Bio / Story */}
      <Box title="B. Professional Bio / Story">
        <div className="space-y-3">
          <div className="ph-lg bg-neutral-100 rounded-2xl" /> {/* Origin + ancestry */}
          <div className="ph-lg bg-neutral-100 rounded-2xl" /> {/* Artistic journey → facilitation */}
          <div className="ph-lg bg-neutral-100 rounded-2xl" /> {/* Healing + community work */}
          <div className="ph-lg bg-neutral-100 rounded-2xl" /> {/* Creative practice ↔ social transformation */}
        </div>
        {showNotes && <Note>Main Bio: 300–500 words EN/DE. Short Bio: 100–150 words. Narrative connects art + facilitation + healing.</Note>}
      </Box>

      {/* C. Expertise & Methods */}
      <Box title="C. Expertise & Methods">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Facilitation approaches",
            "Somatic / Embodiment practices",
            "Integration of arts, activism & healing",
          ].map((m) => (
            <div key={m} className="space-y-2">
              <SectionTitle>{m}</SectionTitle>
              <div className="ph-md bg-neutral-100 rounded-2xl" />
            </div>
          ))}
        </div>
        {showNotes && <Note>Optional: use slider or visual component for methods. Clear, simple descriptions.</Note>}
      </Box>

      {/* D. Background & Credentials */}
      <Box title="D. Background & Credentials">
        <div className="grid md:grid-cols-3 gap-4">
          <Placeholder label="Education / Training" />
          <Placeholder label="Certifications / Specialized Training" />
          <Placeholder label="Languages / Experience Timeline" />
        </div>
        {showNotes && <Note>Include credentials, certifications, training, languages. Years active (since 15). press kit.</Note>}
      </Box>

      {/* E. Recognition & Impact */}
      <Box title="E. Recognition & Impact">
        <div className="grid md:grid-cols-3 gap-4">
          <Placeholder label="Awards / Exhibitions" />
          <Placeholder label="Institutional Collaborations / Partnerships" />
          <Placeholder label="Outcomes / Impact / Press Mentions" />
        </div>
        {showNotes && <Note>List awards, exhibitions, institutions, outcomes. Press mentions with dates/links. Supports credibility for funders & institutions.</Note>}
      </Box>

      {/* Bridge to Contact/Services */}
      <Box title="Contact Bridge">
        <div className="ph-sm bg-neutral-100 rounded-2xl" />
        {showNotes && <Note>Friendly transitional text bridging About → Services/Contact. Clear CTA.</Note>}
      </Box>
    </div>
  );
}
