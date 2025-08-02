"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function AIMLReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          🧠 AI / ML / DL Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This is your mind-forged path into artificial intelligence, machine
          learning, and deep learning. These books cover theory, practice,
          tools, ethics, and the future of synthetic minds—from neural nets to
          natural language to augmented cognition.
        </p>

        <p className="text-md text-gray-600">
          Train your thinking like a model: feed it, regularize it, then deploy.
          Whether you&#39;re grokking backpropagation or considering the legal
          implications of AGI, this list is your launchpad. Study like you&#39;re
          building your own Jarvis.
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
