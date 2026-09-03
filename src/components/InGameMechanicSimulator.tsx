'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Skull, Compass, Clock, Zap, ShieldAlert, Smartphone, CheckCircle2 } from 'lucide-react';

interface SimulatorProps {
  slug: string;
  accentColor: string;
}

export function InGameMechanicSimulator({ slug, accentColor }: SimulatorProps) {
  // --- Afterdeath simulation states ---
  // stage: 'idle' | 'dead' | 'received_clock' | 'teleported'
  const [deathStage, setDeathStage] = useState<'idle' | 'dead' | 'received_clock' | 'teleported'>('idle');
  const [platformMode, setPlatformMode] = useState<'java' | 'bedrock'>('bedrock');

  // Trigger death flow
  const handleSimulateDeath = () => {
    setDeathStage('dead');
    setTimeout(() => {
      setDeathStage('received_clock');
    }, 1500);
  };

  const handleUseClock = () => {
    setDeathStage('teleported');
    setTimeout(() => {
      setDeathStage('idle');
    }, 3500);
  };

  // --- Voidscape simulation states ---
  // layer: 0 (Overworld Bedrock Y: -59), 1 (Void Island Y: 64), 2 (Thunder Spires), 3 (Abyssal Warden Arena Y: -51)
  const [voidLayer, setVoidLayer] = useState<number>(0);
  const [isDiving, setIsDiving] = useState(false);
  const [portalTimer, setPortalTimer] = useState<number | null>(null);

  const handleStartVoidDive = () => {
    setIsDiving(true);
    setPortalTimer(3);

    const timer = setInterval(() => {
      setPortalTimer((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          setVoidLayer(1);
          setIsDiving(false);
          return null;
        }
        return prev - 1;
      });
    }, 800);
  };

  if (slug === 'afterdeath') {
    return (
      <div className="mechanic-sim-card">
        <div className="sim-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
            <Clock style={{ width: '0.9rem', height: '0.9rem' }} />
            กลไกจริง: ระบบ Death Clock & Geyser
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <button
              type="button"
              onClick={() => setPlatformMode(platformMode === 'bedrock' ? 'java' : 'bedrock')}
              className="btn btn-sm"
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
              }}
              title="สลับโหมดแพลตฟอร์มทดสอบ (/platform)"
            >
              <Smartphone style={{ width: '0.65rem', height: '0.65rem' }} />
              {platformMode === 'bedrock' ? 'Bedrock' : 'Java'}
            </button>
            <button
              type="button"
              onClick={handleSimulateDeath}
              disabled={deathStage !== 'idle'}
              className="btn btn-sm"
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.6rem',
                background: deathStage !== 'idle' ? 'var(--bg-tertiary)' : accentColor,
                color: '#fff',
              }}
            >
              <Play style={{ width: '0.65rem', height: '0.65rem' }} />
              {deathStage === 'idle' ? 'ทดสอบ /kill' : 'กำลังจำลอง...'}
            </button>
          </div>
        </div>

        <div className="sim-body">
          {deathStage === 'idle' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  สถานะผู้เล่น:
                </span>
                <span className="badge" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                  มีชีวิต (20 HP)
                </span>
                <span className="badge" style={{ color: platformMode === 'bedrock' ? '#38bdf8' : '#a855f7' }}>
                  {platformMode === 'bedrock' ? 'Bedrock (Geyser)' : 'Java Edition'}
                </span>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.75rem', lineHeight: 1.5 }}>
                กด &ldquo;ทดสอบ /kill&rdquo; เพื่อทดสอบระบบส่ง <b>นาฬิกาย้อนเวลา</b> เข้ามือ และการวาร์ปกลับจุดตายจริง
              </p>

              <div style={{ background: 'var(--bg-tertiary)', borderRadius: '6px', padding: '0.4rem 0.6rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                /platform → {platformMode === 'bedrock' ? 'คุณกำลังเล่นผ่าน Bedrock Edition (Geyser)' : 'คุณกำลังเล่นผ่าน Java Edition'}
              </div>
            </div>
          )}

          {deathStage === 'dead' && (
            <div className="death-screen-overlay">
              <div className="death-title" style={{ color: '#ef4444', fontSize: '1.25rem', fontWeight: 800 }}>
                YOU DIED!
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                กำลังบันทึกพิกัดการเสียชีวิตล่าสุด (X: 142, Y: 64, Z: -288)...
              </div>
            </div>
          )}

          {deathStage === 'received_clock' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, marginBottom: '0.5rem' }}>
                ✔ เกิดใหม่แล้ว! คุณได้รับ [นาฬิกาย้อนเวลา] เข้ามือ
              </div>

              {/* In-Game Clock Item Card */}
              <div
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  border: '1px solid #a855f7',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  textAlign: 'left',
                  maxWidth: '320px',
                  margin: '0 auto 0.75rem',
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                }}
              >
                <div style={{ fontWeight: 700, color: '#fbbf24', fontSize: '0.85rem', marginBottom: '0.2rem' }}>
                  ⏳ นาฬิกาย้อนเวลา (Death Clock)
                </div>
                <div style={{ fontSize: '0.72rem', color: '#fef08a', marginBottom: '0.2rem' }}>
                  คลิกขวาในมือเพื่อวาร์ปกลับจุดตาย
                </div>
                <div style={{ fontSize: '0.72rem', color: '#e2e8f0', fontFamily: 'monospace', marginBottom: '0.2rem' }}>
                  พิกัด: world (X: 142, Y: 64, Z: -288)
                </div>
                <div style={{ fontSize: '0.7rem', color: '#ef4444', fontWeight: 600 }}>
                  ⏳ มีเวลาใช้งาน 120 วินาที • ⚡ ใช้ได้ 1 ครั้ง
                </div>
              </div>

              <button
                type="button"
                onClick={handleUseClock}
                className="btn btn-sm btn-primary"
                style={{ background: '#a855f7', fontSize: '0.75rem', padding: '0.35rem 0.85rem' }}
              >
                <Zap style={{ width: '0.75rem', height: '0.75rem' }} />
                คลิกขวาใช้งานนาฬิกา (Right Click)
              </button>
            </div>
          )}

          {deathStage === 'teleported' && (
            <div style={{ animation: 'fadeIn 0.3s ease', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>⚡ ✨</div>
              <div style={{ fontSize: '0.875rem', color: '#10b981', fontWeight: 700, marginBottom: '0.25rem' }}>
                ย้อนเวลากลับมายังจุดที่คุณเสียชีวิตเรียบร้อยแล้ว!
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                วาร์ปกลับมายังพิกัด X: 142, Y: 64, Z: -288 สำเร็จ
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- Voidscape Simulation (Finite 3-Layer Dive) ---
  return (
    <div className="mechanic-sim-card">
      <div className="sim-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
          <Compass style={{ width: '0.9rem', height: '0.9rem' }} />
          กลไกจริง: Finite 3-Layer Dive & Warden
        </span>
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {voidLayer === 0 ? (
            <button
              type="button"
              onClick={handleStartVoidDive}
              disabled={isDiving}
              className="btn btn-sm"
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.6rem',
                background: isDiving ? 'var(--bg-tertiary)' : accentColor,
                color: '#fff',
              }}
            >
              <Play style={{ width: '0.65rem', height: '0.65rem' }} />
              {isDiving ? `กำลังเปิดประตู (${portalTimer}s)...` : 'ดำดิ่ง Bedrock Y: -59'}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVoidLayer(0)}
              className="btn btn-sm"
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
              }}
            >
              <RotateCcw style={{ width: '0.65rem', height: '0.65rem' }} />
              กลับ Overworld
            </button>
          )}
        </div>
      </div>

      <div className="sim-body">
        {/* Layer Selector Tabs */}
        <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { id: 0, label: 'Bedrock (Y: -59)' },
            { id: 1, label: 'Layer 1: เกาะลอยฟ้า' },
            { id: 2, label: 'Layer 2: Thunder Spires' },
            { id: 3, label: 'Layer 3: บอส Abyssal Warden' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setVoidLayer(tab.id)}
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid',
                borderColor: voidLayer === tab.id ? accentColor : 'var(--border-subtle)',
                background: voidLayer === tab.id ? 'var(--bg-tertiary)' : 'transparent',
                color: voidLayer === tab.id ? accentColor : 'var(--text-muted)',
                fontWeight: voidLayer === tab.id ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Current Layer Status Card */}
        {voidLayer === 0 && (
          <div>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Overworld Bedrock Trigger (Y &le; -59)
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.75rem', lineHeight: 1.5 }}>
              ยืนบนหิน Bedrock ครบ 3 วินาที หรือตกทะลุใต้โลก ประตูมิติจะเปิดและวาร์ปผู้เล่นเข้าสู่ <b>the_void</b>
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
              <span className="badge">Stand-time: 3s</span>
              <span className="badge">Fall Teleport: Enabled</span>
            </div>
          </div>
        )}

        {voidLayer === 1 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="badge" style={{ color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.4)' }}>
                มิติ the_void • เกาะ Y: 64
              </span>
              <span className="badge" style={{ color: '#ef4444' }}>
                Void Infusion (-2.0 HP ทุก 60s)
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.5rem', lineHeight: 1.5 }}>
              มอนสเตอร์ Void ยักษ์: <b>พญาเงาเวหาทมิฬ</b> (Scale 2.2x, HP 400) และ <b>ภูตทมิฬ</b> (Scale 2.8x, HP 280)
            </p>
            <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
              ✔ Weather Override: ปิดฝน/พายุใน The Void ถาวร (0 Lag)
            </div>
          </div>
        )}

        {voidLayer === 2 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span className="badge" style={{ color: '#a855f7' }}>Thunder Spires</span>
              <span className="badge" style={{ color: '#fbbf24' }}>Darkness Fog Active</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.5rem', lineHeight: 1.5 }}>
              เสาสายฟ้าฟาดแห่งความว่างเปล่า ดรอปไอเทม <b>Voidic Crystal</b> (75%) และ <b>Null Fruit</b> (35%)
            </p>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
              Item: Shadow Blade (สกิล Shadow Dash คูลดาวน์ 6 วิ)
            </div>
          </div>
        )}

        {voidLayer === 3 && (
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '0.6rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ef4444', marginBottom: '0.2rem' }}>
              💀 ราชันย์ก้นบึ้งทมิฬ (The Abyssal Warden)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.35rem' }}>
              HP: 5,000 / 5,000 (2,500 หัวใจ) • ขยายร่าง 4.5 เท่า (สูง 13 บล็อก!)
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              ⚡ <b>1-Hit Kill</b> (ดาเมจ 2000+) พร้อมสกิล <b>Abyssal Gravity Pull</b> ดูดผู้เล่นทั่วทั้งลานประลอง Layer 3 (X: 8000, Y: -51)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
