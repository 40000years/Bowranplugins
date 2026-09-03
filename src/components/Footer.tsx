'use client';

import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span style={{ fontSize: '1rem' }}>◆</span>
              Bowranplugins
            </div>
            <p className="footer-tagline">
              Plugins for Minecraft servers.<br />
              Built at the edge of the Void.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigate</h4>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/#plugins" className="footer-link">Plugins</Link>
            <Link href="/plugins/afterdeath" className="footer-link">Afterdeath</Link>
            <Link href="/plugins/voidscape" className="footer-link">Voidscape</Link>
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
