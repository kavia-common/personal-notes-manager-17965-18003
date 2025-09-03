"use client";

import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNotes } from "@/contexts/NotesContext";

export default function Header() {
  const { auth, logout } = useAuth();
  const { add } = useNotes();

  return (
    <header className="h-14 border-b border-slate-200 flex items-center justify-between px-3 sm:px-4 bg-white sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 rounded bg-[#2563eb]" />
        <h1 className="text-slate-800 text-lg sm:text-xl font-semibold tracking-tight">
          Notes
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => add()}
          className="px-3 py-1.5 text-sm rounded-md bg-[#2563eb] text-white hover:bg-blue-600 transition-colors"
          aria-label="Create new note"
        >
          New
        </button>
        <div className="hidden sm:flex items-center text-sm text-slate-600">
          {auth.user?.email}
        </div>
        <button
          onClick={() => logout()}
          className="px-3 py-1.5 text-sm rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
