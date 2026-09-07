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
    tagline: 'มิติ The Void ใต้โลก พร้อมเกาะลอยฟ้าและบอส',
    description:
      'เปลี่ยนใต้โลกที่ตกลงไปแล้วตาย ให้กลายเป็นมิติ The Void มีเกาะลอยฟ้า มอนสเตอร์ และบอสประจำมิติ',
    longDescription:
      'ปลั๊กอินมิติ The Void เมื่อผู้เล่นตกลงไปใต้โลกหรือผ่านประตูกล Bedrock จะถูกส่งไปยังมิติ The Void ที่มีเกาะลอยฟ้า มอนสเตอร์พิเศษ และบอสประจำมิติ เหมาะสำหรับจัดกิจกรรมหรือเพิ่มความท้าทายในเซิร์ฟเวอร์',
    accentColor: '#3b82f6',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    gradientFrom: '#0a1628',
    gradientTo: '#08080f',
    author: 'Bowran',
    category: 'World & Dimension',
    tags: ['The Void', 'Dimension', 'Boss', 'Mobs', 'Custom Items'],
    platforms: ['Paper', 'Spigot', 'Purpur'],
    testedVersions: ['26.2'],
    sourceUrl: 'https://github.com/40000years',
    features: [
      {
        title: 'มิติ The Void',
        description: 'วาร์ปเข้าสู่โลก The Void เมื่อตกทะลุใต้โลกหรือยืนบน Bedrock',
      },
      {
        title: 'บอสและมอนสเตอร์',
        description: 'มีบอส Abyssal Warden และมอนสเตอร์พิเศษประจำมิติ',
      },
      {
        title: 'ไอเทมและอาวุธใหม่',
        description: 'ดรอปแร่ Voidic Crystal, ผลไม้ Null Fruit และดาบ Shadow Blade',
      },
      {
        title: 'ปิดฝนลดอาการแลค',
        description: 'ปิดสภาพอากาศฝนและพายุในมิติ The Void ไม่กินสเปกเครื่องผู้เล่น',
      },
    ],
    commands: [
      {
        command: '/voidscape tp',
        description: 'วาร์ปเข้าสู่โลกมิติ The Void (the_void)',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape boss <spawn|kill>',
        description: 'เสกหรือกำจัดบอส The Abyssal Warden',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape spawn <mob>',
        description: 'เสกมอนสเตอร์ประจำมิติ Void',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape give <item>',
        description: 'เสกไอเทมพิเศษของ Voidscape',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape reload',
        description: 'รีโหลดไฟล์ตั้งค่า config.yml',
        permission: 'voidscape.admin',
      },
    ],
    permissions: [
      {
        node: 'voidscape.admin',
        description: 'สิทธิ์ผู้ดูแลระบบสำหรับคำสั่ง Voidscape ทั้งหมด',
        default: 'op',
      },
      {
        node: 'voidscape.bypass',
        description: 'ไม่ได้รับผลกระทบจากความกดดันใน The Void',
        default: 'op',
      },
    ],
    installation: [
      'ดาวน์โหลดไฟล์ voidscape.jar จากปุ่มด้านล่าง',
      'นำไฟล์ไปวางในโฟลเดอร์ /plugins/ ของเซิร์ฟเวอร์',
      'รีสตาร์ทเซิร์ฟเวอร์ Paper 26.2',
      'สามารถปรับแต่งค่าต่างๆ ได้ที่ /plugins/Voidscape/config.yml',
    ],
    configuration:
      'สามารถปรับแต่งเลือดบอส อัตราการดรอปไอเทม และพิกัดต่างๆ ได้ในไฟล์ config.yml',
    versions: [
      {
        version: '1.5.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '70 KB',
        downloadUrl: '/api/download?plugin=voidscape',
        filename: 'voidscape.jar',
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
];

export function getPluginBySlug(slug: string): PluginData | undefined {
  return PLUGINS.find((p) => p.slug === slug);
}

export function getAllPluginSlugs(): string[] {
  return PLUGINS.map((p) => p.slug);
}
