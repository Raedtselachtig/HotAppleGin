'use client';
import { useEffect, useRef, useState } from 'react';

// Desktop-only background video. Mobile browsers (iOS especially) frequently block
// muted-autoplay and can leave the hero blank, so on small screens we skip the
// video entirely and let the poster <Image> + CSS ken-burns zoom carry the motion.
export function HeroVideo({ src, focal }: { src: string; focal?: string }) {
 const ref = useRef<HTMLVideoElement>(null);
 const [show, setShow] = useState(false);

 useEffect(() => {
  setShow(window.matchMedia('(min-width: 601px)').matches);
 }, []);

 useEffect(() => {
  if (!show) return;
  const v = ref.current;
  if (!v) return;
  v.muted = true;
  const tryPlay = () => { v.play().catch(() => {}); };
  tryPlay();
  v.addEventListener('canplay', tryPlay, { once: true });
  return () => v.removeEventListener('canplay', tryPlay);
 }, [show]);

 if (!show) return null;
 return <video ref={ref} className="hero-video" src={src} autoPlay muted loop playsInline preload="auto" style={focal ? { objectPosition: focal } : undefined} />;
}
