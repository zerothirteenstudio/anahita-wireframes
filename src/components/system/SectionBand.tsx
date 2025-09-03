import React from 'react';
import clsx from 'clsx';

/**
 * SectionBand — rule-separated section container.
 *
 * Renders a block with consistent vertical padding and optional
 * thin rules at the top and/or bottom.
 *
 * Usage (example):
 *   <SectionBand title={<EditorialHeading variant="section" as="h2">Intro</EditorialHeading>}>
 *     ...content...
 *   </SectionBand>
 */
export interface SectionBandProps {
  title?: React.ReactNode;
  note?: React.ReactNode;
  children: React.ReactNode;
  ruleTop?: boolean;
  ruleBottom?: boolean;
  className?: string;
}

export default function SectionBand({
  title,
  note,
  children,
  ruleTop = false,
  ruleBottom = false,
  className = '',
}: SectionBandProps) {
  return (
    <section
      className={clsx(
        'band',
        ruleTop && 'band-rule-top',
        ruleBottom && 'band-rule-bottom',
        className,
      )}
    >
      {title ? <div className="mb-2">{title}</div> : null}
      {children}
      {note ? <div className="note mt-2">{note}</div> : null}
    </section>
  );
}

// Example (commented):
// <SectionBand ruleTop ruleBottom title={<EditorialHeading as="h2" variant="section">Overview</EditorialHeading>}>
//   <p className="body measure">Body text…</p>
// </SectionBand>

