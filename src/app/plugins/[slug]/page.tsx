import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, FileArchive, Github, Terminal } from 'lucide-react';
import { PLUGINS, getPluginBySlug } from '@/lib/plugins-data';
import { pluginCategory, pluginTone } from '@/lib/plugin-presentation';
import { PluginIcon } from '@/components/PluginIcon';
import { DownloadButton } from '@/components/DownloadButton';
import { InGameMechanicSimulator } from '@/components/InGameMechanicSimulator';

export function generateStaticParams() {
  return PLUGINS.map(plugin => ({ slug: plugin.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const plugin = getPluginBySlug(params.slug);
  return { title: plugin ? `${plugin.name} | Bowranplugins` : 'Plugin not found | Bowranplugins', description: plugin?.description };
}

export default function PluginDetailPage({ params }: { params: { slug: string } }) {
  const plugin = getPluginBySlug(params.slug);
  if (!plugin) notFound();
  const latest = plugin.versions[0];
  return <main id="main" className="detail-page container">
    <Link href="/plugins" className="back-link"><ArrowLeft size={15} /> Plugin directory</Link>
    <header className="detail-heading">
      <div className={`plugin-emblem detail-emblem tone-${pluginTone[plugin.slug]}`}><PluginIcon slug={plugin.slug} color="currentColor" size="2rem" /></div>
      <div><p className="eyebrow">{pluginCategory[plugin.slug]} / BY {plugin.author.toUpperCase()}</p><h1>{plugin.name}<span className="title-dot">.</span></h1><p>{plugin.tagline}</p></div>
    </header>
    <nav className="detail-navigation" aria-label="หัวข้อรายละเอียด"><a href="#overview">Overview</a><a href="#installation">Installation</a><a href="#commands">Commands</a><a href="#releases">Releases <span>{plugin.versions.length}</span></a></nav>
    <div className="detail-layout"><div className="detail-content">
      {plugin.slug === 'voidscape' && <figure className="detail-art"><Image src="/voidscape-world.jpg" alt="ภาพคอนเซ็ปต์เกาะลอยฟ้าและประตูมิติ Voidscape" width={1774} height={887} priority sizes="(max-width: 760px) 100vw, 760px" /><figcaption>VOIDSCAPE / DIMENSION CONCEPT ART</figcaption></figure>}
      <section id="overview" className="document-section"><p className="eyebrow">THE PLUGIN</p><h2>Built for your world.</h2><p className="body-copy">{plugin.longDescription}</p><div className="feature-list">{plugin.features.map((feature, index) => <div key={feature.title}><span className="feature-number">{String(index + 1).padStart(2, '0')}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div></section>
      <details className="demo-disclosure"><summary><span><Terminal size={17} /> ทดลองกลไกปลั๊กอิน</span><span className="demo-label">INTERACTIVE DEMO</span></summary><InGameMechanicSimulator slug={plugin.slug} accentColor="var(--accent)" /></details>
      <section id="installation" className="document-section"><p className="eyebrow">GET STARTED</p><h2>Installation</h2><ol className="detail-steps">{plugin.installation.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>{plugin.configuration && <div className="configuration"><h3>Configuration</h3><p>{plugin.configuration}</p></div>}</section>
      <section id="commands" className="document-section"><p className="eyebrow">SERVER REFERENCE</p><h2>Commands & permissions</h2><div className="table-scroll" tabIndex={0} role="region" aria-label="ตารางคำสั่ง เลื่อนแนวนอนได้"><table className="reference-table"><caption className="sr-only">คำสั่ง {plugin.name}</caption><thead><tr><th scope="col">Command</th><th scope="col">Description / permission</th></tr></thead><tbody>{plugin.commands.map(command => <tr key={command.command}><td><code>{command.command}</code></td><td>{command.description}<small>{command.permission}</small></td></tr>)}</tbody></table></div><h3 className="permissions-title">Permission nodes</h3><div className="table-scroll" tabIndex={0} role="region" aria-label="ตารางสิทธิ์ เลื่อนแนวนอนได้"><table className="reference-table"><caption className="sr-only">สิทธิ์ {plugin.name}</caption><thead><tr><th scope="col">Permission</th><th scope="col">Description</th><th scope="col">Default</th></tr></thead><tbody>{plugin.permissions.map(permission => <tr key={permission.node}><td><code>{permission.node}</code></td><td>{permission.description}</td><td><code>{permission.default}</code></td></tr>)}</tbody></table></div></section>
      <section id="releases" className="document-section"><p className="eyebrow">RELEASE HISTORY</p><h2>Changelog</h2>{plugin.versions.map((version, index) => <div className="release-entry" key={version.version}><div className="release-heading"><h3>v{version.version}</h3>{index === 0 && <span className="latest-label">Latest release</span>}<time dateTime={version.releaseDate}>{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(version.releaseDate))}</time></div><ul>{version.changelog.map(change => <li key={change}><Check size={15} /><span>{change}</span></li>)}</ul></div>)}</section>
    </div>
    <aside className="release-sidebar"><div className="release-panel"><p className="eyebrow"><span className="status-dot" /> LATEST RELEASE</p><div className="release-version"><h2>v{latest.version}</h2><FileArchive size={24} /></div><p className="release-filename">{latest.filename}</p><DownloadButton version={latest} name={plugin.name} /><p className="download-note">Direct download · ไม่ต้องสมัครสมาชิก</p><dl className="release-facts"><div><dt>File size</dt><dd>{latest.fileSize}</dd></div><div><dt>Listed version</dt><dd>{latest.minecraftVersions.join(', ')}</dd></div><div><dt>Developer</dt><dd>{plugin.author}</dd></div><div><dt>Format</dt><dd>Java archive (.jar)</dd></div></dl><div className="compatibility"><h3>Server platforms</h3><div>{plugin.platforms.map(platform => <span key={platform}>{platform}</span>)}</div><p>ตรวจสอบเวอร์ชันและส่วนเสริมที่ต้องใช้<br />ตามขั้นตอนการติดตั้งด้านซ้าย</p></div>{plugin.sourceUrl && <a className="source-link" href={plugin.sourceUrl} target="_blank" rel="noopener noreferrer"><Github size={17} /> Developer on GitHub <ArrowUpRight size={15} /></a>}</div><p className="sidebar-note">เอกสาร คำสั่ง และข้อมูลเวอร์ชัน<br />จากผู้พัฒนาปลั๊กอิน</p></aside></div>
  </main>;
}
