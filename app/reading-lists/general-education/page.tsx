"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function GeneralEducationReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          🎓 General Education Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This reading list forms the bedrock of a well-rounded intellect. It
          includes books across science, mathematics, literature, history,
          philosophy, geography, the arts—basically everything *outside* the
          world of computer science and technology.
        </p>

        <p className="text-md text-gray-600">
          Mastery begins with breadth. These works help you think clearly, write
          eloquently, and understand the systems—natural, cultural,
          mathematical—that shape our world. Read widely here, then specialize.
          These are your roots.
        </p>

        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          📚 Launch Reading List
        </button>

        {isModalOpen && (
          <ReadingListModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
}
