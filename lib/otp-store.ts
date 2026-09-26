// DEMO-ONLY in-memory OTP store.
// In production, replace this with a persistent store (e.g. Redis, a DB table
// with TTL, or a provider like Upstash) since serverless functions on Vercel
// do not share memory across invocations/instances.

interface OtpRecord {
  code: string;
  expiresAt: number;
  name?: string;
}

const store = new Map<string, OtpRecord>();

export function saveOtp(email: string, code: string, name?: string) {
  store.set(email.toLowerCase(), {
    code,
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    name,
  });
}

export function checkOtp(email: string, code: string) {
  const record = store.get(email.toLowerCase());
  if (!record) return { valid: false, name: undefined as string | undefined };
  if (Date.now() > record.expiresAt) {
    store.delete(email.toLowerCase());
    return { valid: false, name: undefined as string | undefined };
  }
  const valid = record.code === code;
  if (valid) store.delete(email.toLowerCase());
  return { valid, name: record.name };
}

export function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
