'use client';

import ScrollReveal from './ScrollReveal';
import { personal } from '@/lib/data';

const S: React.CSSProperties = {
  fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 20,
};

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div>
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
              Exploring Software Development, Machine Learning, and AI.
            </h2>
            {personal.bio.map((para, i) => (
              <p key={i} style={S} dangerouslySetInnerHTML={{ __html: para
                .replace(/<strong>/g, '<strong style="color:var(--text-primary);font-weight:600">')
              }} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
