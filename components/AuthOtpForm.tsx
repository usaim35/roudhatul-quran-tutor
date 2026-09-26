"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ShieldCheck, ArrowLeft } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export function AuthOtpForm({ mode }: { mode: "signin" | "signup" }) {
  const { requestOtp, verifyOtp } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendCode = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await requestOtp(email, name || undefined);
    setLoading(false);
    if (res.ok) {
      setStatus(res.message);
      setStep("code");
    } else {
      setError(res.message);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await verifyOtp(email, code, name || undefined);
    setLoading(false);
    if (res.ok) {
      router.push("/");
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="card p-6 sm:p-8">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-800 dark:text-gold-300">
            {step === "email" ? <Mail size={22} /> : <ShieldCheck size={22} />}
          </div>
          <h1 className="section-title !text-2xl">
            {mode === "signin" ? "Sign In" : "Create Your Account"}
          </h1>
          <p className="mt-1 text-sm text-brand-500 dark:text-brand-300">
            {step === "email"
              ? "We'll email you a one-time passcode — no password needed."
              : `Enter the 6-digit code sent to ${email}`}
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300">
            {error}
          </div>
        )}
        {status && step === "code" && (
          <div className="mb-4 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm text-brand-700 dark:border-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
            {status}
          </div>
        )}

        {step === "email" ? (
          <form onSubmit={handleSendCode} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ahmad Khan"
                  className="input"
                />
              </div>
            )}
            <div>
              <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Sending code…" : "Send verification code"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-brand-600 dark:text-brand-300">
                6-digit code
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                placeholder="••••••"
                className="input text-center text-lg tracking-[0.5em]"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Verifying…" : "Verify & continue"}
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("email");
                setError(null);
              }}
              className="flex w-full items-center justify-center gap-1 text-sm text-brand-500 hover:text-brand-700 dark:text-brand-300 dark:hover:text-gold-300"
            >
              <ArrowLeft size={14} /> Use a different email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
