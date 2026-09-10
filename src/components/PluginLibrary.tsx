'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Code2, FileArchive, Layers3, Search, Server, SlidersHorizontal, X } from 'lucide-react';
import { PLUGINS } from '@/lib/plugins-data';
import { CATEGORIES, Category, pluginCategory, pluginTone } from '@/lib/plugin-presentation';
import { PluginIcon } from './PluginIcon';
import { DownloadButton } from './DownloadButton';

export function PluginLibrary({ registry = false }: { registry?: boolean }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All plugins');
  const [sort, setSort] = useState('featured');
  const featured = PLUGINS.find(plugin => plugin.slug === 'voidscape')!;
  const plugins = useMemo(() => {
    const filtered = PLUGINS.filter(plugin => (category === 'All plugins' || pluginCategory[plugin.slug] === category) && `${plugin.name} ${plugin.description} ${plugin.tags.join(' ')} ${plugin.platforms.join(' ')} ${pluginCategory[plugin.slug]}`.toLowerCase().includes(query.trim().toLowerCase()));
    return sort === 'name' ? filtered.sort((a, b) => a.name.localeCompare(b.name)) : filtered;
  }, [query, category, sort]);

  return <main id="main"><div className="container">
    <section className="page-intro">
      <div><p className="eyebrow"><span className="status-dot" /> THE INDEPENDENT PLUGIN LIBRARY</p><h1>{registry ? 'Plugin directory' : 'Bowranplugins'}<span className="title-dot">.</span></h1></div>
      <div className="intro-aside"><p>ต่อเติมโลกของคุณ ให้เป็นมากกว่าเดิม<br /><span>ปลั๊กอิน Minecraft สำหรับคนสร้างเซิร์ฟเวอร์</span></p><a href="#library" className="text-link">Explore the collection <ArrowDown size={15} /></a></div>
    </section>
    {!registry && <section className="featured-world" aria-labelledby="featured-title">
      <Image src="/voidscape-world.jpg" alt="ภาพคอนเซ็ปต์มิติ Voidscape: เกาะหินบล็อกลอยฟ้าและประตูท่ามกลางถ้ำขนาดใหญ่" fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="world-image" />
      <div className="world-shade" />
      <div className="featured-copy"><p className="eyebrow"><span className="line-marker" /> FEATURED RELEASE <span className="release-label">v{featured.versions[0].version}</span></p><h2 id="featured-title">Voidscape</h2><p className="featured-tagline">Advance Magic Expansion: The Void</p><p className="featured-description">สร้างประตู Crying Obsidian สู่มิติ The Void<br />พิชิต 3 มหาวิหารธาตุ และเปิดคลังสมบัติ Trial Vault</p><Link href="/plugins/voidscape" className="button button-light">Explore Voidscape <ArrowUpRight size={17} /></Link></div>
      <div className="world-caption"><span>THE VOID DIMENSION</span><span>CONCEPT ART / 01</span></div>
    </section>}
    <div className="assurance-strip"><span><Server size={16} /> Paper & Purpur <span className="strip-note">server plugins</span></span><span><FileArchive size={16} /> Direct .jar downloads</span><span><Code2 size={16} /> Commands & permissions included</span></div>
    <section className="library-section" id="library" aria-labelledby="library-heading">
      <div className="section-heading"><div><p className="eyebrow">THE COLLECTION</p><h2 id="library-heading">Small additions. <span>Big possibilities.</span></h2></div><span className="collection-count">{String(PLUGINS.length).padStart(2, '0')} PLUGINS / BY BOWRAN</span></div>
      <div className="library-toolbar"><div className="filter-options" role="group" aria-label="กรองประเภทปลั๊กอิน">{CATEGORIES.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`filter-button ${category === item ? 'selected' : ''}`}>{item}{item === 'All plugins' && <span>{PLUGINS.length}</span>}</button>)}</div><div className="search-field"><Search size={17} /><label className="sr-only" htmlFor="plugin-search">ค้นหาปลั๊กอิน</label><input id="plugin-search" type="search" placeholder="Search plugins..." value={query} onChange={event => setQuery(event.target.value)} />{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="ล้างคำค้นหา"><X size={15} /></button>}</div></div>
      <div className="results-bar"><span role="status">{plugins.length} {plugins.length === 1 ? 'plugin' : 'plugins'}{query && ` matching “${query}”`}</span><label className="sort-control"><SlidersHorizontal size={13} /><span className="sr-only">เรียงลำดับ</span><select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Collection order</option><option value="name">Name: A to Z</option></select></label></div>
      <div className="plugin-list">{plugins.map(plugin => <article className="plugin-row" key={plugin.slug}>
        <span className="row-number">{String(PLUGINS.indexOf(plugin) + 1).padStart(2, '0')}</span>
        <Link href={`/plugins/${plugin.slug}`} className={`plugin-emblem tone-${pluginTone[plugin.slug]}`} aria-label={`ดู ${plugin.name}`} tabIndex={-1}><PluginIcon slug={plugin.slug} color="currentColor" size="1.65rem" /></Link>
        <div className="plugin-summary"><div className="plugin-title-line"><Link href={`/plugins/${plugin.slug}`}><h3>{plugin.name}</h3></Link><span className={`category-label tone-${pluginTone[plugin.slug]}`}>{pluginCategory[plugin.slug]}</span></div><p>{plugin.description}</p><div className="row-platforms">{plugin.platforms.filter(platform => !platform.includes('Geyser')).map(platform => <span key={platform}>{platform}</span>)}{plugin.platforms.some(platform => platform.includes('Geyser')) && <span className="crossplay-label">Java + Bedrock</span>}</div></div>
        <div className="row-version"><span>v{plugin.versions[0].version}</span><small>{plugin.versions[0].fileSize} / .jar</small></div>
        <div className="row-actions"><Link href={`/plugins/${plugin.slug}`} className="detail-link" aria-label={`รายละเอียด ${plugin.name}`}>Details <ChevronRight size={15} /></Link><DownloadButton version={plugin.versions[0]} name={plugin.name} compact /></div>
      </article>)}{plugins.length === 0 && <div className="empty-state"><Search size={28} /><h3>ไม่พบปลั๊กอินที่ตรงกับคำค้นหา</h3><p>ลองค้นหาด้วยชื่อปลั๊กอิน หรือเลือกประเภทอื่น</p><button className="button button-secondary" onClick={() => { setQuery(''); setCategory('All plugins'); }}>ล้างตัวกรอง <X size={16} /></button></div>}</div>
      <div className="collection-note"><span><Check size={14} /> ดาวน์โหลดได้โดยไม่ต้องสมัครสมาชิก</span><span>Compatibility details on every plugin page <ArrowUpRight size={13} /></span></div>
    </section>
    <section className="installation-section" id="installation" aria-labelledby="installation-title"><div className="installation-intro"><p className="eyebrow">FROM DOWNLOAD TO GAMEPLAY</p><h2 id="installation-title">Your next server upgrade.<br /><span>Three steps away.</span></h2><p>เลือกปลั๊กอินที่เหมาะกับเซิร์ฟเวอร์ของคุณ<br />แล้วเริ่มต้นได้จากไฟล์เดียว</p><Link href="/plugins" className="text-link">Find your next plugin <ArrowRight size={16} /></Link></div><ol className="installation-list"><li><span>01</span><div><h3>Choose your plugin</h3><p>ตรวจสอบแพลตฟอร์ม เวอร์ชัน และส่วนเสริมที่ต้องใช้<br />ในหน้ารายละเอียดก่อนดาวน์โหลด</p></div><Layers3 size={20} /></li><li><span>02</span><div><h3>Drop it in /plugins</h3><p>ดาวน์โหลดไฟล์ .jar แล้ววางในโฟลเดอร์<br /><code>/plugins/</code> ของเซิร์ฟเวอร์</p></div><FileArchive size={20} /></li><li><span>03</span><div><h3>Restart. Make it yours.</h3><p>รีสตาร์ทเซิร์ฟเวอร์ ตรวจสอบการโหลดปลั๊กอิน<br />และตั้งค่าสิทธิ์ตามคู่มือของแต่ละตัว</p></div><Server size={20} /></li></ol></section>
  </div></main>;
}
