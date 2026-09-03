'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle2, Terminal, BookOpen, Shield } from 'lucide-react';
import { PLUGINS } from '@/lib/plugins-data';
import { PluginIcon } from '@/components/PluginIcon';

export function ImmersiveSpotlightLayout() {
  const [selectedPluginId, setSelectedPluginId] = useState<'afterdeath' | 'voidscape'>('afterdeath');

  const activePlugin = PLUGINS.find((p) => p.id === selectedPluginId) || PLUGINS[0];
  const latestVersion = activePlugin.versions[0];

  return (
    <div className="spotlight-layout-wrapper">
      <section className="spotlight-hero">
        <div className="container">
          {/* Plugin Tab Navigator */}
          <div className="spotlight-selector-nav">
            {PLUGINS.map((plugin) => {
              const isSelected = plugin.id === selectedPluginId;
              return (
                <button
                  key={plugin.id}
                  type="button"
                  onClick={() => setSelectedPluginId(plugin.id as 'afterdeath' | 'voidscape')}
                  className={`spotlight-pill ${isSelected ? 'active' : ''}`}
                  style={
                    isSelected
                      ? ({
                          '--pill-accent': plugin.accentColor,
                          '--pill-glow': plugin.accentGlow,
                        } as React.CSSProperties)
                      : {}
                  }
                >
                  <PluginIcon slug={plugin.slug} color={plugin.accentColor} size="1.25rem" />
                  <span>{plugin.name}</span>
                  <span className="badge" style={{ fontSize: '0.625rem', padding: '0.1rem 0.4rem' }}>
                    v{plugin.versions[0]?.version}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Spotlight Presentation Card */}
          <div
            className="spotlight-card"
            style={{
              borderColor: `${activePlugin.accentColor}33`,
            }}
          >
            {/* Background Glow */}
            <div
              className="spotlight-glow"
              style={{
                background: `radial-gradient(circle, ${activePlugin.accentColor} 0%, transparent 70%)`,
              }}
            />

            {/* Left Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge" style={{ color: activePlugin.accentColor, borderColor: `${activePlugin.accentColor}44` }}>
                  {activePlugin.category}
                </span>
                <span className="badge">MC {activePlugin.testedVersions[0]}</span>
                {activePlugin.platforms.map((p) => (
                  <span key={p} className="badge">
                    {p}
                  </span>
                ))}
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                {activePlugin.name}
              </h2>

              <p style={{ fontSize: '1.05rem', color: activePlugin.accentColor, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                &ldquo;{activePlugin.tagline}&rdquo;
              </p>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {activePlugin.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link
                  href={`/plugins/${activePlugin.slug}#download`}
                  className="btn btn-primary btn-lg"
                  style={{ background: activePlugin.accentColor }}
                >
                  <Download style={{ width: '1rem', height: '1rem' }} />
                  Download .JAR ({latestVersion?.version})
                </Link>

                <Link href={`/plugins/${activePlugin.slug}`} className="btn btn-secondary btn-lg">
                  Full Documentation
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </Link>
              </div>

              {/* In-Game Commands quick preview */}
              <div>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Key Commands
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activePlugin.commands.map((cmd) => (
                    <code
                      key={cmd.command}
                      style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {cmd.command}
                    </code>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Feature Showcase */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.75rem',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield style={{ width: '1rem', height: '1rem', color: activePlugin.accentColor }} />
                Included Mechanics
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activePlugin.features.slice(0, 4).map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2
                      style={{
                        width: '1rem',
                        height: '1rem',
                        color: activePlugin.accentColor,
                        flexShrink: 0,
                        marginTop: '0.2rem',
                      }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {f.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {f.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
