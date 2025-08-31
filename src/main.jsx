import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Gate from "./Gate.jsx";

// Put the SHA-256 hex you computed in Step 2 here:
const EXPECTED_HASH_HEX = "872fc187d97146130c84561ae695bfda0c1b174ad0b9d6c6d621bf96912fe512";

function Root() {
  const [ok, setOk] = useState(localStorage.getItem("preview_gate_ok") === "1");

  if (!ok) {
    return <Gate expectedHashHex={EXPECTED_HASH_HEX} onUnlock={() => setOk(true)} />;
  }

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);