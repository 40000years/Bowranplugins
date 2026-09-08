'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Box, Github, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const links = [
    { href: '/plugins', label: 'Plugins' },
    { href: '/#installation', label: 'Installation' },
    { href: '/#about', label: 'About' },
  ];
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">ข้ามไปยังเนื้อหา</a>
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Bowranplugins home">
          <span className="brand-symbol"><Box size={22} strokeWidth={1.6} /></span>
          <span>bowran<span className="wordmark-light">plugins</span><span className="brand-period">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          {links.map(link => <Link key={link.href} href={link.href} className={pathname.startsWith('/plugins') && link.href === '/plugins' ? 'active' : ''} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="github-link" href="https://github.com/40000years" target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
          <button className="icon-button menu-button" aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" hidden={!open} aria-label="เมนูมือถือ">
        {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></Link>)}
      </nav>
    </header>
  );
}
