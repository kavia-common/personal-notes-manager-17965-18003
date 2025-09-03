import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Personal Notes Manager",
  description: "Create, edit, search, and manage your notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="text-slate-800 bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
