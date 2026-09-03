'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Code2, Shield, Terminal, BookOpen, Server, Puzzle } from 'lucide-react';

const bentoItems = [
  {
    icon: <Puzzle strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Plugin Ecosystem',
    description: 'Each plugin is designed to work independently or alongside others, giving you full control over your server\'s feature set.',
    span: true,
  },
  {
    icon: <Code2 strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Open Source',
    description: 'Source code is available for review. Transparency is a core principle.',
  },
  {
    icon: <Shield strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Production Ready',
    description: 'Built for stability. Every release is tested before distribution.',
  },
  {
    icon: <Terminal strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Simple Installation',
    description: 'Drop the .jar file into your plugins folder. Restart. Configure. Done.',
  },
  {
    icon: <BookOpen strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Documentation',
    description: 'Every plugin includes clear documentation for commands, permissions, and configuration.',
  },
  {
    icon: <Server strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Paper & Spigot',
    description: 'Compatible with Paper, Spigot, and Purpur servers running Minecraft 1.20.x and 1.21.x.',
  },
];

export function BentoGrid() {
  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="text-label" style={{ marginBottom: '0.75rem' }}>
              Why Bowranplugins
            </p>
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              Built different
            </h2>
            <p className="text-subheading" style={{ maxWidth: '480px', margin: '0 auto' }}>
              Small details that make a difference.
            </p>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          {bentoItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={Math.min(index + 1, 4)}
              className={item.span ? 'span-2-wrapper' : ''}
            >
              <div className={`bento-item ${item.span ? 'span-2' : ''}`}>
                <div className="bento-icon">{item.icon}</div>
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-description">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
