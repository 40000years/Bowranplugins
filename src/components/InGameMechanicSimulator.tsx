import React, { useState, useEffect } from 'react';
import {
  Play,
  RotateCcw,
  Skull,
  Compass,
  Clock,
  Zap,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  Swords,
  Shield,
  Eye,
  EyeOff,
  Sparkles,
  Box,
  Lock,
  Unlock,
  AlertTriangle,
  Flame,
} from 'lucide-react';

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

  // --- AdvancedCombat simulation states ---
  const [combatMode, setCombatMode] = useState<'mace' | 'sweep' | 'stun'>('mace');
  const [combatTriggered, setCombatTriggered] = useState(false);
  const [stunTimer, setStunTimer] = useState(0);

  const handleTriggerCombat = () => {
    setCombatTriggered(true);
    if (combatMode === 'stun') {
      setStunTimer(5);
      const interval = setInterval(() => {
        setStunTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    setTimeout(() => {
      setCombatTriggered(false);
    }, 2500);
  };

  // --- AntiFreecam simulation states ---
  const [freecamActive, setFreecamActive] = useState(false);
  const [targetBlock, setTargetBlock] = useState<'chest' | 'diamond'>('chest');

  // --- NightVisionToggle simulation states ---
  const [nvEnabled, setNvEnabled] = useState(true);

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
  if (slug === 'voidscape') {
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

  // --- AdvancedCombat Simulation ---
  if (slug === 'advanced-combat') {
    return (
      <div className="mechanic-sim-card">
        <div className="sim-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
            <Swords style={{ width: '0.9rem', height: '0.9rem' }} />
            กลไกจริง: Combat Parity & Shield Stun
          </span>
          <button
            type="button"
            onClick={handleTriggerCombat}
            disabled={combatTriggered}
            className="btn btn-sm"
            style={{
              fontSize: '0.68rem',
              padding: '0.2rem 0.6rem',
              background: combatTriggered ? 'var(--bg-tertiary)' : accentColor,
              color: '#fff',
            }}
          >
            <Play style={{ width: '0.65rem', height: '0.65rem' }} />
            {combatTriggered ? 'กำลังโจมตี...' : 'ทดสอบปล่อยท่า'}
          </button>
        </div>

        <div className="sim-body">
          {/* Mode Selector */}
          <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { id: 'mace', label: '🔨 Mace Smash Attack' },
              { id: 'sweep', label: '⚔️ Bedrock Sweep Attack' },
              { id: 'stun', label: '🛡️ Axe Shield Stun' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCombatMode(tab.id as 'mace' | 'sweep' | 'stun')}
                style={{
                  fontSize: '0.68rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: combatMode === tab.id ? accentColor : 'var(--border-subtle)',
                  background: combatMode === tab.id ? 'var(--bg-tertiary)' : 'transparent',
                  color: combatMode === tab.id ? accentColor : 'var(--text-muted)',
                  fontWeight: combatMode === tab.id ? 700 : 400,
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {combatMode === 'mace' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="badge" style={{ color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.4)' }}>
                  Fall Distance: 12 Blocks
                </span>
                <span className="badge" style={{ color: '#fbbf24' }}>
                  Kinetic DMG: +36.0 (18 Hearts)
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.5rem', lineHeight: 1.5 }}>
                คำนวณแรงตกจากที่สูงลงมากระแทกเป้าหมาย ปลดล็อกเสียงค้อนและอนุภาคระเบิด พร้อมหักล้างดาเมจตกจากที่สูงของผู้โจมตี 100%
              </p>
              <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>
                ✔ Cross-play Parity: แสดงผลสมบูรณ์ทั้ง Java และ Bedrock Edition
              </div>
            </div>
          )}

          {combatMode === 'sweep' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="badge" style={{ color: '#f43f5e' }}>Arc: 180° Sweep</span>
                <span className="badge" style={{ color: '#10b981' }}>Targets Hit: 3 Mobs</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.5rem', lineHeight: 1.5 }}>
                ดักจับจังหวะการฟันดาบของผู้เล่น Bedrock แล้วจำลองคลื่นฟันกวาด (Sweep Particle) กระจายดาเมจใส่มอนสเตอร์ข้างเคียง
              </p>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                Floodgate Packet Hook: Zero Delay
              </div>
            </div>
          )}

          {combatMode === 'stun' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span className="badge" style={{ color: stunTimer > 0 ? '#ef4444' : '#10b981' }}>
                  {stunTimer > 0 ? `Shield Disabled: ${stunTimer}s` : 'Shield Status: Active'}
                </span>
                <span className="badge">Sound: item.shield.break</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', maxWidth: '340px', margin: '0 auto 0.5rem', lineHeight: 1.5 }}>
                เมื่อผู้เล่นใช้ขวานสับใส่เป้าหมายที่กำลังยกโล่ป้องกัน โล่จะถูกปลดและติดคูลดาวน์ห้ามยกป้องกัน 5 วินาทีทันที
              </p>
              <div style={{ fontSize: '0.72rem', color: '#f43f5e', fontWeight: 600 }}>
                {stunTimer > 0 ? '⚡ กำลังติดสถานะมึนงง ไม่สามารถยกโล่ได้!' : '✔ โล่พร้อมใช้งาน (คลิก "ทดสอบปล่อยท่า" เพื่อจำลอง)'}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- AntiFreecam Simulation ---
  if (slug === 'anti-freecam') {
    return (
      <div className="mechanic-sim-card">
        <div className="sim-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
            <ShieldAlert style={{ width: '0.9rem', height: '0.9rem' }} />
            กลไกจริง: Silent Anti-Freecam Masking
          </span>
          <button
            type="button"
            onClick={() => setFreecamActive(!freecamActive)}
            className="btn btn-sm"
            style={{
              fontSize: '0.68rem',
              padding: '0.2rem 0.6rem',
              background: freecamActive ? '#ef4444' : '#10b981',
              color: '#fff',
            }}
          >
            {freecamActive ? <EyeOff style={{ width: '0.65rem', height: '0.65rem' }} /> : <Eye style={{ width: '0.65rem', height: '0.65rem' }} />}
            {freecamActive ? 'โหมด: Freecam Hack' : 'โหมด: ผู้เล่นปกติ'}
          </button>
        </div>

        <div className="sim-body">
          {/* Target Selector */}
          <div style={{ display: 'flex', gap: '0.3rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setTargetBlock('chest')}
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid',
                borderColor: targetBlock === 'chest' ? accentColor : 'var(--border-subtle)',
                background: targetBlock === 'chest' ? 'var(--bg-tertiary)' : 'transparent',
                color: targetBlock === 'chest' ? accentColor : 'var(--text-muted)',
                fontWeight: targetBlock === 'chest' ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              📦 หีบสมบัติ (Chest)
            </button>
            <button
              type="button"
              onClick={() => setTargetBlock('diamond')}
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid',
                borderColor: targetBlock === 'diamond' ? accentColor : 'var(--border-subtle)',
                background: targetBlock === 'diamond' ? 'var(--bg-tertiary)' : 'transparent',
                color: targetBlock === 'diamond' ? accentColor : 'var(--text-muted)',
                fontWeight: targetBlock === 'diamond' ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              💎 แร่เพชร (Deepslate Diamond)
            </button>
          </div>

          {!freecamActive ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '0.6rem' }}>
              <div style={{ fontSize: '0.825rem', color: '#10b981', fontWeight: 700, marginBottom: '0.2rem' }}>
                ✔ ผู้เล่นยืนอยู่ในระยะจริง (Line of Sight: PASS)
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0 0 0.35rem', lineHeight: 1.4 }}>
                {targetBlock === 'chest'
                  ? 'ส่งข้อมูลไอเทมให้ Client ครบถ้วน: [12x Diamond, 1x Enchanted Apple, 4x Netherite Scrap]'
                  : 'เรนเดอร์บล็อกแร่เพชร Deepslate Diamond Ore ตามตำแหน่งปกติ'}
              </p>
              <span className="badge" style={{ color: '#10b981' }}>Packet: Delivered Securely</span>
            </div>
          ) : (
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '0.6rem' }}>
              <div style={{ fontSize: '0.825rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.2rem' }}>
                🛑 ตรวจพบมุมมอง Freecam ลอยทะลุกำแพง!
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: '0 0 0.35rem', lineHeight: 1.4 }}>
                {targetBlock === 'chest'
                  ? 'เซิร์ฟเวอร์ระงับส่ง Packet ทันที — แฮกเกอร์มองเห็นเป็น "หีบว่างเปล่า (Empty Air)"'
                  : 'ปิดบังข้อมูลแร่ — แฮกเกอร์มองเห็นเป็นหิน Deepslate ธรรมดา (Paper Anti-Xray Masked)'}
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center' }}>
                <span className="badge" style={{ color: '#ef4444' }}>Raycast: BLOCKED</span>
                <span className="badge" style={{ color: '#fbbf24' }}>Payload: Withheld</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- NightVisionToggle Simulation ---
  if (slug === 'nightvision-toggle') {
    return (
      <div className="mechanic-sim-card">
        <div className="sim-header">
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
            <Eye style={{ width: '0.9rem', height: '0.9rem' }} />
            กลไกจริง: Persistent Night Vision (/nv)
          </span>
          <button
            type="button"
            onClick={() => setNvEnabled(!nvEnabled)}
            className="btn btn-sm"
            style={{
              fontSize: '0.68rem',
              padding: '0.2rem 0.6rem',
              background: nvEnabled ? accentColor : 'var(--bg-tertiary)',
              color: nvEnabled ? '#000' : 'var(--text-primary)',
              fontWeight: 700,
            }}
          >
            {nvEnabled ? 'คำสั่ง: /nv off' : 'คำสั่ง: /nv on'}
          </button>
        </div>

        <div className="sim-body">
          {/* Simulated Cave Viewport */}
          <div
            style={{
              borderRadius: '8px',
              padding: '0.85rem',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)',
              background: nvEnabled
                ? 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)'
                : '#050508',
              transition: 'background 0.4s ease',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              {nvEnabled ? '🔦 ⛏️ 💎' : '🌑 ... 🪨'}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: nvEnabled ? '#fbbf24' : '#64748b', marginBottom: '0.25rem' }}>
              {nvEnabled ? 'Night Vision: ACTIVE (สว่างระดับ 15)' : 'Night Vision: OFF (มืดสนิทระดับ 0)'}
            </div>
            <p style={{ fontSize: '0.75rem', color: nvEnabled ? 'var(--text-secondary)' : '#475569', margin: 0 }}>
              {nvEnabled
                ? 'มองเห็นถ้ำและเหมืองลึกชัดเจนเต็มตา ไร้อนุภาคสวิงกวนสายตา (Zero Particle Lag)'
                : 'บรรยากาศมืดตามปกติของเกม ต้องปักคบเพลิงหรือพิมพ์ /nv เพื่อเปิดความสว่าง'}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontSize: '0.7rem' }}>
            <span className="badge" style={{ color: '#10b981' }}>✔ ตายแล้วเกิดใหม่สถานะยังคงอยู่</span>
            <span className="badge" style={{ color: '#3b82f6' }}>✔ เปลี่ยนมิติสถานะไม่หลุด</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <div className="mechanic-sim-card">
      <div className="sim-header">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: accentColor, fontWeight: 600 }}>
          <Sparkles style={{ width: '0.9rem', height: '0.9rem' }} />
          ระบบจำลองพร้อมใช้งาน
        </span>
      </div>
      <div className="sim-body" style={{ textAlign: 'center', padding: '1rem' }}>
        <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
          ปลั๊กอินพร้อมติดตั้งและทำงานบนเซิร์ฟเวอร์ Paper 26.2
        </p>
      </div>
    </div>
  );
}
