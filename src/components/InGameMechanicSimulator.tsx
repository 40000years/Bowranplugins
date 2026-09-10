'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Eye, EyeOff, RotateCcw, Shield, Sparkles, Swords } from 'lucide-react';

export function InGameMechanicSimulator({ slug }: { slug: string; accentColor: string }) {
  const [step, setStep] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const [platform, setPlatform] = useState('Bedrock');
  const [mode, setMode] = useState('Mace');
  const [target, setTarget] = useState('Chest');
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!seconds) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);
  const layers = ['Crying Obsidian Portal', 'Void Spawn Island', '3 Elemental Sanctums', 'Trial Vault & Key'];
  return <div className="mechanic-preview"><p className="demo-notice">แบบจำลองเพื่ออธิบายกลไก ไม่ได้เชื่อมต่อกับเซิร์ฟเวอร์ Minecraft</p>
    {slug === 'afterdeath' && <><div className="demo-controls"><label>Platform <select value={platform} onChange={event => setPlatform(event.target.value)}><option>Bedrock</option><option>Java</option></select></label></div><div className="demo-stage" role="status"><Clock size={32} /><h3>{['พร้อมสำรวจโลก', 'ได้รับ Death Clock', 'กลับถึงจุดตายแล้ว'][step]}</h3><p>{step === 0 ? `${platform} / 20 HP` : step === 1 ? 'ใช้ได้หนึ่งครั้งภายใน 120 วินาที' : 'X: 142 / Y: 64 / Z: -288'}</p></div><button className="button button-secondary" onClick={() => setStep((step + 1) % 3)}>{step === 0 ? 'จำลองการตาย' : step === 1 ? 'ใช้นาฬิกากลับจุดตาย' : 'เริ่มใหม่'}{step === 2 ? <RotateCcw size={16} /> : <ArrowRight size={16} />}</button></>}
    {slug === 'voidscape' && <><div className="dimension-track">{layers.map((layer, index) => <button key={layer} className={step === index ? 'current' : ''} aria-pressed={step === index} onClick={() => setStep(index)}><span>0{index + 1}</span>{layer}</button>)}</div><div className="demo-stage" role="status"><h3>{layers[step]}</h3><p>{['สร้างกรอบ Nether Portal ด้วย Crying Obsidian แล้วจุดด้วย Fire Charge หรือ Eye of Ender', 'อ่านคู่มือภาษาไทยที่แท่น Lectern แล้วใช้ Elytra บินค้นหาเสาวิหาร', 'พิชิตเวฟมอนสเตอร์และบอสประจำวิหาร (ระบบ Anti-Boat Cheese มอนสเตอร์ขึ้นเรือไม่ได้)', 'นำ Void Key เปิด Trial Vault สไตล์ 1.21 รับแกน Advance Magic, บล็อกเพชร, เนเธอไรต์ หรืออุปกรณ์พิเศษ'][step]}</p></div><button className="button button-secondary" onClick={() => setStep((step + 1) % 4)}>{step === 3 ? 'กลับสู่ Overworld' : 'ขั้นตอนถัดไป'}<ArrowRight size={16} /></button></>}
    {slug === 'advanced-combat' && <><div className="demo-controls" role="group" aria-label="เลือกท่าต่อสู้">{['Mace', 'Sweep', 'Shield stun'].map(item => <button className="filter-button" key={item} aria-pressed={mode === item} onClick={() => { setMode(item); setEnabled(false); setSeconds(0); }}>{item}</button>)}</div><div className="demo-stage" role="status"><Swords size={32} /><h3>{seconds > 0 ? `โล่ถูกปิดใช้งาน: ${seconds}s` : enabled ? 'โจมตีแล้ว' : 'Bedrock combat'}</h3><p>{mode === 'Mace' ? 'ดาเมจท่าทุบสัมพันธ์กับความสูงที่ตกลงมา' : mode === 'Sweep' ? 'ฟันกวาดเป้าหมายรอบตัวด้วยดาบ' : seconds > 0 ? 'เป้าหมายยังใช้โล่ไม่ได้' : enabled ? 'โล่กลับมาใช้งานได้แล้ว' : 'ใช้ขวานปิดการใช้งานโล่ 5 วินาที'}</p></div><button className="button button-secondary" disabled={seconds > 0} onClick={() => { setEnabled(true); if (mode === 'Shield stun') setSeconds(5); }}>จำลองการโจมตี <Swords size={16} /></button></>}
    {slug === 'anti-freecam' && <><div className="demo-controls"><label>Target <select value={target} onChange={event => setTarget(event.target.value)}><option>Chest</option><option>Diamond ore</option></select></label><button className="filter-button" role="switch" aria-checked={enabled} onClick={() => setEnabled(!enabled)}>Freecam {enabled ? 'ON' : 'OFF'}</button></div><div className="demo-stage" role="status"><Shield size={32} /><h3>{enabled ? 'ข้อมูลถูกซ่อน' : 'มองเห็นบล็อกโดยตรง'}</h3><p>{target} / {enabled ? 'Line of sight blocked / No payload' : 'Line of sight clear / Data visible'}</p></div></>}
    {slug === 'nightvision-toggle' && <><div className={`demo-stage nightvision-scene ${enabled ? 'vision-on' : ''}`} role="status">{enabled ? <Eye size={36} /> : <EyeOff size={36} />}<h3>Night vision {enabled ? 'ON' : 'OFF'}</h3><p>{enabled ? 'มองเห็นในที่มืด และจดจำสถานะข้ามการตายหรือย้ายโลก' : 'การมองเห็นตามแสงปกติของโลก'}</p></div><button className="button button-secondary" role="switch" aria-checked={enabled} onClick={() => setEnabled(!enabled)}><TerminalIcon /> /nv</button></>}
    {slug === 'advance-magic' && <><div className="demo-controls" role="group" aria-label="เลือกคาถา">{['Lightning', 'Time Dilation', 'Shadow Step'].map((item, idx) => <button className="filter-button" key={item} aria-pressed={step === idx} onClick={() => { setStep(idx); setSeconds(0); }}>{item}</button>)}</div><div className="demo-stage" role="status"><Sparkles size={32} /><h3>{['Lightning Strike (60 Mana / CD 8s)', 'Time Dilation (80 Mana / CD 25s)', 'Shadow Step (45 Mana / CD 6s)'][step]}</h3><p>{seconds > 0 ? `คูลดาวน์: ${seconds}s | มานาคงเหลือ 40/100` : ['สายฟ้าฟาด 12 HP รัศมี 5 บล็อก ไม่ทำลายบล็อกในโลก', 'โดมหน่วงเวลารัศมี 6 บล็อก ชะลอกระสุน/ลูกธนูเหลือความเร็ว 20%', 'พุ่งทะลุกำแพง 1 บล็อกไปข้างหน้าสูงสุด 12 บล็อก'][step]}</p></div><button className="button button-secondary" disabled={seconds > 0} onClick={() => setSeconds(step === 0 ? 8 : step === 1 ? 25 : 6)}>ร่ายเวทมนตร์ <Sparkles size={16} /></button></>}
  </div>;
}
function TerminalIcon() { return <span aria-hidden="true">&gt;_</span>; }
