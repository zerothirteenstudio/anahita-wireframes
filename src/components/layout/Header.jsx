import React from "react";
import Nav from "./Nav";

export default function Header({ currentPage, setPage }) {
  return (
    <header className="flex items-center justify-between py-3">
      {/* Logo + Title on the left */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border border-dashed border-neutral-400 flex items-center justify-center text-[10px] text-neutral-500">
          Logo
        </div>
        <div className="font-semibold tracking-tight text-lg">Anahita</div>
      </div>

      {/* Center Nav */}
      <Nav currentPage={currentPage} setPage={setPage} />

      {/* Right side controls */}
      <div className="flex items-center gap-3">
        <div className="text-xs">EN | DE</div>
      </div>
    </header>
  );
}