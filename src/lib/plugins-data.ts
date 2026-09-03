import { MinecraftPlugin } from '@/types/plugin';

export const POPULAR_PLUGINS: MinecraftPlugin[] = [
  {
    id: 'luckperms',
    name: 'LuckPerms',
    slug: 'luckperms',
    tagline: 'An advanced permissions plugin for Minecraft servers',
    description:
      'LuckPerms is an advanced permissions plugin for Minecraft servers (Bukkit/Spigot/Paper, BungeeCord, Sponge, Fabric, Velocity). It allows server admins to control what features players can use with fine-grained group and permission management.',
    iconUrl: 'https://raw.githubusercontent.com/LuckPerms/LuckPerms/master/logo.png',
    bannerUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80',
    author: 'Luck',
    category: 'Admin Tools',
    platforms: ['Paper', 'Spigot', 'Purpur', 'Velocity', 'BungeeCord', 'Folia'],
    testedVersions: ['1.20.4', '1.20.2', '1.20.1', '1.19.4', '1.18.2'],
    downloadsCount: 14200000,
    rating: 4.9,
    reviewsCount: 3820,
    verified: true,
    featured: true,
    officialSourceUrl: 'https://luckperms.net',
    donationUrl: 'https://patreon.com/lucko',
    dependencies: [],
    installationGuide: [
      'Download LuckPerms-Bukkit.jar for Paper/Spigot or LuckPerms-Velocity.jar for Velocity.',
      'Place the file into your server\'s /plugins folder.',
      'Restart your server completely.',
      'Use /lp editor in-game or console to open the web editor.'
    ],
    versions: [
      {
        version: '5.4.135',
        gameVersions: ['1.20.4', '1.20.2', '1.20.1'],
        releaseDate: '2024-03-15',
        fileSize: '3.8 MB',
        downloadUrl: '/api/download?plugin=luckperms&v=5.4.135',
        filename: 'LuckPerms-Bukkit-5.4.135.jar',
        changelog: 'Added support for MC 1.20.4, fixed SQLite connection pool leak, improved web editor sync performance.'
      },
      {
        version: '5.4.102',
        gameVersions: ['1.20.1', '1.19.4'],
        releaseDate: '2023-11-20',
        fileSize: '3.7 MB',
        downloadUrl: '/api/download?plugin=luckperms&v=5.4.102',
        filename: 'LuckPerms-Bukkit-5.4.102.jar',
        changelog: 'Bug fixes for BungeeCord messaging channels.'
      }
    ]
  },
  {
    id: 'essentialsx',
    name: 'EssentialsX',
    slug: 'essentialsx',
    tagline: 'Essential suite of over 100 commands for Minecraft servers',
    description:
      'EssentialsX provides core commands for Minecraft servers including teleportation (/tpa, /home, /warp), player economy, moderation (/ban, /mute, /jail), custom kits, and server chat formatting.',
    iconUrl: 'https://raw.githubusercontent.com/EssentialsX/Essentials/main/images/logo.png',
    bannerUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    author: 'EssentialsX Team',
    category: 'Admin Tools',
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['1.20.4', '1.20.2', '1.20.1', '1.19.4'],
    downloadsCount: 18500000,
    rating: 4.8,
    reviewsCount: 5120,
    verified: true,
    featured: true,
    officialSourceUrl: 'https://essentialsx.net',
    donationUrl: 'https://github.com/sponsors/EssentialsX',
    dependencies: ['Vault (Optional for Economy)'],
    installationGuide: [
      'Download EssentialsX-2.20.1.jar.',
      'Place the file into your /plugins directory.',
      'Optionally install EssentialsXChat and EssentialsXSpawn for full chat/spawn features.',
      'Restart server and configure /plugins/Essentials/config.yml.'
    ],
    versions: [
      {
        version: '2.20.1',
        gameVersions: ['1.20.4', '1.20.2'],
        releaseDate: '2024-02-10',
        fileSize: '3.2 MB',
        downloadUrl: '/api/download?plugin=essentialsx&v=2.20.1',
        filename: 'EssentialsX-2.20.1.jar',
        changelog: 'Added support for 1.20.4 armors and trim commands, updated Vault economy hooks.'
      }
    ]
  },
  {
    id: 'worldedit',
    name: 'WorldEdit',
    slug: 'worldedit',
    tagline: 'In-game Minecraft map editor and terraforming tool',
    description:
      'WorldEdit is an easy-to-use in-game Minecraft map editor. Build massive structures in seconds using selections, brushes, schematics, copy-paste, and procedural mathematical generators.',
    iconUrl: 'https://worldedit.enginehub.org/en/latest/_static/logo.png',
    bannerUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&auto=format&fit=crop&q=80',
    author: 'EngineHub',
    category: 'World Management',
    platforms: ['Paper', 'Spigot', 'Purpur', 'Folia'],
    testedVersions: ['1.20.4', '1.20.1', '1.19.4'],
    downloadsCount: 22000000,
    rating: 4.95,
    reviewsCount: 8900,
    verified: true,
    featured: true,
    officialSourceUrl: 'https://enginehub.org/worldedit/',
    donationUrl: 'https://patreon.com/enginehub',
    dependencies: [],
    installationGuide: [
      'Download worldedit-bukkit-7.3.0.jar.',
      'Drop into /plugins folder on your server.',
      'Restart the server.',
      'Equip a Wooden Axe (//wand) to start building!'
    ],
    versions: [
      {
        version: '7.3.0',
        gameVersions: ['1.20.4', '1.20.2', '1.20.1'],
        releaseDate: '2024-01-22',
        fileSize: '5.1 MB',
        downloadUrl: '/api/download?plugin=worldedit&v=7.3.0',
        filename: 'worldedit-bukkit-7.3.0.jar',
        changelog: 'MC 1.20.4 support, new pattern expressions, improved undo memory usage.'
      }
    ]
  },
  {
    id: 'vault',
    name: 'Vault',
    slug: 'vault',
    tagline: 'Permission, Economy & Chat API for Minecraft Bukkit/Paper plugins',
    description:
      'Vault is a critical API plugin that hooks into Economy, Permission, and Chat plugins to provide standard interfaces for other plugins to interact with seamlessly.',
    iconUrl: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Gold_Ingot_JE4_BE2.png',
    bannerUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop&q=80',
    author: 'Slewb',
    category: 'Economy',
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['1.20.4', '1.20.1', '1.19.4', '1.18.2', '1.16.5'],
    downloadsCount: 31000000,
    rating: 4.9,
    reviewsCount: 4100,
    verified: true,
    featured: false,
    officialSourceUrl: 'https://dev.bukkit.org/projects/vault',
    dependencies: [],
    installationGuide: [
      'Download Vault.jar.',
      'Place in /plugins folder.',
      'Ensure you also install an economy plugin (like EssentialsX or CMI) and permission plugin (LuckPerms).'
    ],
    versions: [
      {
        version: '1.7.3',
        gameVersions: ['1.20.4', '1.20.1', '1.19.4'],
        releaseDate: '2023-09-12',
        fileSize: '340 KB',
        downloadUrl: '/api/download?plugin=vault&v=1.7.3',
        filename: 'Vault-1.7.3.jar',
        changelog: 'Updated for modern Spigot API versions.'
      }
    ]
  },
  {
    id: 'geysermc',
    name: 'GeyserMC',
    slug: 'geysermc',
    tagline: 'Enable Minecraft Bedrock Edition players to join Java Edition servers',
    description:
      'Geyser is a bridge plugin/proxy that allows Minecraft Bedrock Edition (iOS, Android, Windows 10/11, Xbox, PlayStation, Switch) clients to join Minecraft Java Edition servers seamlessly without purchasing Java edition.',
    iconUrl: 'https://geysermc.org/img/geyser.png',
    bannerUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    author: 'GeyserMC',
    category: 'Cross-Platform',
    platforms: ['Paper', 'Spigot', 'Velocity', 'BungeeCord', 'Purpur', 'Folia'],
    testedVersions: ['1.20.4', '1.20.2', '1.20.1'],
    downloadsCount: 9800000,
    rating: 4.98,
    reviewsCount: 6700,
    verified: true,
    featured: true,
    officialSourceUrl: 'https://geysermc.org',
    donationUrl: 'https://opencollective.com/geysermc',
    dependencies: ['Floodgate (Recommended for skin & auth sync)'],
    installationGuide: [
      'Download Geyser-Spigot.jar or Geyser-Velocity.jar.',
      'Place into /plugins folder and restart server.',
      'Open UDP port 19132 on your firewall/hosting provider.',
      'Optionally install Floodgate plugin for passwordless Bedrock login.'
    ],
    versions: [
      {
        version: '2.2.3',
        gameVersions: ['1.20.4', '1.20.2'],
        releaseDate: '2024-03-01',
        fileSize: '14.2 MB',
        downloadUrl: '/api/download?plugin=geysermc&v=2.2.3',
        filename: 'Geyser-Spigot.jar',
        changelog: 'Added Bedrock 1.20.70 protocol translation, custom item visual mapping fixes.'
      }
    ]
  },
  {
    id: 'coreprotect',
    name: 'CoreProtect',
    slug: 'coreprotect',
    tagline: 'Fast, lightweight block logging and anti-griefing rollback tool',
    description:
      'CoreProtect is a fast, efficient logging and anti-griefing plugin. Log block changes, chest transactions, mob kills, entity damage, fire spreads, and rollback griefers with simple commands like /co rollback u:griefer t:1h.',
    iconUrl: 'https://coreprotect.net/images/logo.png',
    bannerUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=1200&auto=format&fit=crop&q=80',
    author: 'Intelli',
    category: 'Security & Auth',
    platforms: ['Paper', 'Spigot', 'Purpur', 'Folia'],
    testedVersions: ['1.20.4', '1.20.1', '1.19.4'],
    downloadsCount: 16400000,
    rating: 4.92,
    reviewsCount: 4900,
    verified: true,
    featured: true,
    officialSourceUrl: 'https://coreprotect.net',
    donationUrl: 'https://patreon.com/coreprotect',
    dependencies: [],
    installationGuide: [
      'Download CoreProtect-22.4.jar.',
      'Place in your server\'s /plugins folder.',
      'Restart the server.',
      'Use /co inspect to toggle inspector mode.'
    ],
    versions: [
      {
        version: '22.4',
        gameVersions: ['1.20.4', '1.20.2'],
        releaseDate: '2024-02-18',
        fileSize: '1.9 MB',
        downloadUrl: '/api/download?plugin=coreprotect&v=22.4',
        filename: 'CoreProtect-22.4.jar',
        changelog: 'Full 1.20.4 support, improved SQLite & MySQL multi-threading index speed.'
      }
    ]
  },
  {
    id: 'chunky',
    name: 'Chunky',
    slug: 'chunky',
    tagline: 'Pre-generate world terrain chunks to eliminate server lag during exploration',
    description:
      'Chunky pre-generates world chunks asynchronously to eliminate server tick lag caused by players exploring new terrain on your server.',
    iconUrl: 'https://raw.githubusercontent.com/popicraft/Chunky/master/assets/icon.png',
    bannerUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80',
    author: 'popicraft',
    category: 'Optimization',
    platforms: ['Paper', 'Spigot', 'Purpur', 'Folia'],
    testedVersions: ['1.20.4', '1.20.1', '1.19.4'],
    downloadsCount: 5200000,
    rating: 4.97,
    reviewsCount: 1450,
    verified: true,
    featured: false,
    officialSourceUrl: 'https://github.com/popicraft/Chunky',
    dependencies: [],
    installationGuide: [
      'Download Chunky-1.3.138.jar.',
      'Place into /plugins folder.',
      'In server console run: /chunky radius 5000 followed by /chunky start.'
    ],
    versions: [
      {
        version: '1.3.138',
        gameVersions: ['1.20.4', '1.20.1'],
        releaseDate: '2024-01-30',
        fileSize: '820 KB',
        downloadUrl: '/api/download?plugin=chunky&v=1.3.138',
        filename: 'Chunky-1.3.138.jar',
        changelog: 'Optimized chunk generation speed on Paper 1.20.4 multi-threaded chunk pipeline.'
      }
    ]
  },
  {
    id: 'viaversion',
    name: 'ViaVersion',
    slug: 'viaversion',
    tagline: 'Allow newer Minecraft client versions to connect to older server versions',
    description:
      'ViaVersion allows clients running newer versions of Minecraft to join older server versions seamlessly without modifying client files.',
    iconUrl: 'https://viaversion.com/img/viaversion.png',
    bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
    author: 'ViaVersion Team',
    category: 'Mechanics',
    platforms: ['Paper', 'Spigot', 'Velocity', 'BungeeCord', 'Purpur'],
    testedVersions: ['1.20.4', '1.20.1', '1.19.4', '1.18.2', '1.16.5'],
    downloadsCount: 28000000,
    rating: 4.94,
    reviewsCount: 5600,
    verified: true,
    featured: false,
    officialSourceUrl: 'https://viaversion.com',
    dependencies: [],
    installationGuide: [
      'Download ViaVersion-4.9.2.jar.',
      'Put in /plugins directory.',
      'Restart server.'
    ],
    versions: [
      {
        version: '4.9.2',
        gameVersions: ['1.20.4', '1.20.1'],
        releaseDate: '2024-02-05',
        fileSize: '4.5 MB',
        downloadUrl: '/api/download?plugin=viaversion&v=4.9.2',
        filename: 'ViaVersion-4.9.2.jar',
        changelog: 'Added support for 1.20.4 client packet translations.'
      }
    ]
  }
];
