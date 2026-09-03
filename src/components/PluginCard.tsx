'use client';

import React from 'react';
import Link from 'next/link';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import { PluginData } from '@/types/plugin';

interface PluginCardProps {
  plugin: PluginData;
}

export function PluginCard({ plugin }: PluginCardProps) {
  const latestVersion = plugin.versions[0];

  return (
    <Link href={`/plugins/${plugin.slug}`} className="plugin-card" id={`plugin-${plugin.id}`}>
      <div
        className="plugin-card-gradient"
        style={{
          background: `linear-gradient(135deg, ${plugin.gradientFrom}, ${plugin.gradientTo})`,
        }}
      />

      <div className="plugin-card-body">
        <div
          className="plugin-card-icon"
          style={{
            boxShadow: `0 0 24px ${plugin.accentGlow}`,
          }}
        >
          {plugin.iconEmoji}
        </div>

        <h3 className="plugin-card-name">{plugin.name}</h3>

        <p className="plugin-card-tagline">&ldquo;{plugin.tagline}&rdquo;</p>

        <p className="plugin-card-description">{plugin.description}</p>

        <div className="plugin-card-meta">
          {latestVersion && (
            <span className="badge">v{latestVersion.version}</span>
          )}
          {plugin.testedVersions[0] && (
            <span className="badge">MC {plugin.testedVersions[0]}</span>
          )}
          <span className="badge">{plugin.category}</span>
          {plugin.platforms.slice(0, 2).map((p) => (
            <span key={p} className="badge">{p}</span>
          ))}
        </div>

        <div className="plugin-card-actions" onClick={(e) => e.preventDefault()}>
          <Link href={`/plugins/${plugin.slug}`} className="btn btn-primary btn-sm">
            <ArrowRight style={{ width: '0.875rem', height: '0.875rem' }} />
            View Details
          </Link>
          <Link href={`/plugins/${plugin.slug}#download`} className="btn btn-secondary btn-sm">
            <Download style={{ width: '0.875rem', height: '0.875rem' }} />
            Download
          </Link>
        </div>
      </div>
    </Link>
  );
}
