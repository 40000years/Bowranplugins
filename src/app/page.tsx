'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { VoidBackground } from '@/components/VoidBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PluginShowcase } from '@/components/PluginShowcase';
import { BentoGrid } from '@/components/BentoGrid';
import { Footer } from '@/components/Footer';
import { LayoutSwitcher, LayoutMode } from '@/components/LayoutSwitcher';
import { TerminalSplitLayout } from '@/components/layouts/TerminalSplitLayout';
import { TechnicalRegistryLayout } from '@/components/layouts/TechnicalRegistryLayout';
import { ImmersiveSpotlightLayout } from '@/components/layouts/ImmersiveSpotlightLayout';

export default function HomePage() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('terminal');

  return (
    <ThemeProvider>
      <VoidBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2, minHeight: '80vh', paddingBottom: '5rem' }}>
        {layoutMode === 'terminal' && <TerminalSplitLayout />}
        {layoutMode === 'registry' && <TechnicalRegistryLayout />}
        {layoutMode === 'spotlight' && <ImmersiveSpotlightLayout />}
        {layoutMode === 'classic' && (
          <>
            <Hero />
            <PluginShowcase />
          </>
        )}

        {/* Supporting Features Grid */}
        <BentoGrid />
      </main>

      {/* Floating Layout Switcher for live evaluation */}
      <LayoutSwitcher currentLayout={layoutMode} onChangeLayout={setLayoutMode} />

      <Footer />
    </ThemeProvider>
  );
}

