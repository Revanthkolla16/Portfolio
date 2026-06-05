'use client';

import ScrollReveal from './ScrollReveal';
import { projects } from '@/lib/data';

const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const EXT_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              03. Projects
              <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
            </p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              Things I've Built
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginTop: 12, maxWidth: 480 }}>
              A selection of projects spanning AI, web, and systems
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 18,
        }}>
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} className={`delay-${(i % 3) + 1}`}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column',
                gap: 16, transition: 'all 0.3s', height: '100%',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border-hover)';
                  el.style.transform   = 'translateY(-6px)';
                  el.style.boxShadow   = 'var(--shadow)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.transform   = 'none';
                  el.style.boxShadow   = 'none';
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ fontSize: 32 }}>{p.icon}</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        title="GitHub"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 34, height: 34, borderRadius: 8,
                          border: '1px solid var(--border)', background: 'var(--accent-dim)',
                          color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {GH_ICON}
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        title="Live Demo"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 34, height: 34, borderRadius: 8,
                          border: '1px solid var(--border)', background: 'var(--accent-dim)',
                          color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                      >
                        {EXT_ICON}
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.3px' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      padding: '3px 9px', borderRadius: 4, fontSize: 11, fontWeight: 500,
                      fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-muted)',
                      background: 'var(--accent-dim)', border: '1px solid var(--border)', letterSpacing: '0.3px',
                    }}>
                      {t}
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
