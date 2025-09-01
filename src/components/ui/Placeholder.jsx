import React from "react";

/**
 * Use with ph-* classes for height:
 *  ph-md | ph-lg | ph-xl | ph-2xl
 */
export default function Placeholder({ label = "Placeholder", className = "" }) {
  return (
    <div
      className={`border border-dashed border-neutral-300 flex items-center justify-center text-xs text-neutral-500 ${className}`}
      style={{ borderRadius: "var(--radius-md)", background: "white" }}
      aria-label={label}
    >
      {label}
    </div>
  );
}