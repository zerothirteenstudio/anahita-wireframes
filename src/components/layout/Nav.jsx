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
      <nav className="hidden md:flex gap-3 text-sm">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => handleNavClick(p)}
            className={`px-2 py-1 rounded ${
              currentPage === p
                ? "bg-neutral-900 text-white"
                : "hover:bg-neutral-100"
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
          <div className="absolute left-0 mt-2 w-40 rounded border bg-white shadow-lg z-50">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => handleNavClick(p)}
                className={`block w-full text-left px-3 py-2 text-sm ${
                  currentPage === p
                    ? "bg-neutral-900 text-white"
                    : "hover:bg-neutral-100"
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