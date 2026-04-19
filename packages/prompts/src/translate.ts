import {
  getClaude,
  extractMetrics,
  recordClaudeCall,
  type ClaudeCallMetrics,
} from "./claude-client.js";
import { MODELS } from "./models.js";

export type TranslateResult = {
  text: string;
  confidence: number;
  metrics: ClaudeCallMetrics;
};

/** Per-field EN→AR or AR→EN translation with brand glossary. */
export async function translateField(args: {
  text: string;
  from: "en" | "ar";
  to: "en" | "ar";
  fieldLabel: string;
}): Promise<TranslateResult> {
  const startedAt = Date.now();
  let resp;
  try {
    resp = await getClaude().messages.create({
      model: MODELS.translate,
      max_tokens: 512,
      system: [
        {
          type: "text",
          text: 'You translate Cinescape (Kuwait National Cinema Company) customer-facing copy between English and Arabic. Preserve brand voice: clear, courteous, cinema-savvy. Use the approved glossary. Return ONLY the translation and a confidence score 0.0-1.0 as JSON: {"text":"...","confidence":0.0}.',
          cache_control: { type: "ephemeral" },
        },
        {
          type: "text",
          text: "GLOSSARY: Cinescape=سينسكيب, Kuwait National Cinema Company=شركة السينما الكويتية الوطنية, cinema=دار العرض, showtime=موعد العرض, seat=مقعد, booking=حجز, refund=استرجاع, electronic balance=رصيد إلكتروني, Club Card=بطاقة الولاء, 4DX=4DX, Skyline=سكايلاين, VIP=VIP",
          cache_control: { type: "ephemeral" },
        },
      ] as any,
      messages: [
        {
          role: "user",
          content: `Field: ${args.fieldLabel}\nFrom: ${args.from} → To: ${args.to}\nText: ${args.text}`,
        },
      ],
    });
  } catch (err) {
    recordClaudeCall(MODELS.translate, startedAt, "error");
    throw err;
  }
  recordClaudeCall(MODELS.translate, startedAt, "success");
  const metrics = extractMetrics(resp, MODELS.translate, startedAt);
  const block = resp.content.find((b) => b.type === "text");
  const raw = block?.type === "text" ? block.text : "";
  try {
    const obj = JSON.parse(raw.match(/\{[\s\S]*\}/)?.[0] ?? raw);
    return {
      text: String(obj.text ?? ""),
      confidence: Math.max(0, Math.min(1, Number(obj.confidence ?? 0.7))),
      metrics,
    };
  } catch {
    return { text: raw.trim(), confidence: 0.5, metrics };
  }
}
