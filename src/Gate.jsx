import React, { useState } from "react";

/** Minimal preview gate for static hosting (GitHub Pages)
 *  - Compares SHA-256(passphrase) to a stored hash
 *  - On success, stores a token in localStorage and calls onUnlock()
 *  - Basic deterrent, not real security
 */

const hexToBuf = (hex) => {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes.buffer;
};

const sha256Hex = async (text) => {
  const enc = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", enc);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, "0")).join("");
};

export default function Gate({ expectedHashHex, onUnlock }) {
  const [val, setVal] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const h = await sha256Hex(val);
      if (h === expectedHashHex.toLowerCase()) {
        localStorage.setItem("preview_gate_ok", "1");
        onUnlock?.();
      } else {
        setError("Incorrect access code. Try again.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm border border-neutral-200 rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-sm text-neutral-500 mb-2">Private Preview</div>
        <h1 className="text-lg font-medium mb-3">Enter access code</h1>
        <form onSubmit={submit} className="space-y-3">
          <input
            type="password"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Access code"
            className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-sm"
            autoFocus
          />
          {error && <div className="text-xs text-red-600">{error}</div>}
          <button
            type="submit"
            className="w-full border border-neutral-800 text-neutral-800 hover:bg-neutral-900 hover:text-white rounded-xl px-3 py-2 text-sm transition"
          >
            Enter
          </button>
        </form>
        <div className="text-[11px] text-neutral-500 mt-3">
          For authorized review only.
        </div>
      </div>
    </div>
  );
}