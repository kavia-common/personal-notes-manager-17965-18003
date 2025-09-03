import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section
        className="w-full max-w-lg border border-slate-200 rounded-lg p-6 text-center bg-white"
        role="alert"
        aria-live="assertive"
      >
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">404 – Page Not Found</h1>
        <p className="text-slate-600 mb-4">
          The page you’re looking for doesn’t exist.
        </p>
        <Link href="/" className="px-4 py-2 rounded-md bg-[#2563eb] text-white hover:bg-blue-600">
          Go home
        </Link>
      </section>
    </main>
  );
}
