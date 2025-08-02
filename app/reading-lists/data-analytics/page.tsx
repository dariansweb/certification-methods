"use client";

import { useState } from "react";
import ReadingListModal from "@/components/ReadingListModal";

export default function DataAnalyticsReadingListPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          📊 Data Analytics Reading List
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          This list dives deep into the world of data—wrangling, analyzing,
          visualizing, and automating insights from every digital trace. You’ll
          find tools like Python, R, Redis, Hadoop, Prometheus, Tableau, Splunk,
          and Qlik—all geared toward mastering the flow of information.
        </p>

        <p className="text-md text-gray-600">
          Learn to interrogate your data like a detective, model it like a
          scientist, and communicate it like a storyteller. Whether you&#39;re
          building dashboards, writing queries, or monitoring systems, these
          books are here to turn chaos into clarity.
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
