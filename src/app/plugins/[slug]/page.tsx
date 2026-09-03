'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import { VoidBackground } from '@/components/VoidBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PluginIcon } from '@/components/PluginIcon';
import { getPluginBySlug } from '@/lib/plugins-data';
import {
  ArrowLeft,
  Download,
  Github,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export default function PluginDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const plugin = getPluginBySlug(slug);
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);

  if (!plugin) {
    return (
      <ThemeProvider>
        <VoidBackground />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 2 }}>
          <div className="container" style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh' }}>
            <h1 className="text-heading" style={{ marginBottom: '1rem' }}>Plugin not found</h1>
            <p className="text-subheading" style={{ marginBottom: '2rem' }}>
              The plugin you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/" className="btn btn-secondary">
              <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    );
  }

  const latestVersion = plugin.versions[0];

  const handleDownload = () => {
    setDownloading(true);
    setDownloadDone(false);

    const link = document.createElement('a');
    link.href = latestVersion.downloadUrl;
    link.download = latestVersion.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 5000);
    }, 800);
  };

  return (
    <ThemeProvider>
      <VoidBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero */}
        <section className="detail-hero">
          <div
            className="detail-hero-gradient"
            style={{
              background: `linear-gradient(180deg, ${plugin.gradientFrom}, transparent)`,
            }}
          />
          <div className="container detail-hero-content">
            <ScrollReveal>
              <Link href="/" className="detail-back">
                <ArrowLeft style={{ width: '0.875rem', height: '0.875rem' }} />
                All Plugins
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div
                className="detail-icon"
                style={{ boxShadow: `0 0 32px ${plugin.accentGlow}` }}
              >
                <PluginIcon slug={plugin.slug} color={plugin.accentColor} size="2.25rem" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h1 className="detail-title">{plugin.name}</h1>
              <p className="detail-tagline">&ldquo;{plugin.tagline}&rdquo;</p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="detail-meta">
                {latestVersion && (
                  <span className="badge badge-accent">v{latestVersion.version}</span>
                )}
                {plugin.testedVersions.map((v) => (
                  <span key={v} className="badge">Paper {v}</span>
                ))}
                <span className="badge">{plugin.category}</span>
                {plugin.platforms.map((p) => (
                  <span key={p} className="badge">{p}</span>
                ))}
                <span className="badge">by {plugin.author}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="container">
          {/* Download Section */}
          <ScrollReveal>
            <section className="detail-section" id="download">
              <h2 className="detail-section-title">Download</h2>
              <div className="download-card">
                <div className="download-info">
                  <div>
                    <p className="download-stat-label">Latest Release</p>
                    <p className="download-stat-value">v{latestVersion.version}</p>
                  </div>
                  <div>
                    <p className="download-stat-label">Paper API</p>
                    <p className="download-stat-value">{latestVersion.minecraftVersions.join(', ')}</p>
                  </div>
                  <div>
                    <p className="download-stat-label">File Size</p>
                    <p className="download-stat-value">{latestVersion.fileSize}</p>
                  </div>
                </div>

                <div className="download-actions">
                  <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="btn btn-primary"
                    style={{
                      boxShadow: `0 4px 20px ${plugin.accentGlow}`,
                    }}
                  >
                    <Download style={{ width: '1rem', height: '1rem' }} />
                    {downloading ? 'Preparing…' : 'Download Plugin'}
                  </button>

                  {plugin.sourceUrl && (
                    <a
                      href={plugin.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github style={{ width: '1rem', height: '1rem' }} />
                      Source Code
                    </a>
                  )}
                </div>

                {downloadDone && (
                  <div
                    style={{
                      marginTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8125rem',
                      color: 'var(--success)',
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                    Download started. Check your browser downloads.
                  </div>
                )}
              </div>
            </section>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal>
            <section className="detail-section">
              <h2 className="detail-section-title">About</h2>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '720px',
              }}>
                {plugin.longDescription}
              </p>
            </section>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <section className="detail-section">
              <h2 className="detail-section-title">Features</h2>
              <div className="feature-grid">
                {plugin.features.map((feature, i) => (
                  <div key={i} className="feature-item">
                    <h3 className="feature-item-title">{feature.title}</h3>
                    <p className="feature-item-desc">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Installation */}
          <ScrollReveal>
            <section className="detail-section" id="documentation">
              <h2 className="detail-section-title">Installation</h2>
              <ol className="install-steps">
                {plugin.installation.map((step, i) => (
                  <li key={i} className="install-step">{step}</li>
                ))}
              </ol>
            </section>
          </ScrollReveal>

          {/* Commands */}
          {plugin.commands.length > 0 && (
            <ScrollReveal>
              <section className="detail-section">
                <h2 className="detail-section-title">Commands</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table className="command-table">
                    <thead>
                      <tr>
                        <th>Command</th>
                        <th>Description</th>
                        <th>Permission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plugin.commands.map((cmd, i) => (
                        <tr key={i}>
                          <td><code>{cmd.command}</code></td>
                          <td>{cmd.description}</td>
                          <td><code>{cmd.permission || '—'}</code></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>
          )}

          {/* Permissions */}
          {plugin.permissions.length > 0 && (
            <ScrollReveal>
              <section className="detail-section">
                <h2 className="detail-section-title">Permissions</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table className="command-table">
                    <thead>
                      <tr>
                        <th>Permission Node</th>
                        <th>Description</th>
                        <th>Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plugin.permissions.map((perm, i) => (
                        <tr key={i}>
                          <td><code>{perm.node}</code></td>
                          <td>{perm.description}</td>
                          <td>{perm.default}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>
          )}

          {/* Configuration */}
          {plugin.configuration && (
            <ScrollReveal>
              <section className="detail-section">
                <h2 className="detail-section-title">Configuration</h2>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {plugin.configuration}
                </p>
              </section>
            </ScrollReveal>
          )}

          {/* Changelog */}
          {latestVersion.changelog.length > 0 && (
            <ScrollReveal>
              <section className="detail-section">
                <h2 className="detail-section-title">
                  Changelog — v{latestVersion.version}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {latestVersion.changelog.map((entry, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <ChevronRight style={{ width: '0.75rem', height: '0.75rem', color: 'var(--accent)', flexShrink: 0 }} />
                      {entry}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          )}
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
