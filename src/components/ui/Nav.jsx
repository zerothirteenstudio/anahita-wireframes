import React from "react";

const pages = ["Home", "Portfolio", "Project Detail", "Services", "About", "Contact"];

export function Nav({ currentPage, setPage }) {
  return (
    <nav className="hidden md:flex gap-3 text-sm">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-2 py-1 rounded ${
            currentPage === p ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
          }`}
        >
          {p}
        </button>
      ))}
    </nav>
  );
}
