'use client';
import { useEffect, useRef } from 'react';

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame = 0;
    const particles = Array.from({ length: 40 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 2 + 1, s: Math.random() * .35 + .1 }));
    const resize = () => { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; };
    const draw = () => {
      frame = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ef950d';
      particles.forEach((p) => {
        p.y -= p.s / 1000;
        if (p.y < 0) p.y = 1;
        ctx.globalAlpha = .2 + Math.sin(Date.now() / 900 + p.x * 10) * .15;
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="particles" />;
}
