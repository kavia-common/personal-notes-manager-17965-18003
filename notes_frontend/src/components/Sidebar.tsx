"use client";

import React from "react";
import { useNotes } from "@/contexts/NotesContext";
import { formatDistanceToNow } from "@/utils/date";

export default function Sidebar() {
  const { query, setQuery, filtered, selectedId, setSelectedId } = useNotes();

  return (
    <aside className="border-r border-slate-200 h-full flex flex-col bg-white">
      <div className="p-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes..."
          className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#f59e42] placeholder-slate-400 text-sm"
          aria-label="Search notes"
        />
      </div>
      <nav className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="px-3 py-8 text-sm text-slate-500">No notes found.</div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {filtered.map((n) => {
              const active = n.id === selectedId;
              return (
                <li key={n.id}>
                  <button
                    onClick={() => setSelectedId(n.id)}
                    className={`w-full text-left px-3 py-3 hover:bg-slate-50 ${
                      active ? "bg-slate-50 border-l-4 border-[#2563eb]" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="text-slate-800 font-medium truncate">{n.title || "Untitled"}</div>
                    <div className="text-xs text-slate-500 truncate">
                      {formatDistanceToNow(n.updatedAt)} ago
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </aside>
  );
}
