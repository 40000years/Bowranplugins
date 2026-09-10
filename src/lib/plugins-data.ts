import { PluginData } from '@/types/plugin';

export const PLUGINS: PluginData[] = [
  {
    id: 'afterdeath',
    name: 'Afterdeath',
    slug: 'afterdeath',
    tagline: 'นาฬิกาวาร์ปกลับจุดตาย (สำหรับ Java & Bedrock)',
    description:
      'เมื่อผู้เล่นตาย จะได้นาฬิกามากดคลิกขวาเพื่อวาร์ปกลับไปจุดที่ตายได้ภายใน 2 นาที รองรับทั้ง Java และ Bedrock',
    longDescription:
      'ปลั๊กอินระบบนาฬิกาย้อนเวลากลับจุดตาย (Death Clock) เมื่อตายและเกิดใหม่จะได้รับนาฬิกา สามารถกดคลิกขวาเพื่อวาร์ปกลับไปจุดเดิมได้ภายใน 120 วินาที ช่วยให้กลับไปเก็บของได้สะดวก รองรับทั้ง Java และ Bedrock',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.15)',
    gradientFrom: '#1a0a2e',
    gradientTo: '#0d0d1a',
    author: 'Bowran',
    category: 'Mechanics',
    tags: ['Death Clock', 'Bedrock & Java', 'Geyser', 'Respawn', 'Survival'],
    platforms: ['Paper', 'Spigot', 'Purpur', 'Geyser / Floodgate'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'นาฬิกากลับจุดตาย',
        description: 'เกิดใหม่จะได้รับนาฬิกา กดคลิกขวาวาร์ปกลับจุดตายได้ใน 120 วินาที (ใช้งานได้ 1 ครั้ง)',
      },
      {
        title: 'รองรับ Java และ Bedrock',
        description: 'ใช้งานได้ทั้งสองฝั่งผ่าน Geyser และ Floodgate',
      },
      {
        title: 'ระบุพิกัดบนไอเทม',
        description: 'บอกชื่อโลกและพิกัด X, Y, Z จุดที่เสียชีวิตไว้บนนาฬิกาโดยตรง',
      },
      {
        title: 'ลงแล้วใช้ได้ทันที',
        description: 'ใส่ไฟล์ afterdeath.jar ในโฟลเดอร์ plugins แล้วเปิดเซิร์ฟเวอร์ใช้งานได้เลย',
      },
    ],
    commands: [
      {
        command: '/deathclock',
        description: 'รับนาฬิกาย้อนเวลาไปยังจุดเสียชีวิตล่าสุด (สำหรับทดสอบ)',
        permission: 'geyserexample.deathclock',
      },
      {
        command: '/platform',
        description: 'ตรวจสอบว่าผู้เล่นกำลังเล่นผ่าน Java หรือ Bedrock',
        permission: 'geyserexample.platform',
      },
    ],
    permissions: [
      {
        node: 'geyserexample.platform',
        description: 'อนุญาตให้ตรวจสอบแพลตฟอร์มของตนเอง',
        default: 'true',
      },
      {
        node: 'geyserexample.deathclock',
        description: 'อนุญาตให้รับนาฬิกาย้อนเวลากลับจุดตาย',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ afterdeath.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์',
      '(ถ้าต้องการให้ Bedrock เล่นได้) ติดตั้ง Geyser และ Floodgate เพิ่มเติม',
      'รีสตาร์ทเซิร์ฟเวอร์ Paper/Purpur แล้วเริ่มใช้งานได้ทันที',
    ],
    configuration:
      'ไม่ต้องตั้งค่าเพิ่มเติม สามารถใส่และเปิดเซิร์ฟเวอร์ใช้งานได้ทันที',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-03',
        fileSize: '13 KB',
        downloadUrl: '/api/download?plugin=afterdeath',
        filename: 'afterdeath.jar',
        changelog: [
          'อัปเดตไฟล์ขนาดกะทัดรัด (13 KB) ประหยัดทรัพยากรเซิร์ฟเวอร์',
          'ระบบนาฬิกาย้อนเวลากลับจุดตาย (หมดเวลา 120 วินาที)',
          'ตรวจจับแพลตฟอร์ม Java / Bedrock ผ่านคำสั่ง /platform',
        ],
      },
    ],
  },
  {
    id: 'voidscape',
    name: 'Voidscape',
    slug: 'voidscape',
    tagline: 'ภาคเสริม Advance Magic: มิติ The Void, 3 มหาวิหารธาตุ และ Trial Vault',
    description:
      'ภาคเสริมอย่างเป็นทางการของ Advance Magic เปิดประตูมิติด้วย Crying Obsidian สำรวจ 3 มหาวิหารธาตุ และปลดล็อกหีบ Trial Vault',
    longDescription:
      'ปลั๊กอินสำรวจมิติ The Void v2 ได้รับการปรับปรุงใหม่ทั้งหมดเพื่อเป็นภาคเสริมของ Advance Magic ผู้เล่นสามารถสร้างโครงประตู Nether Portal ด้วยบล็อก Crying Obsidian และจุดด้วย Fire Charge หรือ Eye of Ender เพื่อข้ามมิติ ณ เกาะเกิดจะมีแท่น Lectern พร้อมคู่มือภาษาไทยแนะนำการบินด้วย Elytra ไปยัง 3 มหาวิหารธาตุโบราณ (Sanctum of Darkness, Astral Sanctum, Chrono Sanctum) ปราบเวฟมอนสเตอร์และบอสเพื่อรับ Void Key (พร้อมระบบ Anti-Boat Cheese 100% ห้ามมอนสเตอร์ขึ้นเรือหรือรถราง) นำกุญแจมาเปิดหีบ Trial Vault สไตล์ Trial Chamber เพื่อรับไอเทมแกนเวทมนตร์ Advance Magic, บล็อกเพชร, แท่งเนเธอไรต์, ลายเกราะหายาก และอุปกรณ์พิเศษขุด 3x3 หรือเผาแร่อัตโนมัติ',
    accentColor: '#3b82f6',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    gradientFrom: '#0a1628',
    gradientTo: '#08080f',
    author: 'Bowran',
    category: 'World & Dimension',
    tags: ['Advance Magic', 'The Void', 'Dimension', 'Sanctum', 'Trial Vault', 'Crying Obsidian'],
    platforms: ['Paper 26.2+', 'Java 25+', 'Geyser / Floodgate'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'ภาคเสริม Advance Magic & ประตู Crying Obsidian',
        description: 'สร้างโครงประตูเนเธอร์จาก Crying Obsidian จุดด้วย Fire Charge หรือ Eye of Ender เพื่อเดินทางสู่ The Void',
      },
      {
        title: '3 มหาวิหารธาตุ (Sanctums)',
        description: 'สถาปัตยกรรมเฉพาะตัว 3 แห่ง: Sanctum of Darkness, Astral Sanctum, และ Chrono Sanctum',
      },
      {
        title: 'ระบบป้องกัน Cheese (Anti-Boat Cheese)',
        description: 'มอนสเตอร์และบอสในดันเจี้ยนไม่สามารถขึ้นเรือหรือรถรางได้ และห้ามวางยานพาหนะในเขตวิหาร',
      },
      {
        title: 'หีบและกุญแจ Trial Vault & Void Key',
        description: 'ปราบบอสรับ Void Key คนละ 1 ดอกต่อคน เปิดคลังสมบัติสไตล์ 1.21 รับของรางวัลทันที (เปิดได้คนละ 1 ครั้งต่อวิหาร)',
      },
      {
        title: 'เรตของรางวัล Trial Vault สมดุล 100%',
        description: '10% ไอเทม Advance Magic, 30% Diamond Block, 30% Netherite Ingot, 20% Armor Trim, 10% อุปกรณ์พิเศษ (Rift Excavator / Smelter\'s Pickaxe / Storm Bow)',
      },
      {
        title: 'คู่มือและแท่นอ่านในเกม',
        description: 'แท่น Lectern ณ จุดเกิดพร้อมหนังสือคู่มือนักสำรวจภาษาไทย แนะนำพิกัดและการบินค้นหาวิหาร',
      },
    ],
    commands: [
      {
        command: '/void guide',
        description: 'เปิดหนังสือคู่มือนักสำรวจภาษาไทย แนะนำระบบและพิกัดวิหาร',
        permission: 'voidscape.enter',
      },
      {
        command: '/void locate',
        description: 'แสดงพิกัดและทิศทางของมหาวิหารทั้ง 3 แห่งใกล้ตัว',
        permission: 'voidscape.enter',
      },
      {
        command: '/void tp <dark|astral|time|spawn>',
        description: 'วาร์ปไปยังจุดเกิดหรือมหาวิหารทั้ง 3 แห่งทันที (เฉพาะ Admin)',
        permission: 'voidscape.admin',
      },
      {
        command: '/void reload',
        description: 'รีโหลดไฟล์ตั้งค่า config.yml',
        permission: 'voidscape.admin',
      },
    ],
    permissions: [
      {
        node: 'voidscape.enter',
        description: 'สิทธิ์ใช้งานประตู Crying Obsidian และคำสั่งแนะนำตัวเบื้องต้น',
        default: 'true',
      },
      {
        node: 'voidscape.admin',
        description: 'สิทธิ์ผู้ดูแลระบบสำหรับคำสั่งวาร์ปและรีโหลดปลั๊กอิน',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ voidscape.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์ Paper 26.2 (แนะนำให้ติดตั้งคู่กับ Advance Magic)',
      'รีสตาร์ทเซิร์ฟเวอร์ โลก the_void_v2 จะถูกโหลดขึ้นอัตโนมัติ',
      'ตัวปลั๊กอินฝัง Resource Pack ในไฟล์ .jar และจะแตกไฟล์ลง /plugins/Voidscape/resource-packs/ พร้อมติดตั้งลง Geyser ให้ทันที',
    ],
    configuration:
      'สามารถปรับแต่งค่า wave มอนสเตอร์, บอส HP, จุดเกิด, และรายการของรางวัลได้ที่ /plugins/Voidscape/config.yml',
    versions: [
      {
        version: '3.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2026-09-10',
        fileSize: '82 KB',
        downloadUrl: '/api/download?plugin=voidscape&v=3.0.0',
        filename: 'voidscape.jar',
        changelog: [
          'คืนชีพสไตล์การสร้างโลก The Void เกาะลอยฟ้าหินทมิฬดั้งเดิม: เกาะลอยฟ้า Polished Blackstone และ Deepslate พร้อมสายแร่หินบะซอลต์และผลึก Amethyst สุดอลังการ',
          'ปรับการกระจายวิหารให้หนาแน่นทั่วโลก: วิหารทั้ง 3 ธาตุมีอยู่ไม่จำกัด เกิดซ้ำทุก ~280 บล็อก พร้อม 3 วิหารเริ่มต้นรอบจุดเกิด ~250 บล็อก และยอดเสาประภาคารส่องสว่างมองเห็นได้จากระยะไกล',
          'ยกเลิกระบบดูดส่งกลับเมื่อใกล้ตายหรือตกเหว (Death Rescue) ให้ผู้เล่นเสียชีวิตและเกิดใหม่ตามกลไกปกติของ Minecraft หรือใช้ร่วมกับนาฬิกาของ Afterdeath ได้อย่างสมบูรณ์แบบ',
          'เปิดให้ผู้เล่นทุกคนใช้คำสั่ง /void locate เพื่อดูพิกัดและระยะห่างของวิหารทั้ง 3 ธาตุที่ใกล้ที่สุดได้ตลอดเวลา',
          'รีเซ็ตและแปลงโฉมเป็นภาคเสริม (Expansion) อย่างเป็นทางการสำหรับ Advance Magic',
          'ฝัง Resource Pack (ทั้ง Java .zip, Bedrock .mcpack และ Geyser Mappings) ไว้ในตัว .jar โดยตรง พร้อมระบบ Auto-Extract และ Auto-Install เข้า Geyser อัตโนมัติเมื่อเปิดเซิร์ฟเวอร์',
          'ระบบประตูมิติใหม่: สร้างกรอบ Nether Portal ด้วย Crying Obsidian และจุดชนวนด้วย Fire Charge หรือ Eye of Ender',
          'แท่น Lectern และคู่มือภาษาไทย (Guide Book) อธิบายการบินด้วย Elytra และกลไกดันเจี้ยน ณ เกาะเกิด',
          '3 มหาวิหารธาตุโบราณ: Sanctum of Darkness, Astral Sanctum และ Chrono Sanctum',
          'ระบบต่อต้าน Cheese (Anti-Boat Cheese): ป้องกันมอนสเตอร์ขึ้นเรือหรือรถราง และห้ามวางยานพาหนะในเขตวิหาร',
          'หีบสมบัติสไตล์ Trial Chamber (Vault & Void Key): ปราบบอสรับ Void Key ปลดล็อกหีบได้คนละ 1 ครั้งต่อวิหาร',
          'เรตรางวัล 100% ตรงตามกำหนด: 10% แกนเวทมนตร์ Advance Magic, 30% Diamond Block, 30% Netherite Ingot, 20% Armor Trim Template (18 ลาย), 10% อุปกรณ์พิเศษ (Rift Excavator, Smelter\'s Pickaxe, Storm Bow)',
          'พลั่ว/อีเต้อ Smelter\'s Pickaxe เผาแร่และทรายอัตโนมัติทันทีที่ขุด',
          'รองรับ Resource Pack ทั้ง Java Edition (1.21.2+) และ Bedrock Edition ผ่าน Geyser Custom Mappings',
        ],
      },
      {
        version: '2.2.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2026-09-09',
        fileSize: '101 KB',
        downloadUrl: '/api/download?plugin=voidscape&v=2.2.0',
        filename: 'Voidscape-2.2.0.jar',
        changelog: [
          'Voidscape 2.2.0 รองรับ Paper 26.2 และ Java 25+',
          'เพิ่มระบบภารกิจรอยแยก 5 ด่าน: ถอดรหัสรูน, พายุรอยแยก, และต่อสู้ผู้กลืนรอยแยก',
          'ระบบเสี่ยงต่อ (Risk & Bank) พร้อมระบบฝากรางวัลอัตโนมัติเมื่อครบ 5 ด่าน หรือปิดเซิร์ฟเวอร์',
          'เพิ่มคู่มือภาษาไทยในเกม 12 หน้า (/void guide) และสมุดบันทึกการค้นพบ (/void journal)',
          'ดันเจี้ยนคฤหาสน์เรืออับปาง (Dreadship Mansion) 3 ชั้น และมหาวิหาร (Sanctum) ปลดล็อก Relic',
          'จำกัดรอยแยก 2 รอบพร้อมกัน และคุมเพดานมอนร่วม 48 ตัวเพื่อความเสถียรของเซิร์ฟเวอร์',
          'รองรับ Resource Pack แยกชัดเจนทั้ง Java และ Bedrock ผ่าน Geyser Mappings',
        ],
      },
      {
        version: '1.5.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '70 KB',
        downloadUrl: '/api/download?plugin=voidscape&v=1.5.0',
        filename: 'Voidscape-1.5.0.jar',
        changelog: [
          'อัปเดตไฟล์ใหม่ (70 KB) ปรับปรุงประสิทธิภาพและลดการใช้แรม',
          'ระบบดำดิ่งสู่มิติ The Void ผ่านประตูกล Bedrock',
          'บอส The Abyssal Warden และมอนสเตอร์ประจำมิติ',
          'ดาบ Shadow Blade และไอเทมพิเศษ',
        ],
      },
    ],
  },
  {
    id: 'advanced-combat',
    name: 'AdvancedCombat',
    slug: 'advanced-combat',
    tagline: 'ปรับระบบต่อสู้ของ Bedrock ให้เหมือน Java',
    description:
      'ช่วยให้ผู้เล่น Bedrock ใช้ท่าทุบของ Mace และการฟันกวาดของดาบได้เหมือน Java พร้อมระบบขวานตัดโล่',
    longDescription:
      'ปลั๊กอินปรับความสมดุลการต่อสู้สำหรับเซิร์ฟเวอร์ที่มีผู้เล่น Java และ Bedrock ช่วยให้ Bedrock สามารถฟันกวาด (Sweep Attack) และใช้ท่าทุบ Mace ได้เหมือน Java พร้อมระบบขวานฟันตัดโล่ 5 วินาที',
    accentColor: '#f43f5e',
    accentGlow: 'rgba(244, 63, 94, 0.18)',
    gradientFrom: '#2d0a14',
    gradientTo: '#0d0d1a',
    author: 'Bowran',
    category: 'Combat & Mechanics',
    tags: ['Combat Parity', 'Mace Smash', 'Sweep Attack', 'Axe Shield Stun', 'Geyser', 'PvP'],
    platforms: ['Paper', 'Spigot', 'Purpur', 'Geyser / Floodgate'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'ท่าทุบ Mace',
        description: 'คิดดาเมจตามความสูงที่ตกลงมาทุบ พร้อมลดดาเมจจากการตกให้ผู้โจมตี',
      },
      {
        title: 'ฟันกวาด (Sweep Attack)',
        description: 'ผู้เล่น Bedrock สามารถฟันกวาดดาบโดนศัตรูรอบๆ ได้เหมือน Java',
      },
      {
        title: 'ขวานตัดโล่ (Shield Stun)',
        description: 'ใช้ขวานฟันใส่คนที่ยกโล่ จะทำให้โล่ใช้งานไม่ได้ 5 วินาที',
      },
      {
        title: 'เชื่อมต่อกับ Floodgate',
        description: 'ตรวจจับผู้เล่นอัตโนมัติ ไม่กระทบระบบเดิมของฝั่ง Java',
      },
    ],
    commands: [
      {
        command: '/advancedcombat',
        description: 'คำสั่งจัดการและรีโหลดปลั๊กอิน (/advancedcombat reload)',
        permission: 'advancedcombat.admin',
      },
    ],
    permissions: [
      {
        node: 'advancedcombat.admin',
        description: 'สิทธิ์ใช้งานคำสั่งจัดการปลั๊กอิน AdvancedCombat',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ advanced-combat.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์',
      '(แนะนำ) ติดตั้ง Floodgate เพื่อตรวจจับผู้เล่น Bedrock',
      'รีสตาร์ทเซิร์ฟเวอร์ Paper 26.2',
    ],
    configuration:
      'สามารถปรับระยะเวลาตัดโล่ และเสียงเอฟเฟกต์ได้ใน /plugins/AdvancedCombat/config.yml',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '15 KB',
        downloadUrl: '/api/download?plugin=advanced-combat',
        filename: 'advanced-combat.jar',
        changelog: [
          'เวอร์ชัน 1.0.0 รองรับ Paper 26.2',
          'ระบบคำนวณดาเมจท่าทุบ Mace ตามความสูง',
          'ระบบ Sweep Attack สำหรับผู้เล่น Bedrock',
          'ระบบขวานฟันตัดโล่ 5 วินาที',
        ],
      },
    ],
  },
  {
    id: 'anti-freecam',
    name: 'AntiFreecam',
    slug: 'anti-freecam',
    tagline: 'ป้องกัน Freecam ส่องกล่องและแร่ทะลุกำแพง',
    description:
      'ซ่อนไอเทมในกล่องและบล็อกแร่จากคนที่ใช้ Mod Freecam ส่องทะลุกำแพง โดยไม่ส่งข้อมูลจนกว่าจะเดินไปมองเห็นจริง',
    longDescription:
      'ปลั๊กอินป้องกันผู้เล่นใช้ Mod Freecam ลอยกล้องทะลุกำแพงเพื่อแอบดูของในหีบหรือหาแร่ โดยเซิร์ฟเวอร์จะไม่ส่งข้อมูลไอเทมจนกว่าตัวละครจะเดินไปมองเห็นจริง',
    accentColor: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.18)',
    gradientFrom: '#06281e',
    gradientTo: '#080d14',
    author: 'Bowran',
    category: 'Security & Anti-Cheat',
    tags: ['Anti-Freecam', 'Anti-Xray', 'Container Masking', 'Security', 'Paper 26.2'],
    platforms: ['Paper', 'Purpur'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'ซ่อนของในหีบ',
        description: 'ไม่ส่งข้อมูลไอเทมในกล่องให้คนที่ใช้ Freecam ส่องดู',
      },
      {
        title: 'ตรวจจับสายตา (Line of Sight)',
        description: 'ต้องมีแนวสายตามองเห็นบล็อกจริงถึงจะได้รับข้อมูล',
      },
      {
        title: 'ป้องกันการหาแร่',
        description: 'ซ่อนแร่ที่อยู่หลังกำแพงไม่ให้ถูกแอบส่องตำแหน่ง',
      },
      {
        title: 'ไม่กินสเปก',
        description: 'ทำงานเบื้องหลังแบบ Asynchronous ไม่ทำให้ TPS ตก',
      },
    ],
    commands: [
      {
        command: '/antifreecam',
        description: 'คำสั่งจัดการระบบ AntiFreecam (/antifreecam reload)',
        permission: 'antifreecam.admin',
      },
    ],
    permissions: [
      {
        node: 'antifreecam.admin',
        description: 'สิทธิ์ผู้ดูแลระบบสำหรับคำสั่งรีโหลด AntiFreecam',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ anti-freecam.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์',
      'รีสตาร์ทเซิร์ฟเวอร์ Paper 26.2 ใช้งานได้ทันที',
    ],
    configuration:
      'ทำงานได้ทันทีโดยไม่ต้องตั้งค่าเพิ่มเติม หรือปรับระยะตรวจจับได้ใน config.yml',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '12 KB',
        downloadUrl: '/api/download?plugin=anti-freecam',
        filename: 'anti-freecam.jar',
        changelog: [
          'เวอร์ชัน 1.0.0 รองรับ Paper 26.2',
          'ระบบซ่อนข้อมูลไอเทมในหีบสมบัติ',
          'ระบบตรวจจับมุมมองสายตา Raycast',
        ],
      },
    ],
  },
  {
    id: 'nightvision-toggle',
    name: 'NightVisionToggle',
    slug: 'nightvision-toggle',
    tagline: 'คำสั่งเปิด-ปิด Night Vision (/nv) ค้างสถานะตลอด',
    description:
      'ให้ผู้เล่นพิมพ์ /nv เพื่อเปิดหรือปิดการมองเห็นในความมืดได้ตลอดเวลา ตายหรือย้ายโลกสถานะก็ไม่หาย',
    longDescription:
      'ปลั๊กอินคำสั่ง /nv หรือ /nightvision ช่วยให้ผู้เล่นเปิดหรือปิดการมองเห็นในความมืดได้สะดวก เหมาะกับสายสร้างบ้านและขุดเหมือง โดยระบบจะจำสถานะไว้ตลอด ไม่หลุดแม้จะตาย เกิดใหม่ หรือย้ายมิติ',
    accentColor: '#f59e0b',
    accentGlow: 'rgba(245, 158, 11, 0.18)',
    gradientFrom: '#291b05',
    gradientTo: '#0b0d14',
    author: 'Bowran',
    category: 'Quality of Life',
    tags: ['Night Vision', 'QoL', 'Commands', 'Builders', 'Utility'],
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'จำสถานะตลอด',
        description: 'เปิดทิ้งไว้ได้ยาวๆ ตายหรือย้ายโลกสถานะก็ยังอยู่',
      },
      {
        title: 'คำสั่งสั้น ใช้งานง่าย',
        description: 'พิมพ์ /nv เพื่อเปิดหรือปิดได้ทันที',
      },
      {
        title: 'ไม่มีละอองกวนตา',
        description: 'ภาพสว่างใส ไม่มีเอฟเฟกต์ละอองยาบังหน้าจอ',
      },
      {
        title: 'เบาและประหยัดสเปก',
        description: 'ทำงานตรงผ่าน Paper API ใช้ทรัพยากรน้อยมาก',
      },
    ],
    commands: [
      {
        command: '/nv',
        description: 'เปิดหรือปิดการมองเห็นในความมืด (/nv [on|off|toggle])',
        permission: 'nightvision.use',
      },
      {
        command: '/nightvision',
        description: 'คำสั่งเต็มสำหรับเปิดหรือปิด Night Vision',
        permission: 'nightvision.use',
      },
    ],
    permissions: [
      {
        node: 'nightvision.use',
        description: 'อนุญาตให้ผู้เล่นเปิดหรือปิด Night Vision ของตนเอง',
        default: 'true',
      },
      {
        node: 'nightvision.admin',
        description: 'อนุญาตให้รีโหลดปลั๊กอิน NightVisionToggle',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ nightvision-toggle.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์',
      'รีสตาร์ทเซิร์ฟเวอร์ Paper 26.2',
      'ให้สิทธิ์ nightvision.use กับผู้เล่นในเซิร์ฟเวอร์',
    ],
    configuration:
      'สามารถปรับแต่งข้อความและเสียงแจ้งเตือนได้ใน config.yml',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '11 KB',
        downloadUrl: '/api/download?plugin=nightvision-toggle',
        filename: 'nightvision-toggle.jar',
        changelog: [
          'เวอร์ชัน 1.0.0 รองรับ Paper 26.2',
          'จดจำสถานะ Night Vision ข้ามการตายและย้ายโลก',
          'คำสั่งย่อ /nv [on|off|toggle]',
        ],
      },
    ],
  },
  {
    id: 'advance-magic',
    name: 'Advance Magic',
    slug: 'advance-magic',
    tagline: '15 คทาเวทมนตร์ พร้อมระบบมานาและคูลดาวน์ (Java & Bedrock)',
    description:
      'ปลั๊กอินเวทมนตร์ 15 คาถา พร้อมคทา 15 รูปแบบ ระบบมานา 100 หน่วย คูลดาวน์รายบุคคล และ Resource Pack สำหรับ Java และ Geyser Bedrock',
    longDescription:
      'ปลั๊กอินระบบเวทมนตร์ 15 คาถาพร้อมคทาเฉพาะตัว สร้างได้ด้วยสูตรคราฟต์ 3x3 ในโหมด Survival ระบบมานา 100 หน่วย ฟื้นฟู 2 หน่วยต่อวินาที คูลดาวน์รายบุคคลแยกตามคาถา ปลอดภัยต่อโลกและสิ่งก่อสร้าง (Anti-Griefing) รองรับทั้ง Java และ Bedrock ผ่าน Geyser มี Resource Pack เท็กซ์เจอร์และโมเดล 32x32 พิกเซลในตัว',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.15)',
    gradientFrom: '#1e1035',
    gradientTo: '#0b0814',
    author: 'Bowran',
    category: 'Gameplay',
    tags: ['Magic', 'Wands', 'Mana System', 'Spells', 'PVP & PVE', 'Crossplay', 'Geyser'],
    platforms: ['Paper 26.2+', 'Java 21+', 'Geyser / Floodgate'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years/Afterdeath',
    features: [
      {
        title: '15 คทาเวทมนตร์เฉพาะตัว',
        description: 'มีคทา 15 รูปแบบ เช่น Lightning Strike, Frost Nova, Shadow Step, Meteor Strike, Time Dilation ฯลฯ',
      },
      {
        title: 'ระบบมานาและคูลดาวน์ถาวร',
        description: 'มานา 100 หน่วย รีเจน 2 หน่วย/วินาที คูลดาวน์แยกรายสกิลและบันทึกลง PDC ไม่หายแม้ตายหรือรีสตาร์ทเซิร์ฟเวอร์',
      },
      {
        title: 'ปลอดภัยต่อแมปและสิ่งก่อสร้าง (Anti-Griefing)',
        description: 'สกิลระเบิด (Meteor, Wither) และสายฟ้าไม่ทำลายบล็อกในโลก Earth Wall ใช้เอนทิตีชั่วคราวและลบอัตโนมัติ',
      },
      {
        title: 'ระบบทีมและพันธมิตร',
        description: 'เวทบัฟและเวทโจมตีแยกมิตร-ศัตรูอย่างแม่นยำผ่านระบบ Scoreboard Team, สัตว์เลี้ยง (Tamed) และกฎ PvP ของโลก',
      },
      {
        title: 'รองรับ Java และ Bedrock เต็มรูปแบบ',
        description: 'มี Resource Pack แยกทั้ง Java 1.21.2+ และ Bedrock (.mcpack) พร้อม Geyser Custom Mappings v2',
      },
    ],
    commands: [
      {
        command: '/magic list',
        description: 'แสดงรายชื่อคาถาทั้งหมด ค่ามานา คูลดาวน์ และไอเทม Core สำหรับคราฟต์',
      },
      {
        command: '/magic mana',
        description: 'ตรวจสอบปริมาณมานาคงเหลือบนแถบ Action Bar',
      },
      {
        command: '/magic give <player> <spell>',
        description: 'มอบคทาเวทมนตร์ให้กับผู้เล่นที่ระบุ (สำหรับผู้ดูแลระบบ)',
        permission: 'advance-magic.admin',
      },
    ],
    permissions: [
      {
        node: 'advance-magic.cast',
        description: 'อนุญาตให้ผู้เล่นใช้คทาร่ายเวทมนตร์',
        default: 'true',
      },
      {
        node: 'advance-magic.craft',
        description: 'อนุญาตให้คราฟต์คทาเวทมนตร์ในโต๊ะคราฟต์ 3x3',
        default: 'true',
      },
      {
        node: 'advance-magic.admin',
        description: 'สิทธิ์ผู้ดูแลระบบสำหรับคำสั่ง /magic give',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ advance-magic.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์ Paper 26.2',
      'รีสตาร์ทเซิร์ฟเวอร์เพื่อเริ่มใช้งานคำสั่งและสูตรคราฟต์',
      'ติดตั้ง advance-magic-bedrock.mcpack และ geyser-mappings.json ใน Geyser สำหรับผู้เล่น Bedrock',
      'ติดตั้ง advance-magic-java.zip หรือใส่ URL ใน config.yml สำหรับผู้เล่น Java',
    ],
    configuration:
      'ปรับแต่งค่าความเสียหาย, เปิด/ปิดไฟจากอุกกาบาต, และการตั้งค่า Resource Pack ได้ที่ /plugins/advance-magic/config.yml',
    versions: [
      {
        version: '1.2.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2026-09-10',
        fileSize: '3.05 MB',
        downloadUrl: '/api/download?plugin=advance-magic&v=1.2.0',
        filename: 'advance-magic.jar',
        changelog: [
          'อัปเกรดระบบสกิล Active 2 จังหวะ (2-Stage / Multi-Wave) ครบทั้ง 15 สกิลในเกม',
          'Earth Wall: ขยายเป็นป้อมปราการ 2 ชั้นหนาแน่น (กว้าง 7 x สูง 4 x หนา 2 บล็อก รวม 56 บล็อก) พร้อมคลื่นแผ่นดินไหวสตันศัตรู และคลื่นหินถล่มผลักศัตรูตอนหมดเวลา',
          'Meteor Strike: เพิ่มเป็นฝนอุกกาบาตทิ้งระเบิด 3 ลูกซ้อน (3-Meteor Bombardment Barrage)',
          'Wither Ray: ปืนกลรัว 6 กะโหลก Wither Skull ต่อเนื่อง พร้อม Charged Finisher ลูกที่ 6 รัศมีกว้างและ Wither III',
          'Invisibility Shroud: เพิ่ม Stage 2 Ambush Execution Strike โจมตีเปิดจากเงามืดบวกโบนัสทันที +50 ดาเมจ พร้อมศัตรูติดตาบอดและตัวอ่อนแรง',
          'Lightning Strike: เพิ่ม Stage 2 คลื่นประจุไฟฟ้าโอเวอร์ชาร์จช็อตระเบิดตามหลัง 7 บล็อก',
          'Frost Nova: เพิ่ม Stage 2 Glacial Shatter ระเบิดเศษน้ำแข็งแตกกระจายทำดาเมจเยือกแข็งและผลักศัตรูกระเด็น',
          'Void Pull: เพิ่ม Stage 2 Event Horizon Collapse หลุมดำยุบตัวระเบิดดีดส่งศัตรูลอยเคว้งขึ้นฟ้า',
          'Poison Spores & Shulker: สปอร์แตกตัว 3 ลูกย่อยระเบิดซ้ำ และกระสุนชัลเกอร์ติดตาม 2 นัดซ้อน (Twin Homing)',
          'Nature\'s Bloom & Iron Armor: เพิ่ม Second Bloom ฮีลรอบสองพร้อมรากไม้ตวัดรัดศัตรู และเกราะเหล็กคลื่นกระแทกผลักศัตรู',
          'เพิ่มประสิทธิภาพฝั่งเซิร์ฟเวอร์ (Server Optimization): จำกัดอนุภาค คืนหน่วยความจำโปรเจกไทล์ และลดภาระ tick packet ป้องกันเซิร์ฟเวอร์แล็ก',
        ],
      },
      {
        version: '1.1.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2026-09-10',
        fileSize: '3.18 MB',
        downloadUrl: '/api/download?plugin=advance-magic&v=1.1.0',
        filename: 'advance-magic.jar',
        changelog: [
          'ระบบดื่ม Dragon\'s Breath เพิ่ม Max Mana (สูงสุด 300) และ Mana Regen วันละ 1 ครั้งในเกม (นอนข้ามคืนเพื่อเริ่มวันใหม่ได้ทันที)',
          'ระบบ Wand Mastery ยิ่งใช้คทา ยิ่งลดคูลดาวน์ (ลด 5s ทุกๆ 5 ครั้ง ผูกกับตัวคทา)',
          'บัฟดาเมจเวทมนตร์โจมตีทุกบทขึ้น 5 เท่า (Meteor 90 HP, Lightning 60 HP, Wither 40 HP)',
          'แก้ระบบล่องหน Invisibility Shroud ซ่อนชุดเกราะและไอเทมในมือสมบูรณ์แบบ 100%',
          'อัปเกรดเวทสายบัฟให้อลังการ: Nature\'s Bloom (Regen IV, Absorption V, ลบล้างดีบัฟ), Iron Armor (Resistance IV, สะท้อนดาเมจ 100%, กันไฟ)',
          'ขยายเวลาโดม Time Dilation เป็น 15 วินาที พร้อมบัฟความเร็วให้เพื่อนร่วมทีม',
        ],
      },
    ],
  },
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return PLUGINS.find((p) => p.slug === slug);
}

export function getAllPluginSlugs(): string[] {
  return PLUGINS.map((p) => p.slug);
}
