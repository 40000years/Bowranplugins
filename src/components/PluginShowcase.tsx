'use client';

import React from 'react';
import { PluginCard } from './PluginCard';
import { ScrollReveal } from './ScrollReveal';
import { PLUGINS } from '@/lib/plugins-data';

export function PluginShowcase() {
  return (
    <section className="section" id="plugins">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="text-label" style={{ marginBottom: '0.75rem' }}>
              Available Plugins
            </p>
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              Explore the Plugins
            </h2>
            <p className="text-subheading" style={{ maxWidth: '520px', margin: '0 auto' }}>
              Production-ready Paper 26.2 plugins with native cross-platform support.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '1.5rem',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {PLUGINS.map((plugin, index) => (
            <ScrollReveal key={plugin.id} delay={index + 1}>
              <PluginCard plugin={plugin} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
