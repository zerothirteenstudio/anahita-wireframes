import React from "react";
import { Button, Box, Tag, SectionTitle, Note, Placeholder } from "../components/ui";

export default function Contact({ showNotes }) {
  return (
    <div className="space-y-6">
      <Box title="Contact Form">
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border border-dashed border-neutral-400 rounded-2xl px-3 py-2 text-sm" placeholder="Name" />
          <input className="border border-dashed border-neutral-400 rounded-2xl px-3 py-2 text-sm" placeholder="Email" />
          <input className="md:col-span-2 border border-dashed border-neutral-400 rounded-2xl px-3 py-2 text-sm" placeholder="Subject" />
          <textarea className="md:col-span-2 border border-dashed border-neutral-400 rounded-2xl px-3 py-2 text-sm ph-lg" placeholder="Message" />
          <div className="md:col-span-2 flex gap-2">
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Send</button>
            <button className="border border-neutral-400 rounded-2xl px-3 py-2 text-sm">Book a Call</button>
          </div>
        </div>
        {showNotes && (
          <Note>Add spam protection & privacy notice. Different routes for inquiries are optional.</Note>
        )}
      </Box>

      <Box title="Direct / Social">
        <div className="grid md:grid-cols-3 gap-4">
          <Placeholder label="Email / Studio address" />
          <Placeholder label="Social links" />
          <Placeholder label="Newsletter / RSS" />
        </div>
      </Box>
    </div>
  );
}
