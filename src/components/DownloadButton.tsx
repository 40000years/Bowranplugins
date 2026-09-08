'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Download, LoaderCircle } from 'lucide-react';
import type { PluginVersion } from '@/types/plugin';

export function DownloadButton({ version, name, compact = false }: { version: PluginVersion; name: string; compact?: boolean }) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const controller = useRef<AbortController | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => { controller.current?.abort(); clearTimeout(resetTimer.current); }, []);

  async function download() {
    if (controller.current) return;
    clearTimeout(resetTimer.current);
    setState('loading');
    controller.current = new AbortController();
    try {
      const response = await fetch(version.downloadUrl, { signal: controller.current.signal });
      if (!response.ok) throw new Error('Download unavailable');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = version.filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
      setState('success');
      resetTimer.current = setTimeout(() => setState('idle'), 5000);
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) setState('error');
    } finally { controller.current = null; }
  }

  return <div className={`download-control ${compact ? 'compact-download' : ''}`}>
    <button className={compact ? 'icon-button download-icon' : 'button button-primary'} onClick={download} disabled={state === 'loading'} aria-label={`ดาวน์โหลด ${name} v${version.version}`} title={`Download ${name} v${version.version}`}>
      {state === 'loading' ? <LoaderCircle size={17} className="spin" /> : state === 'success' ? <Check size={17} /> : <Download size={17} />}
      {!compact && (state === 'loading' ? 'กำลังดาวน์โหลด' : state === 'success' ? 'ส่งไฟล์ให้เบราว์เซอร์แล้ว' : state === 'error' ? 'ลองดาวน์โหลดอีกครั้ง' : 'Download .jar')}
    </button>
    <span role="status" className={state === 'error' ? 'download-error' : 'sr-only'}>{state === 'error' ? 'ดาวน์โหลดไม่สำเร็จ กรุณาลองใหม่' : state === 'success' ? `ส่งไฟล์ ${name} ให้เบราว์เซอร์แล้ว` : ''}</span>
  </div>;
}
