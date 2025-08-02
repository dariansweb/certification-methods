"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function LinuxReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          🐧 Linux Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to your Linux dojo—a curated stack of books covering distros,
          shell mastery, root access, Bash scripting, system security, and open
          source tooling. Whether you&#39;re booting into Fedora, Kali, Ubuntu, or
          diving into SELinux policy, this list has your back.
        </p>

        <p className="text-md text-gray-600">
          Learn to think like a Unix philosopher. Automate the mundane, script
          with elegance, and harness the raw power of the command line. These
          books don&#39;t just teach Linux—they teach control, precision, and
          digital sovereignty.
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
