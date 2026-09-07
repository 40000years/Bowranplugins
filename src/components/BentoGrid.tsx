'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Download, Server, Smartphone, BookOpen, RefreshCw, Github } from 'lucide-react';

const bentoItems = [
  {
    icon: <Download strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'ดาวน์โหลดไฟล์ .jar ตรง พร้อมใช้งาน',
    description:
      'สามารถดาวน์โหลดไฟล์ปลั๊กอิน .jar ไปลงในโฟลเดอร์ plugins ของเซิร์ฟเวอร์ได้ทันที ไม่ต้องผ่านเว็บครอบลิงก์',
    span: true,
  },
  {
    icon: <Server strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'รองรับ Paper & Purpur',
    description:
      'ปลั๊กอินถูกสร้างและทดสอบกับเซิร์ฟเวอร์ Paper และ Purpur 26.2 ทำงานเสถียร ไม่กินสเปก',
  },
  {
    icon: <Smartphone strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'เล่นข้ามแพลตฟอร์ม (Geyser)',
    description:
      'หลายปลั๊กอินออกแบบมาให้รองรับทั้งผู้เล่น Java Edition และผู้เล่น Bedrock บนมือถือ',
  },
  {
    icon: <BookOpen strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'มีคำสั่งและวิธีใช้งานครบ',
    description:
      'ในหน้าของแต่ละปลั๊กอินมีบอกคำสั่ง สิทธิ์ และวิธีติดตั้งไว้อย่างละเอียด ดูเข้าใจง่าย',
  },
  {
    icon: <RefreshCw strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'อัปเดตต่อเนื่อง',
    description:
      'มีการปรับปรุงโค้ด แก้ไขบั๊ก และเพิ่มระบบใหม่ๆ ตามการใช้งานจริงในเซิร์ฟเวอร์เสมอ',
  },
  {
    icon: <Github strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'ดูโค้ดบน GitHub ได้',
    description:
      'สามารถเข้าไปดูโค้ด ติดตามการพัฒนา หรือแจ้งปัญหาได้ที่ GitHub ของโปรเจกต์',
  },
];

export function BentoGrid() {
  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="text-label" style={{ marginBottom: '0.75rem' }}>
              เกี่ยวกับเรา
            </p>
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              Bowranplugins คืออะไร?
            </h2>
            <p className="text-subheading" style={{ maxWidth: '520px', margin: '0 auto' }}>
              เว็บรวมปลั๊กอินสำหรับเซิร์ฟเวอร์ Minecraft ที่พัฒนาขึ้นมาใช้งานเอง และเปิดให้ทุกคนสามารถดาวน์โหลดไปใช้งานได้ฟรี
            </p>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          {bentoItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={Math.min(index + 1, 4)}
              className={item.span ? 'span-2-wrapper' : ''}
            >
              <div className={`bento-item ${item.span ? 'span-2' : ''}`}>
                <div className="bento-icon">{item.icon}</div>
                <h3 className="bento-title">{item.title}</h3>
                <p className="bento-description">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
