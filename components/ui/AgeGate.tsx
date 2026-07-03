'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export function AgeGate() {
 const t = useTranslations('ageGate');
 const [visible, setVisible] = useState(false);
 useEffect(() => { setVisible(sessionStorage.getItem('hag-age-ok') !== 'true'); }, []);
 if (!visible) return null;
 return (
  <div className="age-gate" role="dialog" aria-modal="true">
   <div className="age-card">
    <Logo />
    <h1>{t('title')}</h1>
    <p className="age-sub">{t('question')}</p>
    <div className="age-actions">
     <button className="cta" onClick={() => { sessionStorage.setItem('hag-age-ok', 'true'); setVisible(false); }}>{t('confirm')}</button>
     <button className="cta" onClick={() => { window.location.href = 'https://www.drinkaware.co.uk'; }}>{t('deny')}</button>
    </div>
   </div>
  </div>
 );
}
