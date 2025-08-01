// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-zinc-500 py-6 border-t border-zinc-200 mt-12">
      <p>
        &copy; {new Date().getFullYear()} Codex of Mastery — Study Well, Study Deep.
      </p>
      <p className="italic mt-1">“What is not written is forgotten.”</p>
    </footer>
  );
}
