"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AuthState } from "@/lib/types";
import { clearAuth, getAuth, fakeLogin, fakeRegister, setAuth as storageSetAuth } from "@/lib/storage";

type AuthContextValue = {
  auth: AuthState;
  loading: boolean;
  login: (email: string) => Promise<void>;
  register: (email: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access the current authentication state and actions */
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({ user: null, token: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuth(getAuth());
    setLoading(false);
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    auth,
    loading,
    login: async (email: string) => {
      const res = fakeLogin(email);
      setAuth(res);
    },
    register: async (email: string) => {
      const res = fakeRegister(email);
      setAuth(res);
    },
    logout: () => {
      clearAuth();
      setAuth({ user: null, token: null });
    },
  }), [auth, loading]);

  // Keep storage in sync
  useEffect(() => {
    storageSetAuth(auth);
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
