import React from 'react';
import clsx from 'clsx';

/**
 * EditorialHeading — semantic heading tag with visual variants.
 *
 * variant "page" => .page-title
 * variant "heading" => .heading
 * variant "section" => .section-title
 */
export interface EditorialHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  variant?: 'page' | 'heading' | 'section';
  className?: string;
  children: React.ReactNode;
}

export default function EditorialHeading({
  as = 'h2',
  variant = 'heading',
  className = '',
  children,
}: EditorialHeadingProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  const variantClass =
    variant === 'page'
      ? 'page-title'
      : variant === 'section'
      ? 'section-title'
      : 'heading';
  return <Tag className={clsx(variantClass, className)}>{children}</Tag>;
}

// Example:
// <EditorialHeading as="h1" variant="page">Portfolio</EditorialHeading>
// <EditorialHeading as="h2" variant="heading">Selected Work</EditorialHeading>
// <EditorialHeading as="h3" variant="section">Overview</EditorialHeading>

