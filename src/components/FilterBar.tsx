'use client';

import React from 'react';
import { Search, Filter, Cpu, Layers } from 'lucide-react';
import { PluginCategory, ServerPlatform } from '@/types/plugin';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: PluginCategory;
  setSelectedCategory: (category: PluginCategory) => void;
  selectedPlatform: ServerPlatform | 'All';
  setSelectedPlatform: (platform: ServerPlatform | 'All') => void;
  categories: PluginCategory[];
  platforms: (ServerPlatform | 'All')[];
}

export function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  categories,
  platforms,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Minecraft plugins by name, keywords, or author (e.g. EssentialsX, LuckPerms)..."
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-900/90 border border-gray-700/80 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-medium transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Options Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-xl border border-gray-800">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          <Filter className="w-4 h-4 text-emerald-400 mr-1 flex-shrink-0" />
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-gray-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Platform Selector Dropdown */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end border-t md:border-t-0 border-gray-800 pt-3 md:pt-0">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
            <Cpu className="w-3.5 h-3.5 text-amber-400" /> Platform:
          </div>
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value as ServerPlatform | 'All')}
            className="bg-gray-900 border border-gray-700 text-white text-xs font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:border-emerald-500"
          >
            {platforms.map((plat) => (
              <option key={plat} value={plat}>
                {plat === 'All' ? 'All Platforms (Paper, Spigot...)' : plat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
