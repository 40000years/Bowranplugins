'use client';

import React from 'react';
import { Zap, Shield, Server, Box, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

const marqueeItems = [
  { label: 'Paper & Purpur 1.21.x Verified', icon: <Server style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> },
  { label: '0.02ms Avg Tick Overhead', icon: <Zap style={{ width: '0.85rem', height: '0.85rem', color: '#3b82f6' }} /> },
  { label: 'Zero Memory Leaks Guaranteed', icon: <Cpu style={{ width: '0.85rem', height: '0.85rem', color: '#a855f7' }} /> },
  { label: '100% Open Source (GPL-3.0)', icon: <Shield style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> },
  { label: 'Folia Multi-threaded Ready', icon: <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#3b82f6' }} /> },
  { label: 'Direct .JAR Binary Downloads', icon: <Box style={{ width: '0.85rem', height: '0.85rem', color: '#f59e0b' }} /> },
  { label: 'Dynamic YAML Config Generator', icon: <CheckCircle2 style={{ width: '0.85rem', height: '0.85rem', color: '#10b981' }} /> },
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
