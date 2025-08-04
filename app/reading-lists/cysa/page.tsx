"use client";

import React from "react";
import readingPlan from "@/data/cysa_reading_plan.json";

export default function CySAReadingPlanPage() {
  const phases = readingPlan.phases;

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-gray-900">
          🛡️ {readingPlan.plan}
        </h1>
        <p className="text-md text-gray-700">
          A 90-day journey through layered cybersecurity knowledge. Each phase
          is designed to build your understanding of the SOC, the kill chain,
          and executive-level communication and architecture.
        </p>

        {phases.map((phase, idx) => (
          <section
            key={idx}
            className="bg-white p-6 rounded shadow-md space-y-4"
          >
            <h2 className="text-2xl font-semibold text-indigo-700">
              {phase.phase}
            </h2>
            <p className="text-gray-800 italic">{phase.goal}</p>

            <div>
              <h3 className="font-semibold text-gray-700">📚 Books</h3>
              <ul className="list-disc list-inside text-gray-600">
                {phase.books.map((book, i) => (
                  <li key={i}>{book}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">✅ Tasks</h3>
              <ul className="list-disc list-inside text-gray-600">
                {phase.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
