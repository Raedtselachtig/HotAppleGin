import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY || process.env.Resend;
const resend = new Resend(apiKey);

export async function POST(request: Request) {
 const { subject, fields } = await request.json().catch(() => ({}));
 if (!subject || !fields) return NextResponse.json({ error: 'invalid payload' }, { status: 400 });

 const replyTo = fields['Email'] || fields['E-mail'] || undefined;
 const text = Object.entries(fields as Record<string, string>)
  .map(([k, v]) => `${k}: ${v}`)
  .join('\n');

 if (!apiKey) {
  console.log('[contact] no API key — skipping send\n', text);
  return NextResponse.json({ ok: true });
 }

 const { error } = await resend.emails.send({
  from: 'Hot Apple Gin <noreply@hotapplegin.com>',
  to: 'info@hotapplegin.com',
  replyTo,
  subject,
  text,
 });

 if (error) {
  console.error('[contact] resend error', error);
  return NextResponse.json({ error }, { status: 500 });
 }

 return NextResponse.json({ ok: true });
}
