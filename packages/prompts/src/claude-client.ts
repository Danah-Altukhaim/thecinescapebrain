import Anthropic from "@anthropic-ai/sdk";

let client: Anthropic | null = null;
export function getClaude(): Anthropic {
  if (!client) {
    const key = process.env.ANTHROPIC_API_KEY;
    if (!key) throw new Error("ANTHROPIC_API_KEY missing");
    client = new Anthropic({ apiKey: key });
  }
  return client;
}

export type ClaudeCallMetrics = {
  model: string;
  latencyMs: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheCreateTokens: number;
  stopReason: string | null;
};

export function extractMetrics(
  resp: Anthropic.Message,
  model: string,
  startedAt: number,
): ClaudeCallMetrics {
  const u = resp.usage as unknown as {
    input_tokens: number;
    output_tokens: number;
    cache_read_input_tokens?: number;
    cache_creation_input_tokens?: number;
  };
  return {
    model,
    latencyMs: Date.now() - startedAt,
    inputTokens: u.input_tokens,
    outputTokens: u.output_tokens,
    cacheReadTokens: u.cache_read_input_tokens ?? 0,
    cacheCreateTokens: u.cache_creation_input_tokens ?? 0,
    stopReason: resp.stop_reason,
  };
}
