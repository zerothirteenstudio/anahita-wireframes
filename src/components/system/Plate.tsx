import React from 'react';
import clsx from 'clsx';

type Variant = 'border' | 'grey' | 'cargo';
type Aspect = '16x9' | '21x9' | '3x1' | '3x2' | '4x3' | '2x3' | '1x1';

export interface PlateProps {
  variant?: Variant;
  aspect?: Aspect;
  children?: React.ReactNode; // overlay controls/content
  caption?: React.ReactNode;
  as?: 'figure' | 'div';
  className?: string;
}

const aspectClass: Record<Aspect, string> = {
  '16x9': 'aspect-[16/9]',
  '21x9': 'aspect-[21/9]',
  '3x1': 'aspect-[3/1]',
  '3x2': 'aspect-[3/2]',
  '4x3': 'aspect-[4/3]',
  '2x3': 'aspect-[2/3]',
  '1x1': 'aspect-square',
};

export default function Plate({
  variant = 'border',
  aspect = '16x9',
  as = 'figure',
  caption,
  children,
  className = '',
}: PlateProps) {
  const Tag = (as as unknown) as keyof JSX.IntrinsicElements;
  const surface = clsx(
    'relative w-full overflow-hidden',
    aspectClass[aspect],
    'plate',
    variant === 'grey' && 'plate--grey',
    variant === 'cargo' && 'cargo-plate',
  );

  const node = (
    <div className={surface}>
      {/* Focus support for overlay buttons */}
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );

  if (as === 'figure') {
    return (
      <figure className={clsx('space-y-2', className)}>
        {node}
        {caption ? <figcaption className="legend">{caption}</figcaption> : null}
      </figure>
    );
  }
  return <div className={className}>{node}</div>;
}

// Example:
// <Plate variant="border" aspect="16x9" caption="Still from …" />
// <Plate variant="grey" aspect="3x2" />
// <Plate variant="cargo" aspect="1x1"> <button className="absolute inset-0" /> </Plate>
