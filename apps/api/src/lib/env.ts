import { z } from "zod";

// `vercel env pull` can append a literal backslash-n to values. Strip that
// plus surrounding whitespace so URL/secret parsing does not silently fail.
function cleanEnv(raw: NodeJS.ProcessEnv): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (typeof v !== "string") continue;
    out[k] = v.replace(/\\n$/, "").trim();
  }
  return out;
}

const Env = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_MIGRATE_URL: z.string().url().optional(),
  REDIS_URL: z.string().optional(),
  JWT_ACCESS_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),
  JWT_KID: z.string().default("k1"),
  ANTHROPIC_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
  OTEL_ENABLED: z.coerce.boolean().default(false),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  CORS_ORIGIN: z.string().default("http://localhost:5173"),
  REQUEST_TIMEOUT_MS: z.coerce.number().default(60_000),
});

export const env = Env.parse(cleanEnv(process.env));
