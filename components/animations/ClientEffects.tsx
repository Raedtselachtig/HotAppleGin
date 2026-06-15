'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ClientEffects() {
 useEffect(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
   gsap.to('.ken-burns', { scale: 1.08, duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
   document.querySelectorAll('.word-stagger').forEach((el) => {
    const text = el.textContent || '';
    el.innerHTML = text.split(' ').map((word) => `<span style="display:inline-block;overflow:hidden"><span class="hero-word" style="display:inline-block">${word}</span></span>`).join(' ');
    gsap.fromTo(el.querySelectorAll('.hero-word'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger:.1, duration: 1.1, ease: 'power3.out' });
   });
   gsap.utils.toArray<HTMLElement>('.animate-headline').forEach((el) => gsap.from(el, { opacity: 0, y: 40, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } }));
   gsap.utils.toArray<HTMLElement>('.parallax-image').forEach((el) => gsap.fromTo(el, { yPercent: 7 }, { yPercent: -7, ease: 'none', scrollTrigger: { trigger: el, scrub: true } }));
   gsap.utils.toArray<HTMLElement>('.story-line').forEach((el) => gsap.from(el, { opacity: 0, y: 24, duration:.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
  }
 }, []);
 return null;
}
