import React from "react";

export default function Footer() {
  return (
    <div className="text-[11px] text-neutral-500 py-4 flex items-center justify-between">
      <div>© Natascha {new Date().getFullYear()}</div>
      <div className="flex gap-3">
        <span>Impressum</span>
        <span>Datenschutz</span>
      </div>
    </div>
  );
}
