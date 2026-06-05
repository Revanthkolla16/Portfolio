'use client';

import ScrollReveal from './ScrollReveal';
import { education, experience } from '@/lib/data';

function Badge({ label }: { label: string }) {
  return (
    <span style={{
      padding: '4px 10px', borderRadius: 4, fontSize: 11, fontWeight: 600,
      fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)',
      background: 'var(--accent-dim)', border: '1px solid var(--border)', letterSpacing: '0.3px',
    }}>
      {label}
    </span>
  );
}

function SectionLabel({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <p style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
        letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
        marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {n}
        <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
      </p>
      <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
        {title}
      </h2>
      {sub && <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12 }}>{sub}</p>}
    </div>
  );
}

export function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal><SectionLabel n="04. Education" title="Academic Background" /></ScrollReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{
            position: 'absolute', left: 0, top: 8, bottom: 8, width: 1,
            background: 'linear-gradient(to bottom,var(--text-muted),transparent)',
          }} />
          {education.map((e, i) => (
            <ScrollReveal key={i} className="delay-1">
              <div style={{ position: 'relative', marginBottom: 48 }}>
                <div style={{
                  position: 'absolute', left: -36, top: 6,
                  width: 9, height: 9, borderRadius: '50%',
                  background: 'var(--text-primary)', border: '2px solid var(--bg-primary)',
                  boxShadow: '0 0 0 2px var(--text-muted)',
                }} />
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>
                  {e.period}
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, letterSpacing: '-0.3px' }}>
                  {e.degree}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 12 }}>
                  {e.org}
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14 }}>
                  {e.desc}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {e.badges.map(b => <Badge key={b} label={b} />)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal><SectionLabel n="05. Experience" title="Work & Research" /></ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {experience.map((exp, i) => (
            <ScrollReveal key={i} className="delay-1">
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 36,
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 28,
                transition: 'all 0.3s', maxWidth: 780,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-hover)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'var(--accent-dim)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, flexShrink: 0,
                }}>
                  {exp.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 4 }}>
                    {exp.org}
                  </p>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text-muted)', marginBottom: 16 }}>
                    {exp.period}
                  </p>
                  <ul style={{ paddingLeft: 16, marginBottom: 16 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 6 }}
                        dangerouslySetInnerHTML={{ __html: b.replace(/<strong>/g, '<strong style="color:var(--text-primary);font-weight:600">') }}
                      />
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {exp.badges.map(b => <Badge key={b} label={b} />)}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          #experience .exp-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
