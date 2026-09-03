export interface PluginFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface PluginCommand {
  command: string;
  description: string;
  permission?: string;
}

export interface PluginPermission {
  node: string;
  description: string;
  default: string;
}

export interface PluginVersion {
  version: string;
  minecraftVersions: string[];
  releaseDate: string;
  fileSize: string;
  downloadUrl: string;
  filename: string;
  changelog: string[];
}

export interface PluginData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconEmoji: string;
  accentColor: string;
  accentGlow: string;
  gradientFrom: string;
  gradientTo: string;
  author: string;
  category: string;
  tags: string[];
  platforms: string[];
  testedVersions: string[];
  sourceUrl?: string;
  documentationUrl?: string;
  features: PluginFeature[];
  commands: PluginCommand[];
  permissions: PluginPermission[];
  installation: string[];
  configuration?: string;
  versions: PluginVersion[];
}
