import React from "react";

/**
 * Use with ph-* classes for height:
 *  ph-md | ph-lg | ph-xl | ph-2xl
 */
export default function Placeholder({ label = "Placeholder", className = "" }) {
  return (
    <div
      className={`border border-brand-border bg-neutral-50 flex items-center justify-center text-xs text-neutral-500 ${className}`}
      style={{ borderRadius: 0, background: "#F3F4F6" }}
      aria-label={label}
    >
      {label}
    </div>
  );
}
