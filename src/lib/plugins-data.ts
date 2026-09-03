import { PluginData } from '@/types/plugin';

export const PLUGINS: PluginData[] = [
  {
    id: 'afterdeath',
    name: 'Afterdeath',
    slug: 'afterdeath',
    tagline: 'What happens after the final breath is not always silence.',
    description:
      'A Minecraft plugin that transforms the death experience on your server. Afterdeath introduces post-mortem mechanics, custom respawn behaviors, and death-triggered events that add depth and consequence to every fall.',
    longDescription:
      'Afterdeath reimagines what it means to die in Minecraft. Instead of a simple respawn, players experience custom post-death sequences, configurable consequences, and unique mechanics that make survival feel meaningful again. Whether you want to add death penalties, custom respawn animations, or entirely new post-mortem gameplay loops — Afterdeath gives you the tools to make death matter on your server.',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.15)',
    gradientFrom: '#1a0a2e',
    gradientTo: '#0d0d1a',
    author: 'Bowran',
    category: 'Mechanics',
    tags: ['Death', 'Respawn', 'Survival', 'Events'],
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['1.21.x', '1.20.x'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'Custom Death Sequences',
        description: 'Configure what happens the moment a player dies — from visual effects to triggered commands.',
      },
      {
        title: 'Post-Mortem Mechanics',
        description: 'Introduce gameplay mechanics that activate after death, adding consequence and depth.',
      },
      {
        title: 'Configurable Respawn',
        description: 'Full control over respawn behavior including location, delays, and conditions.',
      },
      {
        title: 'Death Events API',
        description: 'Hook into death events programmatically for custom server experiences.',
      },
      {
        title: 'Lightweight & Performant',
        description: 'Designed to run efficiently without impacting server TPS.',
      },
      {
        title: 'Fully Configurable',
        description: 'Every feature can be toggled and customized through clean YAML configuration.',
      },
    ],
    commands: [
      {
        command: '/afterdeath reload',
        description: 'Reload the plugin configuration.',
        permission: 'afterdeath.admin',
      },
      {
        command: '/afterdeath info',
        description: 'Display plugin version and status information.',
        permission: 'afterdeath.info',
      },
    ],
    permissions: [
      {
        node: 'afterdeath.admin',
        description: 'Access to all administrative commands.',
        default: 'op',
      },
      {
        node: 'afterdeath.info',
        description: 'View plugin information.',
        default: 'true',
      },
    ],
    installation: [
      'Download the Afterdeath .jar file from the download section below.',
      'Place the .jar file into your server\'s /plugins directory.',
      'Restart your server completely (do not use /reload).',
      'The plugin will generate a default configuration file at /plugins/Afterdeath/config.yml.',
      'Edit the configuration to match your server\'s needs and run /afterdeath reload.',
    ],
    configuration:
      'Afterdeath uses a clean YAML configuration file. All features can be individually enabled or disabled. See the documentation for a full configuration reference.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['1.21.x', '1.20.x'],
        releaseDate: '2024-01-15',
        fileSize: '—',
        downloadUrl: '/api/download?plugin=afterdeath&v=1.0.0',
        filename: 'Afterdeath-1.0.0.jar',
        changelog: [
          'Initial release',
          'Custom death sequence system',
          'Configurable respawn mechanics',
          'YAML configuration support',
        ],
      },
    ],
  },
  {
    id: 'voidscape',
    name: 'Voidscape',
    slug: 'voidscape',
    tagline: 'The Void is not empty. It is waiting.',
    description:
      'A Minecraft plugin that expands the concept of the Void. Voidscape introduces new void-related mechanics, custom void dimensions, and environmental effects that transform the emptiness beneath the world into something alive.',
    longDescription:
      'Voidscape turns the most feared part of Minecraft — the Void — into a feature. Instead of instant death, the Void becomes a configurable environment with its own rules, effects, and possibilities. Create custom void behaviors, trigger events when players enter void zones, build void-based challenges, or simply make falling into the Void a more interesting experience. Voidscape gives server administrators complete control over the space beneath the world.',
    accentColor: '#3b82f6',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    gradientFrom: '#0a1628',
    gradientTo: '#08080f',
    author: 'Bowran',
    category: 'World Management',
    tags: ['Void', 'Environment', 'World', 'Dimensions'],
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['1.21.x', '1.20.x'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'Custom Void Behavior',
        description: 'Redefine what happens when players fall into the Void — teleportation, damage scaling, custom effects, or something else entirely.',
      },
      {
        title: 'Void Zones',
        description: 'Define custom void zones anywhere in your world with configurable boundaries and effects.',
      },
      {
        title: 'Environmental Effects',
        description: 'Add atmospheric effects near void boundaries — particles, sounds, screen effects, and more.',
      },
      {
        title: 'Void Events',
        description: 'Trigger custom events when players interact with void zones for unique server experiences.',
      },
      {
        title: 'Multi-World Support',
        description: 'Configure different void behaviors for each world on your server.',
      },
      {
        title: 'Performance Optimized',
        description: 'Asynchronous processing ensures zero impact on your server\'s performance.',
      },
    ],
    commands: [
      {
        command: '/voidscape reload',
        description: 'Reload the plugin configuration.',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape info',
        description: 'Display plugin version and status.',
        permission: 'voidscape.info',
      },
    ],
    permissions: [
      {
        node: 'voidscape.admin',
        description: 'Access to all administrative commands.',
        default: 'op',
      },
      {
        node: 'voidscape.info',
        description: 'View plugin information.',
        default: 'true',
      },
      {
        node: 'voidscape.bypass',
        description: 'Bypass void zone effects.',
        default: 'op',
      },
    ],
    installation: [
      'Download the Voidscape .jar file from the download section below.',
      'Place the .jar file into your server\'s /plugins directory.',
      'Restart your server completely (do not use /reload).',
      'The plugin will generate configuration files at /plugins/Voidscape/.',
      'Configure void zones and behaviors in config.yml, then run /voidscape reload.',
    ],
    configuration:
      'Voidscape provides extensive YAML configuration for void zones, effects, and behaviors. Each world can have independent settings. See the documentation for full details.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['1.21.x', '1.20.x'],
        releaseDate: '2024-01-15',
        fileSize: '—',
        downloadUrl: '/api/download?plugin=voidscape&v=1.0.0',
        filename: 'Voidscape-1.0.0.jar',
        changelog: [
          'Initial release',
          'Custom void behavior system',
          'Void zone configuration',
          'Environmental effects engine',
          'Multi-world support',
        ],
      },
    ],
  },
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return PLUGINS.find((p) => p.slug === slug);
}

export function getAllPluginSlugs(): string[] {
  return PLUGINS.map((p) => p.slug);
}
