import { NextRequest, NextResponse } from 'next/server';
import { PLUGINS } from '@/lib/plugins-data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q')?.toLowerCase() || '';

  let results = [...PLUGINS];

  if (query) {
    results = results.filter(
      (plugin) =>
        plugin.name.toLowerCase().includes(query) ||
        plugin.tagline.toLowerCase().includes(query) ||
        plugin.description.toLowerCase().includes(query) ||
        plugin.author.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({
    success: true,
    count: results.length,
    plugins: results,
  });
}
