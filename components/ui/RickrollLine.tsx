'use client';
import { useEffect, useRef, useState } from 'react';

// Easter egg: clicking the closing line plays the song on the site itself via a
// hidden YouTube embed (official source) — no redirect, no visible player. The
// click is the user gesture browsers want; the hint appears once the track starts.
const RICK_SRC = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding=1&playsinline=1';

export function RickrollLine({ text }: { text: string }) {
 const [playing, setPlaying] = useState(false);
 const [hint, setHint] = useState(false);
 const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

 useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

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
