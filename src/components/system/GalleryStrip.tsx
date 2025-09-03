import React from 'react';
import clsx from 'clsx';
import Plate from './Plate';

type Aspect = '16x9' | '3x2' | '4x3' | '2x3' | '1x1';

export interface GalleryItem {
  id: string | number;
  aspect: Aspect;
  caption?: React.ReactNode;
}

export interface GalleryStripProps {
  items: GalleryItem[];
  tileWidth?: Partial<Record<'base' | 'sm' | 'md' | 'lg' | 'xl', string>>;
  className?: string;
  onActivateItem?: (item: GalleryItem) => void;
}

const defaultWidths = {
  base: 'w-[34vw]',
  sm: 'sm:w-[27vw]',
  md: 'md:w-[21vw]',
  lg: 'lg:w-[18vw]',
  xl: 'xl:w-[14vw]',
};

export default function GalleryStrip({
  items,
  tileWidth,
  className = '',
  onActivateItem,
}: GalleryStripProps) {
  const widths = { ...defaultWidths, ...tileWidth } as typeof defaultWidths;
  return (
    <div className={clsx('rule-x pt-5', className)}>
      <div
        className={clsx(
          'no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth',
          '[-ms-overflow-style:none] [scrollbar-width:none] pb-3',
        )}
      >
        {items.map((it) => (
          <figure
            key={it.id}
            className={clsx('snap-start shrink-0', widths.base, widths.sm, widths.md, widths.lg, widths.xl)}
          >
            <Plate variant="border" aspect={it.aspect} as="figure" caption={it.caption}>
              <button
                className={clsx('absolute inset-0 text-left focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutral-500')}
                onClick={() => onActivateItem?.(it)}
                aria-label={`Open image ${it.id}`}
              />
            </Plate>
          </figure>
        ))}
      </div>
    </div>
  );
}

// Example:
// <GalleryStrip items={[
//   { id: 1, aspect: '3x2', caption: 'Caption text' },
//   { id: 2, aspect: '4x3' },
// ]} />

