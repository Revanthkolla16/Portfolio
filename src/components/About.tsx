'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { personal } from '@/lib/data';

const S: React.CSSProperties = {
  fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20,
};

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 320px',
          gap: 80, alignItems: 'center',
        }}>
          {/* Text */}
          <ScrollReveal>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              01. About Me
              <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
            </p>
            <h2 style={{
              fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2,
              color: 'var(--text-primary)', marginBottom: 32, letterSpacing: '-0.5px',
            }}>
              Building things that think
            </h2>
            {personal.bio.map((para, i) => (
              <p key={i} style={S} dangerouslySetInnerHTML={{ __html: para
                .replace(/<strong>/g, '<strong style="color:var(--text-primary);font-weight:600">')
              }} />
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              {[
                { href: personal.github,   label: 'GitHub ↗'   },
                { href: personal.linkedin, label: 'LinkedIn ↗' },
                { href: personal.leetcode, label: 'LeetCode ↗' },
              ].map(({ href, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: 'transparent', color: 'var(--text-secondary)',
                  textDecoration: 'none', border: '1px solid var(--border)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {label}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Avatar */}
          <ScrollReveal className="delay-2">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 260, height: 260 }}>
                {/* Spinning rings */}
                <div className="spin-slow" style={{
                  position: 'absolute', inset: -12, borderRadius: '50%',
                  border: '1px dashed var(--border)',
                }} />
                <div className="spin-rev" style={{
                  position: 'absolute', inset: -24, borderRadius: '50%',
                  border: '1px dashed var(--border)',
                }} />
                <Image
                  src={personal.avatar}
                  alt="Revanth Kolla"
                  width={260}
                  height={260}
                  priority
                  style={{
                    borderRadius: '50%', objectFit: 'cover',
                    border: '2px solid var(--border)', position: 'relative', zIndex: 1,
                    filter: 'grayscale(100%)', transition: 'filter 0.4s',
                  }}
                  onMouseEnter={e => ((e.target as HTMLImageElement).style.filter = 'grayscale(0%)')}
                  onMouseLeave={e => ((e.target as HTMLImageElement).style.filter = 'grayscale(100%)')}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
