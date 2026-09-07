'use client';

import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

import { PLUGINS } from '@/lib/plugins-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              Bowranplugins
            </div>
            <p className="footer-tagline">
              Plugins for Minecraft servers.<br />
              Built at the edge of the Void.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Plugins</h4>
            <Link href="/plugins" className="footer-link" style={{ fontWeight: 600 }}>All Plugins ({PLUGINS.length})</Link>
            {PLUGINS.map((plugin) => (
              <Link key={plugin.slug} href={`/plugins/${plugin.slug}`} className="footer-link">
                {plugin.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="footer-heading">Resources</h4>
            <Link href="/#about" className="footer-link">About</Link>
            <a
              href="https://github.com/40000years"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}
            >
              <Github style={{ width: '0.75rem', height: '0.75rem' }} />
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {year} Bowranplugins. Open-source Minecraft plugins.
          </p>
          <p className="footer-bottom-text">
            Not affiliated with Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
}
