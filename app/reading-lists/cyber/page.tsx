// app/reading-lists/cyber/page.tsx
"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function CyberReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
<main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
      💀 Cybersecurity Reading List
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed">
      Welcome to your personalized cyber warfare curriculum. This list contains beginner‑to‑advanced books covering red teaming, penetration
      testing, social engineering, cryptography, incident response, digital forensics, and cloud security. Books are cross-categorized, so once you
      read a book for one topic, it might help in another.
    </p>

    <p className="text-md text-gray-600">
      These are not just books—they’re weapons-grade knowledge capsules. Think of this as your digital dojo. Return often, study deeply, and make your
      own notes as you go (Zettelkasten, FTW).
    </p>

    <button
      onClick={() => setModalOpen(true)}
      className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
    >
      📚 Launch Reading List
    </button>

    {isModalOpen && (
      <ReadingListModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    )}
  </div>
</main>

  );
}
