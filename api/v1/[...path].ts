import type { VercelRequest, VercelResponse } from "@vercel/node";
import { buildApp } from "../../apps/api/src/server.js";
import type { FastifyInstance } from "fastify";

let app: FastifyInstance | null = null;

async function getApp(): Promise<FastifyInstance> {
  if (!app) {
    app = await buildApp();
    await app.ready();
  }
  return app;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const fastify = await getApp();

  const response = await fastify.inject({
    method: req.method as any,
    url: req.url!,
    headers: req.headers as Record<string, string>,
    payload: req.body ? JSON.stringify(req.body) : undefined,
  });

  res.status(response.statusCode);
  const headers = response.headers as Record<string, string | string[]>;
  for (const [key, value] of Object.entries(headers)) {
    if (value !== undefined) res.setHeader(key, value);
  }
  res.end(response.body);
}
