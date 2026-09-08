import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return <main id="main" className="container empty-state not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>ไม่พบหน้าที่คุณกำลังค้นหา</h1><p>ดูปลั๊กอินที่พร้อมดาวน์โหลดได้ในคลังของเรา</p><Link href="/plugins" className="button button-primary"><ArrowLeft size={16} /> Plugin directory</Link></main>;
}
