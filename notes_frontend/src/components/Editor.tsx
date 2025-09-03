"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useNotes } from "@/contexts/NotesContext";

export default function Editor() {
  const { selectedId, notes, save, remove, setSelectedId } = useNotes();
  const note = useMemo(() => notes.find((n) => n.id === selectedId) ?? null, [notes, selectedId]);
  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");

  useEffect(() => {
    // Sync editor fields when the selected note or its fields change
    setTitle(note?.title ?? "");
    setContent(note?.content ?? "");
  }, [note?.id, note?.title, note?.content]);

  if (!note) {
    return (
      <div className="h-full w-full flex items-center justify-center text-slate-500">
        Select or create a note to get started.
      </div>
    );
  }

  const handleSave = () => {
    save(note.id, { title, content });
  };

  const handleDelete = () => {
    const ok = confirm("Delete this note?");
    if (!ok) return;
    remove(note.id);
    setSelectedId(null);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between gap-2 p-3 border-b border-slate-200">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="flex-1 text-lg sm:text-xl font-semibold text-slate-800 outline-none bg-transparent"
        />
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            className="px-3 py-1.5 text-sm rounded-md bg-[#2563eb] text-white hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-sm rounded-md border border-red-200 text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
        className="flex-1 p-3 outline-none resize-none leading-relaxed text-slate-800"
      />
    </div>
  );
}
