import React from 'react';
import clsx from 'clsx';

/**
 * MetaList — small stacked list for meta (type/year/tags).
 * Labels use .mono + .caps and values render to the right.
 */
export interface MetaItem {
  label?: React.ReactNode;
  value?: React.ReactNode;
}

export interface MetaListProps {
  items: MetaItem[];
  className?: string;
}

export default function MetaList({ items, className = '' }: MetaListProps) {
  return (
    <ul className={clsx('space-y-1 legend', className)}>
      {items.map((it, idx) => (
        <li key={idx} className="flex gap-2">
          {it.label ? <span className="mono caps">{it.label}</span> : null}
          {it.value ? <span>{it.value}</span> : null}
        </li>
      ))}
    </ul>
  );
}

// Example:
// <MetaList items={[
//   { label: 'Year', value: '2024' },
//   { label: 'Type', value: 'Documentary' },
// ]} />

