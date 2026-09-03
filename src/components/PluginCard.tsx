'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Download, ArrowRight } from 'lucide-react';
import { PluginData } from '@/types/plugin';
import { PluginIcon } from './PluginIcon';

interface PluginCardProps {
  plugin: PluginData;
}

export function PluginCard({ plugin }: PluginCardProps) {
  const router = useRouter();
  const latestVersion = plugin.versions[0];

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Avoid triggering card navigation if user clicked an inner link or button
    if ((e.target as HTMLElement).closest('a, button')) {
      return;
    }
    router.push(`/plugins/${plugin.slug}`);
  };

  return (
    <div
      role="article"
      onClick={handleCardClick}
      className="plugin-card"
      id={`plugin-${plugin.id}`}
      style={{ cursor: 'pointer' }}
    >
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
          <PluginIcon slug={plugin.slug} color={plugin.accentColor} size="1.75rem" />
        </div>

        <h3 className="plugin-card-name">
          <Link href={`/plugins/${plugin.slug}`}>
            {plugin.name}
          </Link>
        </h3>

        <p className="plugin-card-tagline">&ldquo;{plugin.tagline}&rdquo;</p>

        <p className="plugin-card-description">{plugin.description}</p>

        <div className="plugin-card-meta">
          {latestVersion && (
            <span className="badge">v{latestVersion.version}</span>
          )}
          {plugin.testedVersions[0] && (
            <span className="badge">Paper {plugin.testedVersions[0]}</span>
          )}
          <span className="badge">{plugin.category}</span>
          {plugin.platforms.slice(0, 2).map((p) => (
            <span key={p} className="badge">{p}</span>
          ))}
        </div>

        <div className="plugin-card-actions">
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
    </div>
  );
}
