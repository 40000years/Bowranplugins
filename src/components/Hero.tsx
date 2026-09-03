'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <ScrollReveal>
          <div className="hero-badge">
            <span className="badge badge-accent">
              <span style={{ fontSize: '0.5rem', lineHeight: 1 }}>◆</span>
              Minecraft Plugin Development
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="text-display hero-title">
            Plugins from the<br />
            <span style={{ color: 'var(--accent)' }}>edge of the Void</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="text-subheading hero-subtitle">
            Powerful Minecraft plugins designed to transform your server.
            Built with precision, released into the unknown.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="hero-actions">
            <a href="#plugins" className="btn btn-primary btn-lg">
              Explore Plugins
            </a>
            <a
              href="https://github.com/40000years"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              View GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <ChevronDown strokeWidth={1.5} style={{ width: '1.5rem', height: '1.5rem' }} />
      </div>
    </section>
  );
}
