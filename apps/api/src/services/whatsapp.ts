/**
 * WhatsApp Business notifications. Minimal implementation: logs if token missing so
 * local dev still works; swaps to Meta Graph API in staging/prod.
 */
type SendArgs = { to: string; template: string; body: string };

const token = process.env.WHATSAPP_TOKEN;
const phoneId = process.env.WHATSAPP_PHONE_ID;

export async function sendWhatsApp({ to, template, body }: SendArgs): Promise<void> {
  if (!token || !phoneId) {
    // eslint-disable-next-line no-console
    console.log(`[whatsapp:stub] template=${template} to=${to} body=${body}`);
    return;
  }
  const resp = await fetch(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    }),
  });
  if (!resp.ok) {
    throw new Error(`whatsapp send failed: ${resp.status} ${await resp.text()}`);
  }
}
