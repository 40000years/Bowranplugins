'use client';

import React from 'react';
import { AutoSlideSpotlight } from '@/components/AutoSlideSpotlight';

export function ImmersiveSpotlightLayout() {
  return (
    <div className="spotlight-layout-wrapper">
      <section className="spotlight-hero">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              The Bowranplugins Suite
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: '0.75rem',
              }}
            >
              Plugins from the{' '}
              <span style={{ color: 'var(--accent)' }}>edge of the Void</span>
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '540px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Transforming death mechanics and void boundaries on Paper 26.2 (Java 21) Minecraft servers.
            </p>
          </div>

          {/* Auto-Slide Spotlight Showcase */}
          <AutoSlideSpotlight />
        </div>
      </section>
    </div>
  );
}
