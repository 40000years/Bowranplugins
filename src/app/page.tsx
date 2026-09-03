'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { FilterBar } from '@/components/FilterBar';
import { PluginCard } from '@/components/PluginCard';
import { PluginDetailModal } from '@/components/PluginDetailModal';
import { Footer } from '@/components/Footer';
import { POPULAR_PLUGINS } from '@/lib/plugins-data';
import { MinecraftPlugin, PluginCategory, ServerPlatform } from '@/types/plugin';
import { Sparkles, Shield, Server, Terminal, Flame, PackageCheck, AlertCircle } from 'lucide-react';

const CATEGORIES: PluginCategory[] = [
  'All',
  'Admin Tools',
  'World Management',
  'Optimization',
  'Security & Auth',
  'Economy',
  'Cross-Platform',
  'Mechanics',
];

const PLATFORMS: (ServerPlatform | 'All')[] = [
  'All',
  'Paper',
  'Spigot',
  'Purpur',
  'Velocity',
  'BungeeCord',
  'Folia',
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PluginCategory>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<ServerPlatform | 'All'>('All');
  const [selectedPlugin, setSelectedPlugin] = useState<MinecraftPlugin | null>(null);
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  // Filter plugins dynamically based on state
  const filteredPlugins = useMemo(() => {
    return POPULAR_PLUGINS.filter((plugin) => {
      const matchesSearch =
        plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plugin.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plugin.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plugin.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || plugin.category === selectedCategory;

      const matchesPlatform =
        selectedPlatform === 'All' || plugin.platforms.includes(selectedPlatform as ServerPlatform);

      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [searchQuery, selectedCategory, selectedPlatform]);

  const handleQuickDownload = (plugin: MinecraftPlugin, e: React.MouseEvent) => {
    e.stopPropagation();
    const version = plugin.versions[0];
    const link = document.createElement('a');
    link.href = version.downloadUrl;
    link.download = version.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotification(`Started downloading ${plugin.name} v${version.version}`);
    setTimeout(() => setDownloadNotification(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-gray-950">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-4 h-4 text-amber-400" /> Minecraft 1.20.4 Verified Plugins
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Download Top Minecraft Plugins <br />
              <span className="gradient-text-emerald">Fast, Safe & Vercel Ready</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 font-normal max-w-2xl mx-auto leading-relaxed">
              Explore essential server plugins for Paper, Spigot, Purpur, and Velocity. Verified builds, 1-click `.jar` downloads, and complete configuration guides.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
              <div className="glass-panel p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-xl font-extrabold text-white">100M+</div>
                <div className="text-[11px] text-gray-400 font-medium">Total Downloads</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-xl font-extrabold text-emerald-400">100%</div>
                <div className="text-[11px] text-gray-400 font-medium">Safe .JAR Builds</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-xl font-extrabold text-amber-400">1.20.4</div>
                <div className="text-[11px] text-gray-400 font-medium">Tested Support</div>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-xl font-extrabold text-blue-400">0ms CORS</div>
                <div className="text-[11px] text-gray-400 font-medium">Vercel Proxy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Filter */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            categories={CATEGORIES}
            platforms={PLATFORMS}
          />

          {/* Quick Notification Toast */}
          {downloadNotification && (
            <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl glass-panel border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-3 shadow-2xl animate-bounce">
              <PackageCheck className="w-5 h-5 text-emerald-400" />
              {downloadNotification}
            </div>
          )}

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-2">
            <div>
              Showing <span className="text-emerald-400 font-bold">{filteredPlugins.length}</span> plugins
              {selectedCategory !== 'All' && <span> in <strong className="text-white">{selectedCategory}</strong></span>}
              {selectedPlatform !== 'All' && <span> for <strong className="text-white">{selectedPlatform}</strong></span>}
            </div>
            {(searchQuery || selectedCategory !== 'All' || selectedPlatform !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedPlatform('All');
                }}
                className="text-emerald-400 hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Plugins Grid */}
          {filteredPlugins.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlugins.map((plugin) => (
                <PluginCard
                  key={plugin.id}
                  plugin={plugin}
                  onSelect={(p) => setSelectedPlugin(p)}
                  onQuickDownload={handleQuickDownload}
                />
              ))}
            </div>
          ) : (
            <div className="glass-panel p-12 rounded-2xl text-center border border-gray-800 space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-400 mx-auto opacity-80" />
              <h3 className="text-base font-bold text-white">No plugins match your search criteria</h3>
              <p className="text-xs text-gray-400">
                Try searching for popular terms like Essentials, LuckPerms, WorldEdit, or clear your filters.
              </p>
            </div>
          )}
        </main>

        {/* Plugin Detail Modal */}
        <PluginDetailModal
          plugin={selectedPlugin}
          onClose={() => setSelectedPlugin(null)}
        />
      </div>

      <Footer />
    </div>
  );
}
