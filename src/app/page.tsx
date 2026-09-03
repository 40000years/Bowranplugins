'use client';

import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { VoidBackground } from '@/components/VoidBackground';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PluginShowcase } from '@/components/PluginShowcase';
import { BentoGrid } from '@/components/BentoGrid';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <ThemeProvider>
      <VoidBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <PluginShowcase />
        <BentoGrid />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
