'use client';
import { FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';

export function WaitlistForm() {
 const t = useTranslations('form.waitlist');
 const [sent, setSent] = useState(false);
 function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
 if (sent) return <p className="copy">{t('sent')}</p>;
 return (
  <form className="form" onSubmit={submit}>
   <label className="field">{t('name')}<input className="input" name="name" required /></label>
   <label className="field">{t('email')}<input className="input" name="email" type="email" required /></label>
   <label className="field">{t('share')}<textarea className="textarea" name="message" /></label>
   <label className="checkbox"><input type="checkbox" required /> <span>{t('consent')}</span></label>
   <button className="cta" type="submit">{t('button')}</button>
  </form>
 );
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

// fields = veldsleutels (name/company/email/message), taalonafhankelijk. Labels en
// statusteksten komen uit de 'form'-namespace; button is de (vertaalde) knoptekst
// die de pagina meegeeft.
export function ContactForm({
 fields = ['name', 'email', 'message'],
 button,
 subject = 'Nieuw contactformulier',
 fromName = 'Hot Apple Gin',
}: {
 fields?: string[];
 button: string;
 subject?: string;
 fromName?: string;
}) {
 const t = useTranslations('form');
 const [status, setStatus] = useState<Status>('idle');

 async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus('sending');
  const data = new FormData(e.currentTarget);
  const values: Record<string, string> = {};
  fields.forEach((f) => { values[f] = (data.get(f) as string) || ''; });

  try {
   const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subject, fields: values, fromName }),
   });
   setStatus(res.ok ? 'sent' : 'error');
  } catch {
   setStatus('error');
  }
 }

 if (status === 'sent') return <p className="copy">{t('sent')}</p>;
 if (status === 'error') return <p className="copy">{t('errorPrefix')} <a href="mailto:info@hotapplegin.com">info@hotapplegin.com</a>.</p>;

 return (
  <form className="form" onSubmit={submit}>
   {fields.map((key) => key === 'message' ? (
    <label className="field" key={key}>{t(`fields.${key}`)}<textarea className="textarea" name={key} required /></label>
   ) : (
    <label className="field" key={key}>{t(`fields.${key}`)}<input className="input" name={key} type={key === 'email' ? 'email' : 'text'} required /></label>
   ))}
   <button className="cta" type="submit" disabled={status === 'sending'}>
    {status === 'sending' ? t('sending') : button}
   </button>
  </form>
 );
}
