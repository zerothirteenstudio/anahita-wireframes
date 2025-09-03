// App.jsx
import React, { useState } from "react";

// layout
import { Header, Footer } from "./components/layout";

// UI (only used for the optional IA snapshot + notes)
import { Box, Note } from "./components/ui";

// Pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Keep this single source of truth for routing labels
const pages = ["Home", "Portfolio", "Project Detail", "Offerings", "About", "Contact"];

// Tiny brand badge (inline here to keep things simple)
function BrandBadge() {
  return (
    <a
      href="https://zerothirteen.studio/"
      className="inline-flex items-center gap-2 text-[11px] text-neutral-500 hover:text-neutral-700"
      title="Zerothirteen Studio"
      aria-label="Zerothirteen Studio"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-dashed border-neutral-400 text-[9px]">
        Z
      </span>
      Created by  Zerothirteen Studio
    </a>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [showNotes, setShowNotes] = useState(true);

  return (
    <div className="min-h-screen w-full bg-neutral-50 p-4 md:p-8">
      <div className="mx-auto w-full max-w-[1320px]">

        {/* Slim top toolbar: notes toggle + brand badge (removed the extra page nav) */}
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="notes" className="flex items-center gap-2 text-sm">
            <input
              id="notes"
              type="checkbox"
              checked={showNotes}
              onChange={(e) => setShowNotes(e.target.checked)}
            />
            Show annotations
          </label>
          <BrandBadge />
        </div>

        {/* Frame */}
        <div className="transition-all">
          <div className="border border-neutral-200 rounded-lg p-4 bg-white shadow-sm">
            <Header currentPage={currentPage} setPage={setCurrentPage} />
            <div className="h-[1px] bg-neutral-200 mb-4 hidden" />

            {currentPage === "Home" && (
              <Home showNotes={showNotes} goTo={setCurrentPage} />
            )}
            {currentPage === "Portfolio" && (
              <Portfolio showNotes={showNotes} goTo={setCurrentPage} />
            )}
            {currentPage === "Project Detail" && (
              <ProjectDetail showNotes={showNotes} goTo={setCurrentPage} />
            )}
            {currentPage === "Offerings" && (
              <Services showNotes={showNotes} goTo={setCurrentPage} />
            )}
            {currentPage === "About" && (
              <About showNotes={showNotes} goTo={setCurrentPage} />
            )}
            {currentPage === "Contact" && (
              <Contact showNotes={showNotes} goTo={setCurrentPage} />
            )}

            <div className="h-[1px] bg-neutral-200 mt-6" />
            <Footer />
          </div>
        </div>

        {/* IA snapshot (optional) */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Box title="IA Snapshot — Sitemap">
            <div className="text-xs">
              <ul className="list-disc ml-5 space-y-1">
                <li>Home</li>
                <li>
                  Portfolio
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Project Detail (template)</li>
                    <li>Archive by Type/Year (optional)</li>
                  </ul>
                </li>
                <li>
                  Services / Offerings
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Workshops</li>
                    <li>Consulting</li>
                    <li>Conflict Facilitation</li>
                  </ul>
                </li>
                <li>
                  About
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Bio</li>
                    <li>CV / Press Kit</li>
                  </ul>
                </li>
                <li>Contact</li>
              </ul>
            </div>
            <Note>
              Matches discovery outcomes; expandable as content grows. Language toggle lives in the header.
            </Note>
          </Box>

          <Box title="Content Notes">
            <Note>
              • Bilingual content [EN/DE] via header toggle.<br />
              • Portfolio cards: Title, Type, Year, Role, 1–2 sentence synopsis.<br />
              • Offerings outline methods, audience, quotes, CTA.<br />
              • About: concise funder bio + deeper narrative.<br />
              • Contact: form + direct email; legal links in footer.
            </Note>
          </Box>
        </div>
      </div>
    </div>
  );
}
