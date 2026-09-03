import { NextRequest, NextResponse } from 'next/server';
import { POPULAR_PLUGINS } from '@/lib/plugins-data';
import { PluginCategory, ServerPlatform } from '@/types/plugin';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q')?.toLowerCase() || '';
  const category = searchParams.get('category') as PluginCategory | null;
  const platform = searchParams.get('platform') as ServerPlatform | null;
  const mcVersion = searchParams.get('version');

  let results = [...POPULAR_PLUGINS];

  if (query) {
    results = results.filter(
      (plugin) =>
        plugin.name.toLowerCase().includes(query) ||
        plugin.tagline.toLowerCase().includes(query) ||
        plugin.description.toLowerCase().includes(query) ||
        plugin.author.toLowerCase().includes(query)
    );
  }

  if (category && category !== 'All') {
    results = results.filter((plugin) => plugin.category === category);
  }

  if (platform) {
    results = results.filter((plugin) => plugin.platforms.includes(platform));
  }

  if (mcVersion) {
    results = results.filter((plugin) =>
      plugin.testedVersions.some((v) => v.startsWith(mcVersion))
    );
  }

  return NextResponse.json({
    success: true,
    count: results.length,
    plugins: results,
  });
}
