import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY || process.env.Resend;

export async function POST(request: Request) {
 const { subject, fields, fromName = 'Hot Apple Gin' } = await request.json().catch(() => ({}));
 if (!subject || !fields) return NextResponse.json({ error: 'invalid payload' }, { status: 400 });

 const replyTo = fields['email'] || fields['Email'] || fields['E-mail'] || undefined;
 const text = Object.entries(fields as Record<string, string>)
  .map(([k, v]) => `${k}: ${v}`)
  .join('\n');

 if (!apiKey) {
  console.log('[contact] no API key — skipping send\n', text);
  return NextResponse.json({ ok: true });
 }

 // Lui aanmaken: pas hier is apiKey gegarandeerd aanwezig. Op module-niveau zou de
 // Resend-constructor tijdens `next build` (page-data-collectie) crashen zonder key.
 const resend = new Resend(apiKey);

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
