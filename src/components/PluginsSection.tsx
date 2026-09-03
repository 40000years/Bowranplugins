'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Table, Columns, ArrowRight, Download, Check, Copy, ShieldCheck, Terminal } from 'lucide-react';
import { PLUGINS } from '@/lib/plugins-data';
import { PluginIcon } from './PluginIcon';
import { AutoSlideSpotlight } from './AutoSlideSpotlight';

export function PluginsSection() {
  const [viewMode, setViewMode] = useState<'spotlight' | 'registry' | 'both'>('spotlight');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const handleCopyWget = (slug: string) => {
    navigator.clipboard.writeText(`wget https://github.com/40000years/${slug}/releases/latest/download/${slug}.jar`);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <section className="section" id="plugins" style={{ paddingTop: '4rem', scrollMarginTop: '4rem' }}>
      <div className="container">
        {/* Section Header with View Selector */}
        <div className="plugins-view-mode-bar">
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
              Plugin Ecosystem
            </span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
              Explore Plugins
            </h2>
          </div>

          {/* View Mode Toggle: Immersive vs Technical */}
          <div className="view-mode-toggle">
            <button
              type="button"
              onClick={() => setViewMode('spotlight')}
              className={`view-mode-btn ${viewMode === 'spotlight' ? 'active' : ''}`}
            >
              <Sparkles style={{ width: '0.85rem', height: '0.85rem' }} />
              <span>Immersive Spotlight</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('registry')}
              className={`view-mode-btn ${viewMode === 'registry' ? 'active' : ''}`}
            >
              <Table style={{ width: '0.85rem', height: '0.85rem' }} />
              <span>Technical Registry</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={`view-mode-btn ${viewMode === 'both' ? 'active' : ''}`}
            >
              <Columns style={{ width: '0.85rem', height: '0.85rem' }} />
              <span>Dual View</span>
            </button>
          </div>
        </div>

        {/* View 1: Immersive Auto-Slide Spotlight */}
        {(viewMode === 'spotlight' || viewMode === 'both') && (
          <div style={{ marginBottom: viewMode === 'both' ? '4rem' : '0' }}>
            <AutoSlideSpotlight />
          </div>
        )}

        {/* View 2: Technical Registry Table */}
        {(viewMode === 'registry' || viewMode === 'both') && (
          <div>
            {viewMode === 'both' && (
              <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Table style={{ width: '1rem', height: '1rem', color: 'var(--accent)' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Technical Release Registry
                </h3>
              </div>
            )}

            <div className="registry-table-card" style={{ marginTop: 0 }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="registry-table">
                  <thead>
                    <tr>
                      <th>Plugin / Repository</th>
                      <th>Category</th>
                      <th>Tested Engine</th>
                      <th>Version</th>
                      <th>Quick CLI Install</th>
                      <th style={{ textAlign: 'right' }}>Direct Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PLUGINS.map((plugin) => {
                      const latest = plugin.versions[0];
                      return (
                        <tr key={plugin.id}>
                          <td>
                            <div className="registry-plugin-name">
                              <div
                                style={{
                                  width: '2.25rem',
                                  height: '2.25rem',
                                  borderRadius: '0.5rem',
                                  background: 'var(--bg-tertiary)',
                                  border: '1px solid var(--border-default)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                }}
                              >
                                <PluginIcon slug={plugin.slug} color={plugin.accentColor} size="1.25rem" />
                              </div>
                              <div>
                                <Link
                                  href={`/plugins/${plugin.slug}`}
                                  style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}
                                >
                                  {plugin.name}
                                </Link>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                                  {plugin.tagline}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td>
                            <span
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-secondary)',
                                fontFamily: 'monospace',
                              }}
                            >
                              {plugin.category}
                            </span>
                          </td>

                          <td>
                            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                              {plugin.platforms.slice(0, 2).map((p) => (
                                <span key={p} className="badge">
                                  {p}
                                </span>
                              ))}
                              <span className="badge badge-accent">MC {plugin.testedVersions[0]}</span>
                            </div>
                          </td>

                          <td>
                            <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--text-primary)' }}>
                              v{latest?.version || '1.0.0'}
                            </span>
                          </td>

                          <td>
                            <button
                              type="button"
                              onClick={() => handleCopyWget(plugin.slug)}
                              className="btn btn-sm"
                              style={{
                                fontFamily: 'monospace',
                                fontSize: '0.72rem',
                                background: 'var(--bg-tertiary)',
                                color: 'var(--text-secondary)',
                                border: '1px solid var(--border-subtle)',
                              }}
                            >
                              {copiedSlug === plugin.slug ? (
                                <>
                                  <Check style={{ width: '0.75rem', height: '0.75rem', color: 'var(--success)' }} />
                                  Copied wget
                                </>
                              ) : (
                                <>
                                  <Copy style={{ width: '0.75rem', height: '0.75rem' }} />
                                  wget .jar
                                </>
                              )}
                            </button>
                          </td>

                          <td style={{ textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                              <Link href={`/plugins/${plugin.slug}`} className="btn btn-secondary btn-sm">
                                Specs
                              </Link>
                              <Link href={`/plugins/${plugin.slug}#download`} className="btn btn-primary btn-sm">
                                <Download style={{ width: '0.8rem', height: '0.8rem' }} />
                                .JAR
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
