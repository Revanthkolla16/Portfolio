'use client';

import { useEffect, useRef, useState } from 'react';
import { personal } from '@/lib/data';

const PHRASES = [
  'CS Student @ IIITDM Kancheepuram',
  'Software Development',
  'ML & Deep Learning',
  'GenAI & AI Agents',
];

function useTyping() {
  const [text, setText]  = useState('');
  const state = useRef({ pi: 0, ci: 0, del: false });

  useEffect(() => {
    const tick = () => {
      const { pi, ci, del } = state.current;
      const phrase = PHRASES[pi];
      if (!del) {
        const next = ci + 1;
        setText(phrase.slice(0, next));
        if (next === phrase.length) {
          state.current.del = true;
          setTimeout(tick, 1800);
          return;
        }
        state.current.ci = next;
      } else {
        const next = ci - 1;
        setText(phrase.slice(0, next));
        if (next === 0) {
          state.current.del  = false;
          state.current.ci   = 0;
          state.current.pi   = (pi + 1) % PHRASES.length;
        } else {
          state.current.ci = next;
        }
      }
      setTimeout(tick, del ? 40 : 80);
    };
    const t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, []);

  return text;
}

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const run = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [active, target, duration]);
  return val;
}

const STATS = [
  { num: 10,  suffix: '+', label: 'Projects'         },
  { num: 450, suffix: '+', label: 'LeetCode Problems' },
];

function HeroStats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const c0 = useCountUp(STATS[0].num, active);
  const c1 = useCountUp(STATS[1].num, active);
  const counts = [c0, c1];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }} className="animate-fade-up-7">
      {STATS.map((s, i) => (
        <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{
            fontSize: 28, fontWeight: 800, color: 'var(--text-primary)',
            letterSpacing: '-1px', fontFamily: 'JetBrains Mono, monospace',
          }}>
            {counts[i]}{s.suffix}
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
            {s.label}
          </span>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-1px', fontFamily: 'JetBrains Mono, monospace' }}>∞</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.5px' }}>Curiosity</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTyping();

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.4,
        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%,black 0%,transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 30%,black 0%,transparent 80%)',
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(255,255,255,0.05) 0%,transparent 70%)',
      }} />

      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '100px 24px 80px',
        position: 'relative', zIndex: 1, width: '100%',
      }}>
        {/* Badge */}
        <div className="animate-fade-up-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', borderRadius: 100,
          border: '1px solid var(--border)', background: 'var(--accent-dim)',
          fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.5px',
          marginBottom: 28,
        }}>
          <span className="dot-pulse" style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--text-secondary)', display: 'inline-block',
          }} />
          Available for opportunities
        </div>

        <p className="animate-fade-up-2" style={{ fontSize: 16, color: 'var(--text-secondary)', marginBottom: 12 }}>
          Hello, I'm
        </p>

        <h1 className="animate-fade-up-3 gradient-text" style={{
          fontSize: 'clamp(48px,8vw,88px)', fontWeight: 900,
          lineHeight: 1.0, letterSpacing: '-3px', marginBottom: 20,
        }}>
          Revanth Kolla
        </h1>

        <p className="animate-fade-up-4" style={{
          fontSize: 'clamp(18px,3vw,26px)', fontWeight: 500,
          color: 'var(--text-secondary)', marginBottom: 28, minHeight: 36,
        }}>
          {typed}
          <span className="cursor-blink" style={{
            display: 'inline-block', width: 2, height: '1em',
            background: 'var(--text-secondary)', marginLeft: 3, verticalAlign: 'middle',
          }} />
        </p>

        <p className="animate-fade-up-5" style={{
          fontSize: 16, color: 'var(--text-muted)', maxWidth: 520,
          lineHeight: 1.8, marginBottom: 44,
        }}>
          CS student at{' '}
          <strong style={{ color: 'var(--text-secondary)' }}>IIITDM Kancheepuram</strong>{' '}
          passionate about building intelligent systems — from scalable backend APIs to
          agentic AI pipelines and deep learning models.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-6" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'var(--text-primary)', color: 'var(--bg-primary)',
            textDecoration: 'none', border: '1px solid var(--text-primary)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
          >
            View Projects
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
            background: 'transparent', color: 'var(--text-secondary)',
            textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'none'; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-up-6 delay-1" style={{ display: 'flex', gap: 20, marginBottom: 56, alignItems: 'center' }}>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.77 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
          <a href="mailto:revanthkolla16@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>

        <HeroStats />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer',
      }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="scroll-line-anim" style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom,transparent,var(--text-muted))',
        }} />
      </div>
    </section>
  );
}
