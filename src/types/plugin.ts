export type PluginCategory =
  | 'All'
  | 'Admin Tools'
  | 'World Management'
  | 'Optimization'
  | 'Security & Auth'
  | 'Economy'
  | 'Cross-Platform'
  | 'Mechanics';

export type ServerPlatform = 'Paper' | 'Spigot' | 'Purpur' | 'Velocity' | 'BungeeCord' | 'Folia';

export interface PluginVersion {
  version: string;
  gameVersions: string[];
  releaseDate: string;
  fileSize: string;
  downloadUrl: string;
  filename: string;
  changelog: string;
}

export interface MinecraftPlugin {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconUrl: string;
  bannerUrl?: string;
  author: string;
  authorAvatar?: string;
  category: PluginCategory;
  platforms: ServerPlatform[];
  testedVersions: string[];
  downloadsCount: number;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  featured?: boolean;
  officialSourceUrl: string;
  donationUrl?: string;
  versions: PluginVersion[];
  installationGuide: string[];
  dependencies: string[];
}
