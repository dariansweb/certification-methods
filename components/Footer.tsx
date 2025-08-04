import React from "react";
import Link from "next/link";

const readingListDomains = [
  {
    slug: "general-education",
    name: "General Education",
    emoji: "🎓",
  },
  {
    slug: "certifications",
    name: "Certifications",
    emoji: "📚",
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    emoji: "🖥️",
  },
  {
    slug: "linux",
    name: "Linux",
    emoji: "🐧",
  },
  {
    slug: "cyber",
    name: "Hacking / Cyber Security",
    emoji: "💀",
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    emoji: "📊",
  },
  {
    slug: "ai-ml",
    name: "AI / ML / DL",
    emoji: "🧠",
  },
  {
    slug: "cysa",
    name: "Cyber Anayst",
    emoji: "📊💀",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-center text-xs text-zinc-500 py-6 border-t border-zinc-200 mt-0">
      <div className="mt-6">
        <h3 className="text-zinc-50 font-semibold mb-3 text-sm">
          Reading Lists
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[...readingListDomains]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((domain) => (
              <Link
                key={domain.slug}
                href={`/reading-lists/${domain.slug}`}
                className="bg-zinc-100 hover:bg-white border border-zinc-200 hover:shadow-md text-zinc-800 px-4 py-3 rounded-lg w-36 sm:w-40 text-center transition duration-200"
              >
                <div className="text-2xl">{domain.emoji}</div>
                <div className="mt-1 text-[13px] font-medium leading-tight">
                  {domain.name}
                </div>
              </Link>
            ))}
        </div>
      </div>
      <p className="text-slate-50">
        &copy; {new Date().getFullYear()} Codex of Mastery — Study Well, Study
        Deep.
      </p>
      <p className="text-slate-50">“What is not written is forgotten.”</p>
    </footer>
  );
}
