import React from "react";
import { Nav } from "./Nav.jsx";

export default function Header({ currentPage, setPage }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="font-semibold tracking-tight text-lg">Natascha — Portfolio</div>
      <Nav currentPage={currentPage} setPage={setPage} />
      <div className="flex items-center gap-3">
        <div className="text-xs">EN | DE</div>
        <div className="w-8 h-8 rounded-full border border-dashed border-neutral-400 flex items-center justify-center text-[10px] text-neutral-500">
          Logo
        </div>
      </div>
    </div>
  );
}
