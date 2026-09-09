'use client';

import React from 'react';
import { Skull, Orbit, Layers, Box, Terminal, Sparkles, Swords, ShieldAlert, Eye } from 'lucide-react';

interface PluginIconProps {
  slug: string;
  className?: string;
  size?: number | string;
  color?: string;
}

export function PluginIcon({ slug, className = '', size = '1.75rem', color }: PluginIconProps) {
  const iconProps = {
    style: {
      width: size,
      height: size,
      color: color || 'currentColor',
    },
    strokeWidth: 1.75,
    className,
  };

  switch (slug) {
    case 'afterdeath':
      return <Skull {...iconProps} />;
    case 'voidscape':
      return <Orbit {...iconProps} />;
    case 'advanced-combat':
      return <Swords {...iconProps} />;
    case 'anti-freecam':
      return <ShieldAlert {...iconProps} />;
    case 'nightvision-toggle':
      return <Eye {...iconProps} />;
    case 'advance-magic':
      return <Sparkles {...iconProps} />;
    default:
      return <Box {...iconProps} />;
  }
}
