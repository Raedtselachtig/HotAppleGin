'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ImageSlot } from '@/components/ui/ImageSlot';

export type ServeStep = { label: string; lead: string; body: string; image: string };

export function ServeSlider({ steps }: { steps: ServeStep[] }) {
 const t = useTranslations('serve');
 const [active, setActive] = useState(0);
 const [opacity, setOpacity] = useState(1);
 const activeRef = useRef(0);
 const busy = useRef(false);

 function go(idx: number) {
  if (idx < 0 || idx >= steps.length || busy.current || idx === activeRef.current) return;
  busy.current = true;
  setOpacity(0);
  setTimeout(() => {
   activeRef.current = idx;
   setActive(idx);
   setOpacity(1);
   setTimeout(() => { busy.current = false; }, 320);
  }, 270);
 }

 useEffect(() => {
  const handler = (e: KeyboardEvent) => {
   if (e.key === 'ArrowLeft') go(activeRef.current - 1);
   if (e.key === 'ArrowRight') go(activeRef.current + 1);
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
 }, []); // eslint-disable-line react-hooks/exhaustive-deps

 const { label, lead, body, image } = steps[active];
 const fadeStyle = { opacity, transition: 'opacity 0.27s ease' };

 return (
  <div className="serve-slider">
   <div className="serve-slider-figure" style={fadeStyle}>
    <ImageSlot name={image} alt={label} ratio="4/5" />
   </div>
   <div className="serve-slider-content">
    <div className="serve-slider-anim" style={fadeStyle}>
     <span className="serve-num">{String(active + 1).padStart(2, '0')}</span>
     <h2 className="serve-slider-label">{label}</h2>
     <p className="serve-slider-sub">{lead}</p>
     <p className="copy serve-slider-body">{body}</p>
    </div>
    <div className="serve-slider-footer">
     <nav className="serve-nav" aria-label={t('stepNav')}>
      <button className="serve-arrow" onClick={() => go(active - 1)} disabled={active === 0} aria-label={t('prevStep')}>&#8592;</button>
      <span className="serve-counter">{String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
      <button className="serve-arrow" onClick={() => go(active + 1)} disabled={active === steps.length - 1} aria-label={t('nextStep')}>&#8594;</button>
     </nav>
     <div className="serve-dots" role="tablist" aria-label={t('stepsLabel')}>
      {steps.map((_, i) => (
       <button key={i} className={`serve-dot${i === active ? ' active' : ''}`} onClick={() => go(i)} aria-label={t('stepAria', { number: i + 1 })} role="tab" aria-selected={i === active} />
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
