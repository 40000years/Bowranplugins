import Link from 'next/link';
import { ArrowUpRight, Box } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top" id="about">
        <div><Link href="/" className="wordmark"><Box size={22} /> bowranplugins.</Link><p>Independent plugins. A better place to play.</p></div>
        <p className="footer-about">ปลั๊กอิน Minecraft โดย Bowran<br />สร้างสิ่งเล็ก ๆ ที่ทำให้เซิร์ฟเวอร์ของคุณดีขึ้น</p>
        <a href="https://github.com/40000years" target="_blank" rel="noopener noreferrer" className="text-link">Meet the developer <ArrowUpRight size={16} /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Bowranplugins</span><span>Not affiliated with Mojang or Microsoft.</span><Link href="/plugins">Plugin directory <ArrowUpRight size={14} /></Link></div>
    </footer>
  );
}
