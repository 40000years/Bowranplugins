'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, ExternalLink, Terminal, Check, Copy, ArrowRight, ShieldCheck, Box } from 'lucide-react';
import { PLUGINS } from '@/lib/plugins-data';
import { PluginIcon } from '@/components/PluginIcon';

export function TechnicalRegistryLayout() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const handleCopyCommand = (slug: string) => {
    navigator.clipboard.writeText(`wget https://github.com/40000years/${slug}/releases/latest/download/${slug}.jar`);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="registry-layout-wrapper">
      {/* Blueprint Header */}
      <section className="registry-hero">
        <div className="container">
          <div className="registry-header-badge">
            <span className="registry-coord">INDEX: 0x40000Y</span>
            <span className="registry-coord">SERVER: PAPER/PURPUR</span>
            <span className="registry-coord">API: PAPER 26.2</span>
            <span style={{ color: 'var(--success)' }}>● {PLUGINS.length} RELEASES STABLE</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            รายชื่อปลั๊กอินทั้งหมด
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.6 }}>
            รวมปลั๊กอินทั้งหมดสำหรับเซิร์ฟเวอร์ Minecraft พร้อมดาวน์โหลดไฟล์ .jar และดูคำสั่งการใช้งาน
          </p>
        </div>
      </section>

      {/* Main Registry Table */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="registry-table-card">
            <div style={{ overflowX: 'auto' }}>
              <table className="registry-table">
                <thead>
                  <tr>
                    <th>Plugin / Slug</th>
                    <th>Category</th>
                    <th>Target Engine</th>
                    <th>Latest Build</th>
                    <th>Quick Install / CLI</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PLUGINS.map((plugin) => {
                    const latest = plugin.versions[0];
                    return (
                      <tr key={plugin.id}>
                        {/* Name & Icon */}
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

                        {/* Category */}
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

                        {/* Platforms & Minecraft Versions */}
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

                        {/* Latest Version */}
                        <td>
                          <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--text-primary)' }}>
                            v{latest?.version || '1.0.0'}
                          </span>
                          <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            {latest?.releaseDate || '2024'}
                          </span>
                        </td>

                        {/* Quick Command */}
                        <td>
                          <button
                            type="button"
                            onClick={() => handleCopyCommand(plugin.slug)}
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

                        {/* Actions */}
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

          {/* Compatibility Checker Grid */}
          <div
            style={{
              marginTop: '3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck style={{ width: '1.1rem', height: '1.1rem', color: 'var(--success)' }} />
                Server Engine Verification
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Tested and compiled on Paper API 26.2.build.121-stable (Java 21) with Floodgate & Geyser cross-play integration.
              </p>
            </div>

            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal style={{ width: '1.1rem', height: '1.1rem', color: 'var(--accent)' }} />
                Clean YAML Configuration
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Zero black-box logic. Every feature toggles cleanly via commented YAML files generated on boot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
