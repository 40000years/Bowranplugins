'use client';

import React from 'react';
import { Download, Star, CheckCircle, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { MinecraftPlugin } from '@/types/plugin';

interface PluginCardProps {
  plugin: MinecraftPlugin;
  onSelect: (plugin: MinecraftPlugin) => void;
  onQuickDownload: (plugin: MinecraftPlugin, e: React.MouseEvent) => void;
}

export function PluginCard({ plugin, onSelect, onQuickDownload }: PluginCardProps) {
  const latestVersion = plugin.versions[0];

  return (
    <div
      onClick={() => onSelect(plugin)}
      className="group relative rounded-2xl glass-panel glass-panel-hover p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/90 hover:border-emerald-500/40"
    >
      {/* Featured Badge */}
      {plugin.featured && (
        <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md shadow-amber-500/20 flex items-center gap-1">
          <Star className="w-3 h-3 fill-gray-950 stroke-none" /> Featured
        </div>
      )}

      <div>
        {/* Header section with Icon & Title */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gray-900 border border-gray-700/60 p-2 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/50 transition-colors shadow-inner">
            <img
              src={plugin.iconUrl}
              alt={plugin.name}
              className="w-10 h-10 object-contain rounded-md"
              onError={(e) => {
                // Fallback avatar icon
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors truncate">
                {plugin.name}
              </h3>
              {plugin.verified && (
                <span title="Verified Safe Plugin">
                  <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0 fill-emerald-500/10" />
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 font-medium truncate mt-0.5">
              by <span className="text-gray-300">{plugin.author}</span>
            </p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-gray-300 mt-4 line-clamp-2 leading-relaxed font-normal">
          {plugin.tagline}
        </p>

        {/* Platforms Badges */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {plugin.platforms.map((platform) => (
            <span
              key={platform}
              className="px-2 py-0.5 text-[10px] font-semibold bg-gray-900/90 text-gray-300 border border-gray-800 rounded-md"
            >
              {platform}
            </span>
          ))}
          <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 rounded-md">
            MC {plugin.testedVersions[0]}
          </span>
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs">
        {/* Stats */}
        <div className="flex items-center gap-3 text-gray-400">
          <span className="flex items-center gap-1 font-semibold text-gray-300">
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            {(plugin.downloadsCount / 1000000).toFixed(1)}M
          </span>
          <span className="flex items-center gap-1 font-semibold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
            {plugin.rating}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={(e) => onQuickDownload(plugin, e)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-gray-950 font-bold text-xs transition-all border border-emerald-500/30 shadow-sm"
        >
          <Download className="w-3.5 h-3.5" />
          .JAR ({latestVersion.version})
        </button>
      </div>
    </div>
  );
}
