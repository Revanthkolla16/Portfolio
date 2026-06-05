'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#education',  label: 'Education'  },
  { href: '#experience', label: 'Experience' },
  { href: '#leetcode',   label: 'LeetCode'   },
  { href: '#contact',    label: 'Contact'    },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [theme,      setTheme]      = useState<'dark'|'light'>('dark');
  const [activeSection, setActive]  = useState('');

  /* ── scrolled shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── init theme ── */
  useEffect(() => {
    const saved = localStorage.getItem('rk-theme') as 'dark'|'light'|null;
    const t = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  /* ── active section highlight ── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* ── close mobile on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  function toggleTheme() {
    const next: 'dark'|'light' = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('rk-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'var(--nav-blur)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? 'var(--shadow)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 24px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#hero" style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 18, fontWeight: 600,
            color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.5px',
            opacity: 1, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Revanth<span style={{ color: 'var(--text-secondary)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: 32,
            listStyle: 'none', padding: 0, margin: 0,
          }}
            className="nav-desktop-links"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} style={{
                  fontSize: 13, fontWeight: 500,
                  color: activeSection === href.slice(1) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none', letterSpacing: '0.3px',
                  transition: 'color 0.2s', position: 'relative',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = activeSection === href.slice(1) ? 'var(--text-primary)' : 'var(--text-secondary)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, transition: 'all 0.2s', color: 'var(--text-secondary)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-hover)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; }}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="hamburger-btn"
              style={{
                display: 'none', flexDirection: 'column', gap: 5,
                background: 'none', border: 'none', cursor: 'pointer', padding: 4,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 22, height: 1.5,
                  background: 'var(--text-primary)', display: 'block',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                    : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
          background: 'var(--nav-blur)', backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu} style={{
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontSize: 15, fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Responsive: hide desktop nav & show hamburger on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
