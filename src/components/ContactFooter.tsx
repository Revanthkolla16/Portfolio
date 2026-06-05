'use client';

import ScrollReveal from './ScrollReveal';
import { personal } from '@/lib/data';

const LINKS = [
  {
    href:  personal.github,
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'Revanthkolla16',
  },
  {
    href:  personal.linkedin,
    icon:  (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.77 13.02H3.56V9h3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'revanth-kolla',
  },
  {
    href:  personal.leetcode,
    icon:  '🧩',
    label: 'LeetCode',
    value: 'Revanth2006',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 500,
              letterSpacing: 3, textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              07. Contact
              <span style={{ flex: 1, maxWidth: 40, height: 1, background: 'var(--text-muted)', display: 'block' }} />
            </p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              Let's Connect
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60, alignItems: 'start',
        }}>
          {/* Left: note + links */}
          <ScrollReveal className="delay-1">
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 40 }}>
              Whether you have an opportunity, a project idea, want to collaborate on research,
              or just want to talk tech — my inbox is always open.
              I'll do my best to get back to you!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {LINKS.map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 18px', background: 'var(--bg-card)',
                  border: '1px solid var(--border)', borderRadius: 12,
                  textDecoration: 'none', transition: 'all 0.2s', color: 'var(--text-secondary)',
                }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border-hover)'; el.style.color = 'var(--text-primary)'; el.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text-secondary)'; el.style.transform = 'none'; }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: 'var(--accent-dim)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: typeof l.icon === 'string' ? 18 : undefined, flexShrink: 0,
                  }}>
                    {l.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-muted)', marginBottom: 2, fontFamily: 'JetBrains Mono, monospace' }}>
                      {l.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: CTA card */}
          <ScrollReveal className="delay-2">
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 20, padding: 40,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 20, textAlign: 'center',
            }}>
              <span style={{ fontSize: 48 }}>👋</span>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>
                Open to Opportunities
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 280 }}>
                Internships, research collaborations, open source contributions,
                and interesting projects.
              </p>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600,
                background: 'var(--text-primary)', color: 'var(--bg-primary)',
                textDecoration: 'none', border: '1px solid var(--text-primary)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
              >
                Say Hello on LinkedIn ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)', borderTop: '1px solid var(--border)',
      padding: '32px 0', position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          © 2026 <span style={{ color: 'var(--text-secondary)' }}>Revanth Kolla</span> — All rights reserved
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--text-muted)' }}>
          Built with Next.js · Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
