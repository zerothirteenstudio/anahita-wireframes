import React from "react";
import Nav from "./Nav";

export default function Header({ currentPage, setPage }) {
  return (
    <header className="flex items-center justify-between py-3 border-b border-brand-border">
      {/* Logo + Title on the left */}
      <div className="flex items-center gap-2">
        <div className="font-medium tracking-wide text-[13px] uppercase">Anahita</div>
      </div>

      {/* Center Nav */}
      <Nav currentPage={currentPage} setPage={setPage} />

      {/* Right side controls */}
      <div className="flex items-center gap-3 text-[12px] uppercase tracking-wide">
        <div className="text-xs">EN / DE</div>
      </div>
    </header>
  );
}
