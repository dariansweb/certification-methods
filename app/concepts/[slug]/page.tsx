"use client";

import { notFound } from "next/navigation";
import domains from "@/data/domains.json";
import aiMl from "@/data/ai-ml.json";
import business from "@/data/business.json";
import certifications from "@/data/certifications.json";
import computerScience from "@/data/computer-science.json";
import dataAnalytics from "@/data/data-analytics.json";
import databases from "@/data/databases.json";
import developers from "@/data/developers.json";
import gaming from "@/data/gaming.json";
import generalEducation from "@/data/general-education.json";
import graphicDesign from "@/data/graphic-design.json";
import hacking from "@/data/hacking.json";
import iot from "@/data/iot.json";
import linux from "@/data/linux.json";
import microsoft from "@/data/microsoft.json";
import mobile from "@/data/mobile.json";
import web from "@/data/web.json";

import { normalizeResourceEntry } from "@/lib/normalizeResource";

// Define a type for the normalized resource entry
type ResourceEntry = ReturnType<typeof normalizeResourceEntry>;

const dataMap: Record<string, ResourceEntry[]> = {
  "ai-ml": aiMl.map(normalizeResourceEntry),
  business: business.map(normalizeResourceEntry),
  certifications: certifications.map(normalizeResourceEntry),
  "computer-science": computerScience.map(normalizeResourceEntry),
  "data-analytics": dataAnalytics.map(normalizeResourceEntry),
  databases: databases.map(normalizeResourceEntry),
  developers: developers.map(normalizeResourceEntry),
  gaming: gaming.map(normalizeResourceEntry),
  "general-education": generalEducation.map(normalizeResourceEntry),
  "graphic-design": graphicDesign.map(normalizeResourceEntry),
  hacking: hacking.map(normalizeResourceEntry),
  iot: iot.map(normalizeResourceEntry),
  linux: linux.map(normalizeResourceEntry),
  microsoft: microsoft.map(normalizeResourceEntry),
  mobile: mobile.map(normalizeResourceEntry),
  web: web.map(normalizeResourceEntry),
};

// import Link from "next/link";
import { useMemo, useState, use } from "react";

type Params = {
  slug: string;
};

export default function DomainPage({ params }: { params: Promise<Params> }) {
  const { slug } = use(params);
  const domain = domains.find((d) => d.slug === slug);
  const entries = dataMap[slug];

  const [query, setQuery] = useState("");

  const filteredEntries = useMemo(() => {
    if (!query) return entries.sort((a, b) => a.title.localeCompare(b.title));
    return entries
      .filter((entry) =>
        JSON.stringify(entry).toLowerCase().includes(query.toLowerCase())
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [entries, query]);

  if (!domain || !entries) return notFound();

  return (
    <main className="p-8 bg-zinc-100 min-h-screen">
      <h1 className="text-3xl font-serif text-zinc-800 mb-2">
        {domain.emoji} {domain.name}
      </h1>
      <p className="text-zinc-600 italic mb-6">{domain.description}</p>

      {/* 🔍 Streamlined Filter Input */}
      <div className="max-w-2xl mx-auto w-full mb-8">
        <label htmlFor="filter" className="sr-only">
          Filter entries
        </label>
        <input
          id="filter"
          type="text"
          placeholder="🔍 Search for titles, authors, notes, certs..."
          className="w-full p-3 rounded-lg border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* 📚 Filtered Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-4 rounded-xl shadow-md border border-zinc-200 text-sm"
          >
            {/* 🧾 Title */}
            {entry.title && (
              <h2 className="text-lg font-semibold mb-2 text-zinc-800">
                {entry.title}
              </h2>
            )}

            {/* 👤 Author + Meta */}
            <p className="text-zinc-500 mb-1">
              {entry.author && <span>{entry.author}</span>}
              {entry.year && <span className="mx-1">• {entry.year}</span>}
              {entry.publisher && (
                <span className="mx-1">• {entry.publisher}</span>
              )}
            </p>

            {/* 🧠 Type + ISBN */}
            {(entry.type || entry.isbn) && (
              <p className="text-zinc-500 italic mb-2">
                {entry.type?.toUpperCase()}
                {entry.type === "book" && entry.isbn && (
                  <span className="ml-2">ISBN: {entry.isbn}</span>
                )}
              </p>
            )}

            {/* 📚 Summary */}
            {entry.summary && (
              <p className="text-zinc-700 mb-2">{entry.summary}</p>
            )}

            {/* 📝 Notes */}
            {entry.notes && (
              <p className="italic text-zinc-500 text-xs mb-2">
                💬 {entry.notes}
              </p>
            )}

            {/* 🏷️ Tags & Certs */}
            {(entry.domainTags?.length > 0 || entry.certs?.length > 0) && (
              <div className="flex flex-wrap gap-2 text-xs text-zinc-600 mb-2">
                {entry.domainTags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-200 px-2 py-0.5 rounded-full font-mono text-[11px]"
                  >
                    #{tag}
                  </span>
                ))}
                {entry.certs?.map((cert) => (
                  <span
                    key={cert}
                    className="bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-mono text-[11px]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            )}

            {/* 🧮 Status */}
            {entry.status && (
              <p className="text-xs text-zinc-500 mb-2">
                Status:{" "}
                <span className="text-zinc-800 font-semibold">
                  {entry.status}
                </span>
              </p>
            )}

            {/* 📚 References */}
            {Array.isArray(entry.references) && entry.references.length > 0 && (
              <div className="text-xs text-zinc-600 mb-2">
                <p className="font-semibold mb-1">References:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  {entry.references.map((ref) => (
                    <li key={ref}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🌐 Source */}
            {entry.sourceUrl && (
              <a
                href={entry.sourceUrl}
                target="_blank"
                className="inline-block mt-3 text-sm text-violet-600 hover:underline"
              >
                View Source ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
