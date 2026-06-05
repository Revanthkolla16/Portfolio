'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { lcFocusAreas, personal } from '@/lib/data';

interface LCData {
  total:  number | string;
  easy:   number;
  medium: number;
  hard:   number;
  rank:   string;
}

function Bar({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const pct = Math.min((count / total) * 100, 100).toFixed(1);
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace' }}>{count}</span>
      </div>
      <div style={{ height: 4, background: 'var(--accent-dim)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 2, background: color,
          width: `${pct}%`, transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  );
}

export default function LeetCode() {
  const [data, setData] = useState<LCData>({
    total: '—', easy: 0, medium: 0, hard: 0, rank: '—',
  });
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          `https://alfa-leetcode-api.onrender.com/${personal.leetcodeUser}`,
          { signal: AbortSignal.timeout(7000) }
        );
        const d = await res.json();
        if (d?.totalSolved !== undefined) {
          setData({
            total:  d.totalSolved,
            easy:   d.easySolved   || 0,
            medium: d.mediumSolved || 0,
            hard:   d.hardSolved   || 0,
            rank:   d.ranking ? `#${Number(d.ranking).toLocaleString()}` : 'Top 25%',
          });
        } else throw new Error('bad data');
      } catch {
        // Fallback
        setData({ total: '300+', easy: 120, medium: 150, hard: 30, rank: 'Top 25%' });
      }
    }
    fetchStats();
  }, []);

  /* Trigger bar animation when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLoaded(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const easy   = loaded ? data.easy   : 0;
  const medium = loaded ? data.medium : 0;
  const hard   = loaded ? data.hard   : 0;

  return (
    <section id="leetcode" ref={sectionRef} style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              06. Competitive Programming
              <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
            </p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              LeetCode Stats
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12 }}>
              Consistent problem solving across difficulty levels
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 18,
        }}>
          {/* Stats card */}
          <ScrollReveal className="delay-1">
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28, transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}
            >
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text-muted)', marginBottom: 20 }}>
                Problems Solved
              </p>
              <div style={{ display: 'flex', gap: 32, marginBottom: 28, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '-1px' }}>
                    {data.total}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Total</div>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'JetBrains Mono, monospace' }}>
                    {data.rank}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Global Rank</div>
                </div>
              </div>
              <Bar label="Easy"   count={easy}   total={800}  color="var(--text-secondary)" />
              <Bar label="Medium" count={medium}  total={1700} color="var(--text-primary)" />
              <Bar label="Hard"   count={hard}    total={700}  color="var(--text-primary)" />
            </div>
          </ScrollReveal>

          {/* Focus areas */}
          <ScrollReveal className="delay-2">
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28, transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-hover)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'}
            >
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--text-muted)', marginBottom: 20 }}>
                Focus Areas
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {lcFocusAreas.map(area => (
                  <span key={area} style={{
                    padding: '5px 11px', borderRadius: 6,
                    background: 'var(--accent-dim)', border: '1px solid var(--border)',
                    fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)',
                    fontFamily: 'JetBrains Mono, monospace', transition: 'all 0.2s',
                  }}>
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Profile link */}
          <ScrollReveal>
            <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
              textDecoration: 'none', transition: 'all 0.3s', gridColumn: '1 / -1',
            }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border-hover)'; el.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 32 }}>🏆</span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                    View Full LeetCode Profile
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>@Revanth2006 — Consistent solver, DSA enthusiast</p>
                </div>
              </div>
              <span style={{ fontSize: 20, color: 'var(--text-muted)', transition: 'transform 0.2s' }}>→</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
