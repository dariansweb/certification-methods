// components/ReadingListModal.tsx
"use client";

import { Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import readingListData from "@/data/reading-list-modal-data.json";

type ReadingListModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ReadingListModal({
  isOpen,
  onClose,
}: ReadingListModalProps) {
  const filtered = readingListData; // Add search if you want

  const categories = filtered.reduce((acc, book) => {
    book.categories.forEach((cat) => {
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(book);
    });
    return acc;
  }, {} as Record<string, typeof readingListData>);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex bg-zinc-50 text-black items-center justify-center min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-60"
            leave="ease-in duration-200"
            leaveFrom="opacity-60"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <Transition
            as={Fragment}
            show={true}
            enter="ease-out duration-300 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative z-10 w-full max-w-5xl mx-auto bg-white rounded-lg p-8 shadow-lg overflow-hidden">
              <DialogTitle className="text-lg font-bold mb-4">
                Cybersecurity Reading List
              </DialogTitle>
              <div className="space-y-4 max-h-[80vh] overflow-y-auto px-2">
                {Object.entries(categories).map(([cat, books]) => (
                  <details key={cat} className="group border rounded">
                    <summary className="cursor-pointer font-semibold p-2 bg-gray-100 group-open:bg-indigo-50">
                      {cat} ({books.length})
                    </summary>
                    <ul className="pl-4 py-2 space-y-1">
                      {books.map((book) => (
                        <li
                          key={book.title}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 border-b"
                        >
                          <span className="text-gray-900 font-medium break-words sm:max-w-[75%]">
                            {book.title}
                          </span>
                          <a
                            href={book.notesUri}
                            className="text-indigo-600 whitespace-nowrap hover:underline"
                          >
                            📖 Notes
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}
