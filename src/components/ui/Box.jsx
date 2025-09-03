import React from "react";

export default function Box({ title, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {title && (
        <div className="kicker mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
