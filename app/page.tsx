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
      <h2 className="text-center text-3xl sm:text-4xl font-serif italic text-zinc-300 mb-12 tracking-widest">
        🜂 The 16 Sigils of Path Illumination
      </h2>

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
