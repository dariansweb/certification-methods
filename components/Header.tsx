// src/components/Header.tsx
import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-zinc-50 border-b border-zinc-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-serif tracking-wide text-zinc-900">
          📖 Codex of Mastery
        </h1>
        <Nav />
      </div>
    </header>
  );
}
