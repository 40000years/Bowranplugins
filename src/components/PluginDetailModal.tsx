'use client';

import React, { useState } from 'react';
import { X, Download, ShieldCheck, ExternalLink, Calendar, HardDrive, CheckCircle2, Terminal, Info, Heart } from 'lucide-react';
import { MinecraftPlugin, PluginVersion } from '@/types/plugin';

interface PluginDetailModalProps {
  plugin: MinecraftPlugin | null;
  onClose: () => void;
}

export function PluginDetailModal({ plugin, onClose }: PluginDetailModalProps) {
  if (!plugin) return null;

  const [selectedVersion, setSelectedVersion] = useState<PluginVersion>(plugin.versions[0]);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    // Trigger download via Vercel serverless API endpoint
    const link = document.createElement('a');
    link.href = selectedVersion.downloadUrl;
    link.download = selectedVersion.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl glass-panel rounded-2xl border border-gray-800 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner header image */}
        <div className="relative h-44 w-full bg-gray-900 overflow-hidden">
          {plugin.bannerUrl ? (
            <img src={plugin.bannerUrl} alt={plugin.name} className="w-full h-full object-cover opacity-60" />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-emerald-950 to-gray-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-950 border border-emerald-500/40 p-2 flex items-center justify-center shadow-xl">
                <img src={plugin.iconUrl} alt={plugin.name} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-extrabold text-white">{plugin.name}</h2>
                  {plugin.verified && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1 border border-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-300 font-medium">Developed by {plugin.author}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Download Action Section */}
          <div className="glass-panel p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <HardDrive className="w-4 h-4" /> Ready for Immediate Server Download
              </div>
              <p className="text-xs text-gray-300">
                Selected Version: <strong className="text-white">{selectedVersion.version}</strong> ({selectedVersion.fileSize})
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Version Selector */}
              <select
                value={selectedVersion.version}
                onChange={(e) => {
                  const ver = plugin.versions.find((v) => v.version === e.target.value);
                  if (ver) setSelectedVersion(ver);
                }}
                className="bg-gray-900 border border-gray-700 text-white text-xs font-medium rounded-lg px-3 py-2.5 focus:outline-none focus:border-emerald-500"
              >
                {plugin.versions.map((v) => (
                  <option key={v.version} value={v.version}>
                    v{v.version} ({v.releaseDate})
                  </option>
                ))}
              </select>

              {/* Download Trigger */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-95 disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {downloading ? 'Downloading...' : 'Download .JAR'}
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Download started successfully! Check your browser downloads folder.
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-emerald-400" /> About {plugin.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed bg-gray-900/60 p-4 rounded-xl border border-gray-800">
              {plugin.description}
            </p>
          </div>

          {/* Installation Guide */}
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-amber-400" /> Installation Steps
            </h3>
            <ol className="space-y-2 bg-gray-900/60 p-4 rounded-xl border border-gray-800">
              {plugin.installationGuide.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-bold text-[10px] flex items-center justify-center border border-emerald-500/30 flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Version Changelog & Official Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800">
              <h4 className="text-xs font-bold text-gray-300 mb-1">Changelog (v{selectedVersion.version})</h4>
              <p className="text-xs text-gray-400 leading-normal">{selectedVersion.changelog}</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-300 mb-1">Official Project Links</h4>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href={plugin.officialSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Official Website <ExternalLink className="w-3 h-3" />
                  </a>
                  {plugin.donationUrl && (
                    <a
                      href={plugin.donationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
                    >
                      Donate / Support <Heart className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
