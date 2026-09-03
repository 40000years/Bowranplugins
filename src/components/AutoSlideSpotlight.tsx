'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, ChevronLeft, ChevronRight, Play, Pause, Shield, CheckCircle2 } from 'lucide-react';
import { PLUGINS } from '@/lib/plugins-data';
import { PluginIcon } from './PluginIcon';
import { InGameMechanicSimulator } from './InGameMechanicSimulator';

const SLIDE_DURATION = 6000; // 6 seconds per slide

export function AutoSlideSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const activePlugin = PLUGINS[currentIndex] || PLUGINS[0];
  const latestVersion = activePlugin.versions[0];
  const startTimeRef = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  // Auto-slide loop with progress animation
  useEffect(() => {
    if (isPaused) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * SLIDE_DURATION;

    const updateProgress = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(currentProgress);

      if (elapsed >= SLIDE_DURATION) {
        // Move to next slide
        setCurrentIndex((prev) => (prev + 1) % PLUGINS.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      } else {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleSelectPlugin = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PLUGINS.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PLUGINS.length) % PLUGINS.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  return (
    <div
      className="spotlight-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Auto-Slide Navigation Bar */}
      <div className="spotlight-auto-header">
        {/* Pills with live filling progress line */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {PLUGINS.map((plugin, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={plugin.id}
                className="spotlight-pill-wrapper"
                style={
                  isActive
                    ? ({
                        '--pill-accent': plugin.accentColor,
                      } as React.CSSProperties)
                    : {}
                }
              >
                <button
                  type="button"
                  onClick={() => handleSelectPlugin(idx)}
                  className={`spotlight-pill ${isActive ? 'active' : ''}`}
                  style={{ borderRadius: '9999px' }}
                >
                  <PluginIcon slug={plugin.slug} color={plugin.accentColor} size="1.25rem" />
                  <span>{plugin.name}</span>
                  <span className="badge" style={{ fontSize: '0.625rem', padding: '0.1rem 0.4rem' }}>
                    v{plugin.versions[0]?.version}
                  </span>
                </button>

                {/* Animated Progress Bar underneath active pill */}
                {isActive && (
                  <div
                    className="spotlight-progress-line"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="spotlight-controls">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="spotlight-nav-btn"
            title={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
            aria-label={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
          >
            {isPaused ? (
              <Play style={{ width: '0.85rem', height: '0.85rem', color: 'var(--success)' }} />
            ) : (
              <Pause style={{ width: '0.85rem', height: '0.85rem' }} />
            )}
          </button>
          <button
            type="button"
            onClick={handlePrev}
            className="spotlight-nav-btn"
            title="Previous plugin"
            aria-label="Previous plugin"
          >
            <ChevronLeft style={{ width: '1rem', height: '1rem' }} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="spotlight-nav-btn"
            title="Next plugin"
            aria-label="Next plugin"
          >
            <ChevronRight style={{ width: '1rem', height: '1rem' }} />
          </button>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            {isPaused ? 'PAUSED' : 'AUTO-PLAYING'}
          </span>
        </div>
      </div>

      {/* Main Spotlight Card */}
      <div
        className="spotlight-card"
        style={{
          borderColor: `${activePlugin.accentColor}40`,
          transition: 'border-color 0.4s ease',
        }}
      >
        {/* Dynamic Glow matching plugin color */}
        <div
          className="spotlight-glow"
          style={{
            background: `radial-gradient(circle, ${activePlugin.accentColor} 0%, transparent 70%)`,
            transition: 'background 0.5s ease',
          }}
        />

        {/* Left Column: Details & Quick Actions */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
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

          <h3 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
            {activePlugin.name}
          </h3>

          <p style={{ fontSize: '1.05rem', color: activePlugin.accentColor, fontStyle: 'italic', marginBottom: '1.25rem' }}>
            &ldquo;{activePlugin.tagline}&rdquo;
          </p>

          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            {activePlugin.description}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
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

          {/* Key Commands snippet */}
          <div>
            <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>
              Quick Commands
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {activePlugin.commands.map((cmd) => (
                <code
                  key={cmd.command}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '5px',
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

        {/* Right Column: Live In-Game Mechanics Simulator */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <InGameMechanicSimulator slug={activePlugin.slug} accentColor={activePlugin.accentColor} />

          {/* Feature Highlights checklist */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {activePlugin.features.slice(0, 3).map((feat, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', fontSize: '0.825rem' }}>
                <CheckCircle2 style={{ width: '0.95rem', height: '0.95rem', color: activePlugin.accentColor, flexShrink: 0 }} />
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{feat.title}</span>
                <span style={{ color: 'var(--text-muted)' }}>— {feat.description.slice(0, 45)}...</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
