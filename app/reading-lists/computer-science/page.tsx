"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function ComputerScienceReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          🖥️ Computer Science Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          These are the core texts of codecraft—books on algorithms, data
          structures, cloud computing, devops, networks, systems programming,
          and beyond. Whether you’re learning foundational theory or exploring
          cutting-edge infrastructure, this list is your guide.
        </p>

        <p className="text-md text-gray-600">
          This is where you deepen your understanding of how computers work—from
          logic gates and compilers to containers and distributed systems. Learn
          to think like a computer scientist, build like an engineer, and debug
          like a wizard.
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
