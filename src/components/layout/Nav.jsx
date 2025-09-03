import React, { useState } from "react";

const pages = ["Home", "Portfolio", "Project Detail", "Offerings", "About", "Contact"];

export default function Nav({ currentPage, setPage }) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (p) => {
    setPage(p);
    setOpen(false); // close menu on selection
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-5 text-[13px] uppercase tracking-wide">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => handleNavClick(p)}
            className={`px-0 py-0 underline-offset-4 ${
              currentPage === p
                ? "underline decoration-neutral-800"
                : "hover:underline decoration-neutral-400"
            }`}
          >
            {p}
          </button>
        ))}
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 border rounded text-sm bg-white shadow-sm"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {open && (
          <div className="absolute left-0 mt-2 w-44 rounded border bg-white shadow-lg z-50">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => handleNavClick(p)}
                className={`block w-full text-left px-3 py-2 text-[13px] ${
                  currentPage === p ? "font-medium" : "text-neutral-700"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
