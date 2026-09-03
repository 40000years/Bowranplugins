'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { InteractiveServerTerminal } from '@/components/InteractiveServerTerminal';
import { TelemetryMarquee } from '@/components/TelemetryMarquee';
import { PluginsSection } from '@/components/PluginsSection';

export function TerminalSplitLayout() {
  return (
    <div className="terminal-layout-wrapper">
      {/* Asymmetric Engineering Hero */}
      <section className="terminal-hero">
        <div className="container">
          <div className="terminal-grid">
            {/* Left Column: Purpose & Server Status */}
            <div className="terminal-lead">
              <div className="server-status-pill">
                <span className="server-status-dot" />
                <span>Paper / Purpur 1.21.x Ready</span>
                <span style={{ color: 'var(--text-muted)' }}>|</span>
                <span style={{ color: 'var(--success)' }}>TPS: 20.0</span>
              </div>

              <h1 className="terminal-h1">
                Engineered for high-tickrate{' '}
                <span style={{ color: 'var(--accent)' }}>Minecraft servers.</span>
              </h1>

              <p className="terminal-desc">
                Event-driven Spigot & Paper plugins that transform vanilla death and void mechanics.
                Zero tick-lag overhead, cleanly documented, built with production stability in mind.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#plugins-deck" className="btn btn-primary btn-lg">
                  Browse Plugins
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </a>
                <a
                  href="https://github.com/40000years"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  GitHub Repository
                </a>
              </div>

              {/* Hardware / Engine Spec row */}
              <div className="terminal-specs-row">
                <div className="terminal-spec-item">
                  <span className="terminal-spec-value">0.02ms</span>
                  <span className="terminal-spec-label">Avg Tick Impact</span>
                </div>
                <div className="terminal-spec-item">
                  <span className="terminal-spec-value">Java 21</span>
                  <span className="terminal-spec-label">Target Runtime</span>
                </div>
                <div className="terminal-spec-item">
                  <span className="terminal-spec-value">1.20 - 1.21+</span>
                  <span className="terminal-spec-label">Verified MC Builds</span>
                </div>
                <div className="terminal-spec-item">
                  <span className="terminal-spec-value">100%</span>
                  <span className="terminal-spec-label">Open Source</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Server Terminal */}
            <div>
              <InteractiveServerTerminal />
              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.75rem',
                  textAlign: 'right',
                  fontFamily: 'monospace',
                }}
              >
                ● Live simulation: Click &ldquo;Simulate Event&rdquo; or switch to config.yml
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling Telemetry Ticker Marquee */}
      <TelemetryMarquee />

      {/* Combined Immersive & Technical Plugins Section */}
      <PluginsSection />
    </div>
  );
}
