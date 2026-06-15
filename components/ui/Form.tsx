'use client';
import { FormEvent, useState } from 'react';

export function WaitlistForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <p className="copy">Thanks — we'll take it from here. You'll hear from us when the warmth returns.</p>;
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

export function ContactForm({ fields = ['Name', 'Email', 'Message'], button = 'Send' }: { fields?: string[]; button?: string }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <p className="copy">[COPY_NEEDED]</p>;
  return (
    <form className="form" onSubmit={submit}>
      {fields.map((field) => field === 'Message' || field === 'Bericht' ? (
        <label className="field" key={field}>{field}<textarea className="textarea" name={field.toLowerCase()} required /></label>
      ) : (
        <label className="field" key={field}>{field}<input className="input" name={field.toLowerCase()} type={field.toLowerCase().includes('email') || field.toLowerCase().includes('e-mail') ? 'email' : 'text'} required={!field.toLowerCase().includes('onderwerp')} /></label>
      ))}
      <button className="cta" type="submit">{button}</button>
    </form>
  );
}
