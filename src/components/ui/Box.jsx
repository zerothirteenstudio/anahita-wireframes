import React from "react";

export default function Box({ title, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}