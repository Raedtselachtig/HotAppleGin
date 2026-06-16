'use client';
import { useEffect, useRef, useState } from 'react';

// Easter egg: clicking the closing line plays the song on the site itself via a
// hidden YouTube embed (official, licensed source) — audio only, no redirect, no
// visible player. The click counts as the user gesture browsers require for sound.
// Mobile browsers block hidden-iframe autoplay audio, so this is desktop-only:
// on touch devices the line renders as plain text with no interaction.
const RICK_SRC = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding=1&playsinline=1';

export function RickrollLine({ text }: { text: string }) {
 const [desktop, setDesktop] = useState(false);
 const [playing, setPlaying] = useState(false);
 const [hint, setHint] = useState(false);
 const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

 useEffect(() => {
  setDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  return () => { if (timer.current) clearTimeout(timer.current); };
 }, []);

 if (!desktop) {
  return <p className="copy" style={{ margin: '0 auto' }}>{text}</p>;
 }

 const start = () => {
  setPlaying(true);
  if (timer.current) clearTimeout(timer.current);
  timer.current = setTimeout(() => setHint(true), 2600);
 };
 const stop = () => {
  if (timer.current) { clearTimeout(timer.current); timer.current = null; }
  setHint(false);
  setPlaying(false);
 };

 return (
  <>
   <button type="button" className="copy rickroll-trigger" onClick={start}>{text}</button>
   {playing && <iframe className="rickroll-audio" src={RICK_SRC} allow="autoplay" title="Now playing" aria-hidden="true" tabIndex={-1} />}
   {hint && (
    <div className="rickroll-catch" role="button" tabIndex={0} aria-label="Stop" onClick={stop} onKeyDown={stop}>
     <span className="rickroll-hint">You just got rickrolled. Tap anywhere to make it stop.</span>
    </div>
   )}
  </>
 );
}
