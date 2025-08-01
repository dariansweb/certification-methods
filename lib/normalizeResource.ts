// src/lib/normalizeResource.ts

export interface ResourceEntry {
  id: string;
  type: string;
  title: string;
  author: string;
  year: number | string;
  publisher: string;
  isbn: string;
  summary: string;
  notes: string;
  sourceUrl: string;
  certs: string[];
  domainTags: string[];
  status: string;
  references: string[];
}

export function normalizeResourceEntry(
  entry: Partial<ResourceEntry>
): ResourceEntry {
  return {
    id: entry.id ?? "unknown-id",
    type: entry.type ?? "misc",
    title: entry.title ?? "Untitled Entry",
    author: entry.author ?? "Unknown Author",
    year: entry.year ? String(entry.year) : "Unknown Year",
    publisher: entry.publisher ?? "",
    isbn: entry.isbn ?? "",
    summary: entry.summary ?? "",
    notes: entry.notes ?? "",
    sourceUrl: entry.sourceUrl ?? "",
    certs: entry.certs ?? [],
    domainTags: entry.domainTags ?? [],
    status: entry.status ?? "unknown",
    references: entry.references ?? [],
  };
}
