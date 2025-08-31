import React from "react";

export default function Placeholder({ label }) {
  return (
    <div className="w-full ph-md border border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-xs text-neutral-500">
      {label}
    </div>
  );
}
