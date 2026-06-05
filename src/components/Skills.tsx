'use client';

import ScrollReveal from './ScrollReveal';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              02. Skills
              <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
            </p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              Tech Stack
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12, maxWidth: 480 }}>
              Technologies and tools I work with regularly
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 18,
        }}>
          {skills.map((card, i) => (
            <ScrollReveal key={card.title} className={`delay-${(i % 3) + 1}`}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 28, transition: 'all 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border-hover)';
                  el.style.transform   = 'translateY(-4px)';
                  el.style.boxShadow   = 'var(--shadow-card)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.transform   = 'none';
                  el.style.boxShadow   = 'none';
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{card.icon}</div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600,
                  color: 'var(--text-secondary)', textTransform: 'uppercase',
                  letterSpacing: '1.5px', marginBottom: 16,
                }}>
                  {card.title}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {card.tags.map(tag => (
                    <span key={tag} style={{
                      display: 'inline-block', padding: '5px 11px', borderRadius: 6,
                      background: 'var(--accent-dim)', border: '1px solid var(--border)',
                      fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)',
                      fontFamily: 'JetBrains Mono, monospace', transition: 'all 0.2s',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
