'use client';

import React from 'react';
import { Terminal, Table, Sparkles, Layers } from 'lucide-react';

export type LayoutMode = 'terminal' | 'registry' | 'spotlight' | 'classic';

interface LayoutSwitcherProps {
  currentLayout: LayoutMode;
  onChangeLayout: (layout: LayoutMode) => void;
}

export function LayoutSwitcher({ currentLayout, onChangeLayout }: LayoutSwitcherProps) {
  const options: { id: LayoutMode; label: string; icon: React.ReactNode }[] = [
    {
      id: 'terminal',
      label: 'Terminal Split (Dev)',
      icon: <Terminal style={{ width: '0.875rem', height: '0.875rem' }} />,
    },
    {
      id: 'registry',
      label: 'Technical Registry',
      icon: <Table style={{ width: '0.875rem', height: '0.875rem' }} />,
    },
    {
      id: 'spotlight',
      label: 'Immersive Spotlight',
      icon: <Sparkles style={{ width: '0.875rem', height: '0.875rem' }} />,
    },
    {
      id: 'classic',
      label: 'Classic Clean',
      icon: <Layers style={{ width: '0.875rem', height: '0.875rem' }} />,
    },
  ];

  return (
    <aside className="layout-switcher-dock" aria-label="Layout switcher preview">
      <div className="layout-switcher-label">
        <span>Layout:</span>
      </div>
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChangeLayout(opt.id)}
          className={`layout-switcher-btn ${currentLayout === opt.id ? 'active' : ''}`}
          title={`Switch to ${opt.label} layout`}
        >
          {opt.icon}
          <span>{opt.label}</span>
        </button>
      ))}
    </aside>
  );
}
