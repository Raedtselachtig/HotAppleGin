'use client';
import { useState, useEffect, useCallback } from 'react';
import { ImageSlot } from '@/components/ui/ImageSlot';

export function ServeSlider({ steps }: { steps: string[][] }) {
 const [active, setActive] = useState(0);

 const prev = useCallback(() => setActive(i => Math.max(0, i - 1)), []);
 const next = useCallback(() => setActive(i => Math.min(steps.length - 1, i + 1)), [steps.length]);

 useEffect(() => {
  const handler = (e: KeyboardEvent) => {
   if (e.key === 'ArrowLeft') prev();
   if (e.key === 'ArrowRight') next();
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
 }, [prev, next]);

 const [title, subtitle, body, image] = steps[active];

 return (
  <div className="serve-slider">
   <div className="serve-slider-figure" key={`fig-${active}`}>
    <ImageSlot name={image} alt={title} ratio="2/3" />
   </div>
   <div className="serve-slider-content">
    <div className="serve-slider-anim" key={`txt-${active}`}>
     <span className="serve-num">{String(active + 1).padStart(2, '0')}</span>
     <h2 className="serve-slider-label">{title}</h2>
     <p className="serve-slider-sub">{subtitle}</p>
     <p className="copy serve-slider-body">{body}</p>
    </div>
    <nav className="serve-nav" aria-label="Step navigation">
     <button className="serve-arrow" onClick={prev} disabled={active === 0} aria-label="Previous step">&#8592;</button>
     <span className="serve-counter">{String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
     <button className="serve-arrow" onClick={next} disabled={active === steps.length - 1} aria-label="Next step">&#8594;</button>
    </nav>
    <div className="serve-dots" role="tablist" aria-label="Steps">
     {steps.map((_, i) => (
      <button
       key={i}
       className={`serve-dot${i === active ? ' active' : ''}`}
       onClick={() => setActive(i)}
       aria-label={`Step ${i + 1}`}
       role="tab"
       aria-selected={i === active}
      />
     ))}
    </div>
   </div>
  </div>
 );
}
