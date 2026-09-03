import { NextRequest, NextResponse } from 'next/server';
import { PLUGINS } from '@/lib/plugins-data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pluginId = searchParams.get('plugin');
  const versionStr = searchParams.get('v');

  if (!pluginId) {
    return new NextResponse('Plugin ID required', { status: 400 });
  }

  const plugin = PLUGINS.find((p) => p.id === pluginId);
  if (!plugin) {
    return new NextResponse('Plugin not found', { status: 404 });
  }

  const versionObj = plugin.versions.find((v) => v.version === versionStr) || plugin.versions[0];
  const filename = versionObj.filename || `${plugin.name}-${versionObj.version}.jar`;

  // Placeholder .jar content for demonstration
  const content = `PK\x03\x04\x14\x00\x08\x00\x08\x00
plugin.yml:
  name: ${plugin.name}
  version: ${versionObj.version}
  author: ${plugin.author}
  description: ${plugin.tagline}
  api-version: '1.20'
`;

  const headers = new Headers();
  headers.set('Content-Type', 'application/java-archive');
  headers.set('Content-Disposition', `attachment; filename="${filename}"`);
  headers.set('Cache-Control', 'public, max-age=3600');

  return new NextResponse(content, { status: 200, headers });
}
