'use client';

import ScrollReveal from './ScrollReveal';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 32 }}>
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
          </div>
        </ScrollReveal>

        {/* Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
        }}>
          {skills.map((section, i) => (
            <ScrollReveal key={section.title} className={`delay-${(i % 3) + 1}`}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h3 style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 16, fontWeight: 700,
                  color: 'var(--text-primary)', textTransform: 'uppercase',
                  letterSpacing: '1px', marginBottom: 20,
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  {section.title}
                  <span style={{
                    position: 'absolute', bottom: -6, left: 0, width: '40px',
                    height: '2px', background: 'var(--text-muted)'
                  }} />
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'flex-start' }}>
                  {section.tags.map(tag => (
                    <span key={tag} style={{
                      display: 'inline-block', padding: '8px 14px', borderRadius: 8,
                      background: 'var(--bg-card)', border: '1px solid var(--border)',
                      fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)',
                      fontFamily: 'JetBrains Mono, monospace', transition: 'all 0.2s',
                      cursor: 'default'
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = 'var(--border-hover)';
                      el.style.color = 'var(--text-primary)';
                      el.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = 'var(--border)';
                      el.style.color = 'var(--text-secondary)';
                      el.style.transform = 'none';
                    }}
                    >
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
