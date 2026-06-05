'use client';

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    const saved = localStorage.getItem('rk-theme');
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
    const theme = saved || preferred;
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return null;
}
