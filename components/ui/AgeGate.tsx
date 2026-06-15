'use client';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

export function AgeGate() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(sessionStorage.getItem('hag-age-ok') !== 'true'); }, []);
  if (!visible) return null;
  return (
    <div className="age-gate" role="dialog" aria-modal="true">
      <div className="age-card">
        <Logo />
        <h1 className="display">Warm drinks.{`\n`}Grown up rules.</h1>
        <div className="age-actions">
          <button className="cta" onClick={() => { sessionStorage.setItem('hag-age-ok', 'true'); setVisible(false); }}>I am of legal drinking age</button>
          <button className="cta" onClick={() => { window.location.href = 'https://www.drinkaware.co.uk'; }}>Not yet</button>
        </div>
      </div>
    </div>
  );
}
