'use client';

import React from 'react';
import { Box, Sparkles, Server, ArrowUpRight, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-950/50">
              <Box className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                Craft<span className="gradient-text-emerald">Vault</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" /> Vercel Ready
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium">
              High-Performance Minecraft Plugins Hub
            </p>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300 mr-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Server className="w-4 h-4" /> Paper / Spigot 1.20.x
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <Sparkles className="w-4 h-4" /> Verified Direct .JAR Downloads
            </span>
          </div>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
          >
            Deploy on Vercel
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
