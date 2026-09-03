'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Skull, Compass, Radio, Sparkles } from 'lucide-react';

interface SimulatorProps {
  slug: string;
  accentColor: string;
}

export function InGameMechanicSimulator({ slug, accentColor }: SimulatorProps) {
  // Afterdeath simulation states
  const [isDying, setIsDying] = useState(false);
  const [respawnTimer, setRespawnTimer] = useState(3);

  // Voidscape simulation states
  const [depthY, setDepthY] = useState(64);
  const [isEnteringVoid, setIsEnteringVoid] = useState(false);

  // Afterdeath simulation logic
  const handleTriggerDeath = () => {
    setIsDying(true);
    setRespawnTimer(3);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDying && respawnTimer > 0) {
      interval = setInterval(() => {
        setRespawnTimer((prev) => prev - 1);
      }, 1000);
    } else if (isDying && respawnTimer === 0) {
      const timeout = setTimeout(() => {
        setIsDying(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
    return () => clearInterval(interval);
  }, [isDying, respawnTimer]);

  // Voidscape simulation logic
  const handleDropIntoVoid = () => {
    setIsEnteringVoid(true);
    let currentY = 64;
    const interval = setInterval(() => {
      currentY -= 16;
      if (currentY <= -128) {
        clearInterval(interval);
        setDepthY(-128);
        setTimeout(() => {
          setIsEnteringVoid(false);
          setDepthY(64); // Teleport back to surface
        }, 1500);
      } else {
        setDepthY(currentY);
      }
    }, 200);
  };

  if (slug === 'afterdeath') {
    return (
      <div className="mechanic-sim-card">
        <div className="sim-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor }}>
            <Skull style={{ width: '0.85rem', height: '0.85rem' }} />
            In-Game Mechanic: Death Sequence
          </span>
          <button
            type="button"
            onClick={handleTriggerDeath}
            disabled={isDying}
            className="btn btn-sm"
            style={{
              fontSize: '0.7rem',
              padding: '0.2rem 0.6rem',
              background: isDying ? 'var(--bg-tertiary)' : accentColor,
              color: '#fff',
            }}
          >
            <Play style={{ width: '0.65rem', height: '0.65rem' }} />
            {isDying ? 'Simulating...' : 'Simulate /kill'}
          </button>
        </div>

        <div className="sim-body">
          {/* Default State */}
          {!isDying ? (
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Player State: <span style={{ color: '#10b981' }}>ALIVE (20 HP)</span>
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '300px', margin: '0 auto 1.25rem' }}>
                Click &ldquo;Simulate /kill&rdquo; to test the custom post-mortem event handler in real time.
              </p>
              <div style={{ display: 'inline-flex', gap: '0.5rem', background: 'var(--bg-tertiary)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                <span>Sound: <code>entity.wither.spawn</code></span>
                <span>•</span>
                <span>Particles: <code>SOUL_FIRE</code></span>
              </div>
            </div>
          ) : (
            /* Active Death Overlay */
            <div className="death-screen-overlay">
              <div className="death-title">YOU DIED!</div>
              <div className="death-subtitle">
                {respawnTimer > 0 ? '✦ The Void claims what remains...' : '✔ Respawn anchor activated! Returning...'}
              </div>
              <div className="death-timer-pill">
                {respawnTimer > 0 ? `Respawn sequence: ${respawnTimer}s` : 'Respawned at Spawn'}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Voidscape simulation
  const progressPercent = Math.max(0, Math.min(100, Math.round(((64 - depthY) / 192) * 100)));

  return (
    <div className="mechanic-sim-card">
      <div className="sim-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor }}>
          <Compass style={{ width: '0.85rem', height: '0.85rem' }} />
          In-Game Mechanic: Void Boundary
        </span>
        <button
          type="button"
          onClick={handleDropIntoVoid}
          disabled={isEnteringVoid}
          className="btn btn-sm"
          style={{
            fontSize: '0.7rem',
            padding: '0.2rem 0.6rem',
            background: isEnteringVoid ? 'var(--bg-tertiary)' : accentColor,
            color: '#fff',
          }}
        >
          <Play style={{ width: '0.65rem', height: '0.65rem' }} />
          {isEnteringVoid ? 'Falling...' : 'Fall Into Void'}
        </button>
      </div>

      <div className="sim-body">
        <div className="void-depth-meter">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'monospace' }}>
            <span style={{ color: 'var(--text-muted)' }}>Surface (Y: 64)</span>
            <span style={{ color: accentColor, fontWeight: 700 }}>
              Current: Y = {depthY}
            </span>
            <span style={{ color: '#ef4444' }}>Deep Void (Y: -128)</span>
          </div>

          <div className="depth-bar-track">
            <div
              className="depth-bar-indicator"
              style={{
                width: `${progressPercent}%`,
              }}
            />
          </div>

          <div className="depth-stats-grid">
            <div className="depth-stat-box">
              <div className="depth-stat-label">Gravity Scale</div>
              <div className="depth-stat-val" style={{ color: depthY < 0 ? accentColor : '#10b981' }}>
                {depthY < -64 ? '0.2x (Float)' : depthY < 0 ? '0.6x' : '1.0x Normal'}
              </div>
            </div>

            <div className="depth-stat-box">
              <div className="depth-stat-label">Void Zone Status</div>
              <div className="depth-stat-val" style={{ color: depthY < -64 ? '#ec4899' : depthY < 0 ? '#3b82f6' : 'var(--text-muted)' }}>
                {depthY <= -128 ? 'RESCUED / TP' : depthY < -64 ? 'DEEP VOID' : depthY < 0 ? 'BORDER' : 'SAFE'}
              </div>
            </div>

            <div className="depth-stat-box">
              <div className="depth-stat-label">Lethal Damage</div>
              <div className="depth-stat-val" style={{ color: '#10b981' }}>
                NULLIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
