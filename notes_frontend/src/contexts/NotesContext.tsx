"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Note } from "@/lib/types";
import { createNote, deleteNote, getAllNotes, updateNote } from "@/lib/storage";

type NotesContextValue = {
  notes: Note[];
  query: string;
  setQuery: (q: string) => void;
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  filtered: Note[];
  add: () => Note;
  save: (id: string, changes: Partial<Pick<Note, "title" | "content">>) => Note | null;
  remove: (id: string) => void;
};

const NotesContext = createContext<NotesContextValue | undefined>(undefined);

// PUBLIC_INTERFACE
export function useNotes() {
  /** Access notes state, search, and CRUD actions */
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used within NotesProvider");
  return ctx;
}

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter((n) =>
      n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
    );
  }, [notes, query]);

  const value: NotesContextValue = {
    notes,
    query,
    setQuery,
    selectedId,
    setSelectedId,
    filtered,
    add: () => {
      const n = createNote({ title: "New note", content: "" });
      setNotes(getAllNotes());
      setSelectedId(n.id);
      return n;
    },
    save: (id, changes) => {
      const updated = updateNote(id, changes);
      setNotes(getAllNotes());
      return updated;
    },
    remove: (id) => {
      deleteNote(id);
      setNotes(getAllNotes());
      setSelectedId((prev) => (prev === id ? null : prev));
    },
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}
