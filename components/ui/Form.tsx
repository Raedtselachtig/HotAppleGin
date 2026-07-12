'use client';
import { FormEvent, useRef, useState } from 'react';

export function WaitlistForm() {
 const [sent, setSent] = useState(false);
 function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
 if (sent) return <p className="copy">Thanks, we'll take it from here. You'll hear from us when the warmth returns.</p>;
 return (
  <form className="form" onSubmit={submit}>
   <label className="field">Name<input className="input" name="name" required /></label>
   <label className="field">Email<input className="input" name="email" type="email" required /></label>
   <label className="field">Anything you'd like to share?<textarea className="textarea" name="message" /></label>
   <label className="checkbox"><input type="checkbox" required /> <span>I'm 18+ and perfectly capable of making warm decisions.</span></label>
   <button className="cta" type="submit">Keep Me Warm</button>
  </form>
 );
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm({
 fields = ['Name', 'Email', 'Message'],
 button = 'Send',
 subject = 'Nieuw contactformulier',
 fromName = 'Hot Apple Gin',
}: {
 fields?: string[];
 button?: string;
 subject?: string;
 fromName?: string;
}) {
 const [status, setStatus] = useState<Status>('idle');
 // Tijdstip waarop het formulier verscheen: bots vuren binnen een paar seconden af.
 const startedAt = useRef(Date.now());

 async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus('sending');
  const data = new FormData(e.currentTarget);
  const values: Record<string, string> = {};
  fields.forEach(f => { values[f] = (data.get(f.toLowerCase()) as string) || ''; });
  // Honeypot: onzichtbaar lokveld dat alleen bots invullen. Los meesturen (niet in
  // 'fields') zodat het nooit in de mail belandt.
  const hp = (data.get('website') as string) || '';
  const elapsedMs = Date.now() - startedAt.current;

  try {
   const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject, fields: values, fromName, hp, elapsedMs }),
   });
   setStatus(res.ok ? 'sent' : 'error');
  } catch {
   setStatus('error');
  }
 }

 if (status === 'sent') return <p className="copy">Thanks. We&rsquo;ll be in touch.</p>;
 if (status === 'error') return <p className="copy">Something went wrong. Email us directly at <a href="mailto:info@hotapplegin.com">info@hotapplegin.com</a>.</p>;

 return (
  <form className="form" onSubmit={submit}>
   {/* Honeypot: buiten beeld en weg voor screenreaders/toetsenbord. Echte bezoekers
       zien of raken dit veld nooit; bots vullen het wél in en worden geweigerd. */}
   <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
   />
   {fields.map((field) => field === 'Message' || field === 'Bericht' ? (
    <label className="field" key={field}>{field}<textarea className="textarea" name={field.toLowerCase()} required /></label>
   ) : (
    <label className="field" key={field}>{field}<input className="input" name={field.toLowerCase()} type={field.toLowerCase().includes('email') || field.toLowerCase().includes('e-mail') ? 'email' : 'text'} required={!field.toLowerCase().includes('onderwerp')} /></label>
   ))}
   <button className="cta" type="submit" disabled={status === 'sending'}>
    {status === 'sending' ? 'Sending...' : button}
   </button>
  </form>
 );
}
