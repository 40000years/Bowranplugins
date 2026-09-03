'use client';

import React from 'react';
import { Box, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800/80 bg-gray-950/60 glass-panel py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Box className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
              <span className="font-bold text-lg text-white">CraftVault</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The premier high-performance directory for downloading verified, production-tested Minecraft server plugins. Optimized for Paper, Spigot, Purpur, and Velocity servers.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
              Supported Server Software
            </h4>
            <ul className="text-xs text-gray-400 space-y-1.5 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> PaperMC (Recommended 1.20.4)
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Spigot / CraftBukkit
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Purpur & Folia Multi-Threading
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Velocity & BungeeCord Proxies
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
              Vercel Deployment Status
            </h4>
            <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Environment</span>
                <span className="text-emerald-400 font-semibold">Production Ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Serverless Proxy API</span>
                <span className="text-emerald-400 font-semibold">Active (/api/plugins)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Framework</span>
                <span className="text-white font-semibold">Next.js 14 App Router</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} CraftVault. Built for Minecraft Server Administrators.</p>
          <p className="flex items-center gap-1">
            Ready to deploy on <span className="text-white font-bold">Vercel</span> with 1-click Git Push.
          </p>
        </div>
      </div>
    </footer>
  );
}
