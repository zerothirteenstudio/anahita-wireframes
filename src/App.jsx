import React, { useMemo, useState } from "react";
import Header from "./components/ui/Header.jsx";
import Footer from "./components/ui/Footer.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const pages = ["Home", "Portfolio", "Project Detail", "Services", "About", "Contact"];

const bpOptions = [
  { label: "Mobile (375px)", width: 375 },
  { label: "Tablet (768px)", width: 768 },
  { label: "Laptop (1024px)", width: 1024 },
  { label: "Desktop (1280px)", width: 1280 },
  { label: "Full", width: 0 },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [showNotes, setShowNotes] = useState(true);
  const [bp, setBp] = useState(bpOptions[3]);

  const wrapperStyle = useMemo(() => {
    return bp.width > 0 ? { maxWidth: bp.width, margin: "0 auto" } : { maxWidth: "100%" };
  }, [bp]);

  return (
    <div className="min-h-screen w-full bg-neutral-50 p-4 md:p-8 text-base">
      <div className="container-fluid">
        {/* Controls */}
        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-sm">Breakpoint:</div>
            <select
              className="border border-neutral-300 rounded px-2 py-1 text-sm bg-white"
              value={bp.label}
              onChange={(e) =>
                setBp(bpOptions.find((o) => o.label === e.target.value) || bpOptions[3])
              }
            >
              {bpOptions.map((o) => (
                <option key={o.label} value={o.label}>
                  {o.label}
                </option>
              ))}
            </select>
            <label className="flex items-center gap-2 ml-2 text-sm">
              <input
                type="checkbox"
                checked={showNotes}
                onChange={(e) => setShowNotes(e.target.checked)}
              />
              Show annotations
            </label>
          </div>
          <div className="flex gap-2 text-sm flex-wrap">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-2 py-1 rounded border ${
                  currentPage === p
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "border-neutral-300 hover:bg-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Frame */}
        <div style={wrapperStyle} className="transition-all">
          <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-4 bg-white shadow-sm">
            <Header currentPage={currentPage} setPage={setCurrentPage} />
            <div className="h-[1px] bg-neutral-200 mb-4" />

            {currentPage === "Home" && <Home showNotes={showNotes} />}
            {currentPage === "Portfolio" && (  <Portfolio showNotes={showNotes} goTo={(p) => setCurrentPage(p)} />)}
            {currentPage === "Project Detail" && <ProjectDetail showNotes={showNotes} />}
            {currentPage === "Services" && <Services showNotes={showNotes} />}
            {currentPage === "About" && <About showNotes={showNotes} />}
            {currentPage === "Contact" && <Contact showNotes={showNotes} />}

            <div className="h-[1px] bg-neutral-200 mt-6" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
