'use client';
import { useEffect, useRef } from 'react';

// Robust mobile autoplay: React doesn't always reflect the `muted` JSX prop to the
// DOM property, which makes iOS block muted autoplay. We set it on the element and
// force play() on mount and again once the data is ready.
export function HeroVideo({ src, poster }: { src: string; poster?: string }) {
 const ref = useRef<HTMLVideoElement>(null);
 useEffect(() => {
  const v = ref.current;
  if (!v) return;
  v.muted = true;
  const tryPlay = () => { v.play().catch(() => {}); };
  tryPlay();
  v.addEventListener('canplay', tryPlay, { once: true });
  return () => v.removeEventListener('canplay', tryPlay);
 }, []);
 return <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline preload="auto" />;
}
