'use client';

import React from 'react';
import { Zap, Shield, Server, Box, Cpu, Sparkles, CheckCircle2, Swords, ShieldAlert, Eye } from 'lucide-react';

const marqueeItems = [
  { label: 'Paper API 26.2 Verified (Java 21)', icon: <Server style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> },
  { label: 'Geyser & Floodgate Bedrock Cross-Play', icon: <Cpu style={{ width: '0.85rem', height: '0.85rem', color: '#3b82f6' }} /> },
  { label: 'Mace Smash & Bedrock Sweep Attack', icon: <Swords style={{ width: '0.85rem', height: '0.85rem', color: '#f43f5e' }} /> },
  { label: 'Silent Anti-Freecam Container Masking', icon: <ShieldAlert style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> },
  { label: 'Persistent Night Vision (/nv)', icon: <Eye style={{ width: '0.85rem', height: '0.85rem', color: '#f59e0b' }} /> },
  { label: 'Death Clock Auto-Recall (120s)', icon: <Zap style={{ width: '0.85rem', height: '0.85rem', color: '#a855f7' }} /> },
  { label: 'The Abyssal Warden Boss (5,000 HP)', icon: <Shield style={{ width: '0.85rem', height: '0.85rem', color: '#ef4444' }} /> },
  { label: 'Finite 3-Layer Void Dimension', icon: <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#3b82f6' }} /> },
  { label: 'Direct .JAR Binary Downloads', icon: <Box style={{ width: '0.85rem', height: '0.85rem', color: '#f59e0b' }} /> },
];

export function TelemetryMarquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {/* Render twice for continuous seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item.icon}
            <span>{item.label}</span>
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
