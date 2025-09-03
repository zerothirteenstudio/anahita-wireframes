import React, { useCallback } from "react";
import { Button, Note, Placeholder } from "../components/ui";
import { SectionBand, EditorialHeading, Plate } from "../components/system";

export default function Contact({ showNotes }) {
  const email = "hello@example.com"; // replace with real address when ready
  const copyEmail = useCallback(() => {
    navigator.clipboard?.writeText(email).catch(() => {});
  }, [email]);

  return (
    <div className="sections sections-roomy">
      {/* Page heading */}
      <div className="mb-3">
        <h1 className="page-title">Contact</h1>
        <p className="lede measure text-neutral-700">Start a conversation. I read every message.</p>
      </div>

      {/* Email — primary route (no form) */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Email</EditorialHeading>}>
        <div className="stack">
          <div>
            <a href={`mailto:${email}`} className="page-title mono">{email}</a>
          </div>
          <div className="caption muted">Please include your context, timeframe, and any access needs.</div>
          <div className="flex gap-2">
            <Button variant="rule" onClick={copyEmail}>Copy address</Button>
            <Button className="btn-link caption" onClick={() => (window.location.href = `mailto:${email}`)}>Open mail app →</Button>
          </div>
        </div>
        {showNotes && (
          <Note>No form per client preference. Simple mailto keeps the flow human; ensure the address is protected (obfuscation/antispam) on launch.</Note>
        )}
      </SectionBand>

      {/* Direct / Social */}
      <SectionBand ruleBottom title={<EditorialHeading as="h2" variant="section">Direct / Social</EditorialHeading>}>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Studio</EditorialHeading>
            <Plate variant="grey" aspect="3x2">
              <Placeholder className="absolute inset-0 w-full h-full border-0" label="Address / City" />
            </Plate>
          </div>
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Social</EditorialHeading>
            <ul className="legend mono caps space-y-1">
              <li><a className="btn-link" href="#">Instagram</a></li>
              <li><a className="btn-link" href="#">Vimeo</a></li>
              <li><a className="btn-link" href="#">Letterboxd</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <EditorialHeading as="h3" variant="heading">Newsletter / RSS</EditorialHeading>
            <Plate variant="grey" aspect="3x2">
              <Placeholder className="absolute inset-0 w-full h-full border-0" label="Subscribe placeholder" />
            </Plate>
          </div>
        </div>
      </SectionBand>
    </div>
  );
}
