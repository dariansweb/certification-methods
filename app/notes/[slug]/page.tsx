import { notFound } from "next/navigation";
import { use } from "react";
import notesDataRaw from "@/data/reading-notes.json";

type NoteBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; source?: string };

type Note = {
  title: string;
  categories: string[];
  level: string;
  content: NoteBlock[];
};

type NotesData = {
  [slug: string]: Note;
};

const notesData: NotesData = notesDataRaw as NotesData;

export default function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const note = notesData[slug];

  if (!note) return notFound();

  return (
    <main className="w-full bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-zinc-800">{note.title}</h1>
      <p className="text-sm text-zinc-500 italic">
        {note.categories.join(", ")} — Level: {note.level}
      </p>

      {note.content.map((block: NoteBlock, i: number) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-zinc-700">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-disc pl-5 text-zinc-700 space-y-1">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 pl-4 italic text-zinc-600"
              >
                “{block.text}”
                {block.source && (
                  <div className="text-sm mt-1 text-right">
                    — {block.source}
                  </div>
                )}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
