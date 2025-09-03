"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import { NotesProvider } from "@/contexts/NotesContext";

export default function NotesAppPage() {
  const { auth, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !auth.user) {
      router.replace("/login");
    }
  }, [loading, auth.user, router]);

  if (loading || !auth.user) {
    return (
      <main className="min-h-screen flex items-center justify-center text-slate-500">
        Loading...
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] h-[calc(100vh-56px)]">
        <NotesProvider>
          <Sidebar />
          <Editor />
        </NotesProvider>
      </div>
    </div>
  );
}
