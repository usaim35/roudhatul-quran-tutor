"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface User {
  email: string;
  name: string;
  joinedAt: string;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  requestOtp: (email: string, name?: string) => Promise<{ ok: boolean; message: string }>;
  verifyOtp: (email: string, code: string, name?: string) => Promise<{ ok: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const SESSION_KEY = "rq-session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        window.localStorage.removeItem(SESSION_KEY);
      }
    }
    setLoading(false);
  }, []);

  const requestOtp = async (email: string, name?: string) => {
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });
    const data = await res.json();
    return { ok: res.ok, message: data.message };
  };

  const verifyOtp = async (email: string, code: string, name?: string) => {
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code, name }),
    });
    const data = await res.json();
    if (res.ok && data.user) {
      setUser(data.user);
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
    }
    return { ok: res.ok, message: data.message };
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, loading, requestOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
