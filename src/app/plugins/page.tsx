'use client';

import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { VoidBackground } from '@/components/VoidBackground';
import { Navbar } from '@/components/Navbar';
import { TechnicalRegistryLayout } from '@/components/layouts/TechnicalRegistryLayout';
import { TelemetryMarquee } from '@/components/TelemetryMarquee';
import { BentoGrid } from '@/components/BentoGrid';
import { Footer } from '@/components/Footer';

export default function PluginsRegistryPage() {
  return (
    <ThemeProvider>
      <VoidBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2, minHeight: '85vh', paddingTop: '1rem' }}>
        <TechnicalRegistryLayout />
        <TelemetryMarquee />
        <BentoGrid />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
