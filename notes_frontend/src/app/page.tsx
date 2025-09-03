import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-6 bg-[#2563eb] rounded" />
          <span className="w-2 h-6 bg-[#f59e42] rounded" />
          <span className="w-2 h-6 bg-[#64748b] rounded" />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          Personal Notes Manager
        </h1>
        <p className="mt-3 text-slate-600">
          A minimal, responsive notes app with search and fast editing.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/login"
            className="px-5 py-2.5 rounded-md bg-[#2563eb] text-white font-medium hover:bg-blue-600"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 rounded-md border border-slate-200 text-slate-800 hover:bg-slate-50"
          >
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}
