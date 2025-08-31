import React from "react";

export default function Tag({ children }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-400 text-neutral-600">
      {children}
    </span>
  );
}
