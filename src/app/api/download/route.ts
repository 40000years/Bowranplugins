import { NextRequest, NextResponse } from 'next/server';
import { PLUGINS } from '@/lib/plugins-data';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pluginId = searchParams.get('plugin');
  const versionStr = searchParams.get('v');

  if (!pluginId) {
    return new NextResponse('Plugin ID required', { status: 400 });
  }

  const plugin = PLUGINS.find(
    (p) => p.id.toLowerCase() === pluginId.toLowerCase() || p.slug.toLowerCase() === pluginId.toLowerCase()
  );
  if (!plugin) {
    return new NextResponse('Plugin not found', { status: 404 });
  }

  const versionObj =
    (versionStr ? plugin.versions.find((v) => v.version === versionStr) : null) || plugin.versions[0];
  const downloadFilename = versionObj.filename || `${plugin.slug}.jar`;

  // Look for files in public/downloads
  const searchFilenames = [
    downloadFilename,
    `${plugin.slug}.jar`,
    `${plugin.id}.jar`,
    `${plugin.name}.jar`,
    `${plugin.name.toLowerCase()}.jar`,
    `${plugin.name}-${versionObj.version}.jar`,
    `${plugin.slug}-${versionObj.version}.jar`,
  ];

  for (const filename of searchFilenames) {
    const filePath = path.join(process.cwd(), 'public', 'downloads', filename);
    if (fs.existsSync(filePath)) {
      try {
        const fileBuffer = fs.readFileSync(filePath);
        const headers = new Headers();
        headers.set('Content-Type', 'application/java-archive');
        headers.set('Content-Disposition', `attachment; filename="${downloadFilename}"`);
        headers.set('Content-Length', fileBuffer.length.toString());
        headers.set('Cache-Control', 'public, max-age=3600');

        return new NextResponse(fileBuffer, { status: 200, headers });
      } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
      }
    }
  }

  return new NextResponse('Plugin file not found on server', { status: 404 });
}
