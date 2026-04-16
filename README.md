# The Brain

Multi-tenant, AI-native knowledge hub for PAIR AI. See `/Users/mac/.claude/plans/prancy-wiggling-rossum.md` for the delivery plan.

## Structure

- `apps/api`: Fastify + Prisma + Claude + R2 + cron
- `apps/web`: React + Vite SPA (light mode)
- `packages/shared`: Zod schemas + TS types shared across api/web
- `packages/prompts`: Claude prompt definitions (parser, translate, gap-scan, test-it)
- `infra/migrations`: SQL migrations (RLS policies)
- `infra/seed`: dev fixtures (`pnpm seed`)
- `docs/runbooks`: ops runbooks

See `FINALIZE.md` for the end-of-build report (feature-by-PRD-section coverage, kill-switches, go-live checklist).

## One-command demo

```bash
cd "/Users/mac/Documents/The Brain/the-brain"
./demo.sh
```

Then open **http://localhost:5173** and click **"Enter Demo →"**.

## Quick start

```
cp .env.example .env
docker compose up -d postgres redis
pnpm install
pnpm --filter @brain/api prisma migrate deploy
pnpm seed
pnpm dev
```
