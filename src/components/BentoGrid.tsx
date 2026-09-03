'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Compass, Clock, Smartphone, Zap, Server, ShieldCheck } from 'lucide-react';

const bentoItems = [
  {
    icon: <Compass strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Finite 3-Layer Void Dive & The Abyssal Warden',
    description:
      'Voidscape ปรับแต่งความว่างเปล่าใต้โลกให้กลายเป็นมิติดำดิ่ง 3 เลเยอร์ (โลก the_void) ผ่านประตูกล Bedrock Y <= -59 สู่เกาะลอยฟ้า และลานประลองบอสยักษ์ The Abyssal Warden ขนาด 4.5 เท่า (5,000 HP) พร้อมสกิล Abyssal Gravity Pull',
    span: true,
  },
  {
    icon: <Clock strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Death Clock Recall System',
    description:
      'Afterdeath ส่ง "นาฬิกาย้อนเวลา" เข้ามือผู้เล่นทันทีหลังเกิดใหม่ บันทึกพิกัด X/Y/Z คลิกขวาเพื่อวาร์ปกลับจุดตายได้ทันทีภายใน 120 วินาที (ใช้งานได้ 1 ครั้ง)',
  },
  {
    icon: <Smartphone strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Geyser & Bedrock Cross-Play',
    description:
      'รองรับทั้ง Java Edition และ Bedrock Edition (iOS, Android, Win10) ผ่าน Floodgate API พร้อมคำสั่ง /platform ตรวจสอบแพลตฟอร์มแบบเรียลไทม์',
  },
  {
    icon: <Zap strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: '100% Zero-Lag Weather Override',
    description:
      'ปิดการเรนเดอร์ฝนและพายุในมิติ The Void อย่างถาวร แก้ปัญหา Client Drop FPS ได้ 100% พร้อมหมอก Darkness และ Blindness ที่ไม่กินสเปกเครื่องเล่น',
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Void Entities & Custom Gear',
    description:
      'มอนสเตอร์ยักษ์พญาเงาเวหาทมิฬ (HP 400), ภูตทมิฬกลืนวิญญาณ (HP 280), แร่ Voidic Crystal, ผลไม้ Null Fruit, และดาบ Shadow Blade (สกิล Shadow Dash คูลดาวน์ 6 วิ)',
  },
  {
    icon: <Server strokeWidth={1.5} style={{ width: '1.25rem', height: '1.25rem' }} />,
    title: 'Paper 26.2 & Java 21 Native',
    description:
      'คอมไพล์บน Paper API 26.2.build.121-stable ด้วย Java 21 ทำงานแบบ Asynchronous ไร้ผลกระทบต่อ TPS 20.0 ของเซิร์ฟเวอร์',
  },
];

export function BentoGrid() {
  return (
    <section className="section" id="about">
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="text-label" style={{ marginBottom: '0.75rem' }}>
              Engineered Mechanics
            </p>
            <h2 className="text-heading" style={{ marginBottom: '1rem' }}>
              ระบบจริงที่ออกแบบสำหรับเซิร์ฟเวอร์
            </h2>
            <p className="text-subheading" style={{ maxWidth: '520px', margin: '0 auto' }}>
              ฟังก์ชันกลไกเกมเฉพาะตัวที่ทำงานร่วมกันได้อย่างสมบูรณ์แบบบน Paper 26.2
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
