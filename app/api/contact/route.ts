import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY || process.env.Resend;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
 const { subject, fields, fromName = 'Hot Apple Gin', hp, elapsedMs } = await request.json().catch(() => ({}));
 if (!subject || !fields) return NextResponse.json({ error: 'invalid payload' }, { status: 400 });

 // Spamfilter. Bots vullen het onzichtbare honeypot-veld ('hp') in en/of dienen het
 // formulier binnen een paar seconden in. In beide gevallen stil 'ok' teruggeven: geen
 // mail versturen, maar de bot laten denken dat het gelukt is (anders leert-ie omzeilen).
 if (hp) return NextResponse.json({ ok: true });
 if (typeof elapsedMs === 'number' && elapsedMs < 2500) return NextResponse.json({ ok: true });

 const replyTo = fields['Email'] || fields['E-mail'] || undefined;
 const text = Object.entries(fields as Record<string, string>)
  .map(([k, v]) => `${k}: ${v}`)
  .join('\n');

 if (!apiKey) {
  console.log('[contact] no API key — skipping send\n', text);
  return NextResponse.json({ ok: true });
 }

 const from = `${fromName} <noreply@hotapplegin.com>`;

 const { error } = await resend.emails.send({
  from,
  to: 'info@hotapplegin.com',
  replyTo,
  subject,
  text,
 });

 if (error) {
  console.error('[contact] resend error', error);
  return NextResponse.json({ error }, { status: 500 });
 }

 if (replyTo) {
  await resend.emails.send({
   from,
   to: replyTo,
   subject: `We received your message — ${fromName}`,
   text: `Thanks for reaching out.\n\nWe received your message and will get back to you shortly.\n\n---\n${text}\n\n${fromName}\nnoreply@hotapplegin.com`,
  });
 }

 return NextResponse.json({ ok: true });
}
