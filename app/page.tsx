import React from "react";
import domains from "../data/domains.json";
import Link from "next/link";

export default function Home() {
  // Alphabetically sort by the "name" property
  const sortedDomains = [...domains].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main className="min-h-screen p-10 bg-zinc-950 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif italic text-zinc-300 tracking-widest">
          🜂 Path Illumination
        </h2>
        <h3 className="text-lg sm:text-xl font-serif italic text-zinc-400 mt-2 tracking-wider">
          The Arcana of Certification Methods
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedDomains.map(({ slug, name, emoji, description }) => (
          <Link href={`/concepts/${slug}`} key={slug}>
            <div className="bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 p-6 rounded-2xl shadow-xl cursor-pointer flex flex-col justify-between">
              <div className="text-6xl mb-4">{emoji}</div>
              <div className="text-2xl font-semibold">{name}</div>
              <p className="mt-2 text-zinc-400 text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
