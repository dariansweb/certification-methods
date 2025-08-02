"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function CertificationsReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          📚 Certifications Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This reading list is purpose-built for certification prep—Amazon,
          Cisco, CompTIA, CEH, Oracle, and more. These books align with real
          exam objectives, helping you pass the test *and* retain the knowledge.
        </p>

        <p className="text-md text-gray-600">
          Think of this as your digital boot camp. Whether you&#39;re working toward
          A+, Security+, AWS certs, or a Red Team credential, each book here is
          a tool to sharpen your skills and prove your mastery. Grind smart, not
          just hard.
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
