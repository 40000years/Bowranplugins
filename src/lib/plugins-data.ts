import { PluginData } from '@/types/plugin';

export const PLUGINS: PluginData[] = [
  {
    id: 'afterdeath',
    name: 'Afterdeath',
    slug: 'afterdeath',
    tagline: 'Death is no longer the end — rewind back to your final breath.',
    description:
      'ระบบนาฬิกาย้อนเวลากลับจุดเสียชีวิต (Death Clock) สำหรับเซิร์ฟเวอร์ Minecraft พร้อมรองรับการเชื่อมต่อทั้ง Java Edition และ Bedrock Edition ผ่าน Floodgate / Geyser.',
    longDescription:
      'Afterdeath transforms the death experience on your Minecraft server. Featuring the specialized Death Clock mechanism, players can preserve their coordinates and rewind time back to their last point of demise. Built from the ground up to support modern Paper and Purpur environments, with native cross-platform compatibility for both Java and Bedrock (via Floodgate/Geyser) players.',
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
        title: 'Death Clock System',
        description: 'เมื่อผู้เล่นเกิดใหม่จะได้รับ "นาฬิกาย้อนเวลา" เข้ามือทันที คลิกขวาเพื่อวาร์ปกลับจุดตาย (หมดเวลาใน 120 วิ, ใช้งานได้ 1 ครั้ง)',
      },
      {
        title: 'Geyser & Floodgate Cross-Play',
        description: 'รองรับการเชื่อมต่อข้ามแพลตฟอร์มทั้ง Java Edition และ Bedrock Edition (Android, iOS, Win10) อย่างสมบูรณ์',
      },
      {
        title: 'Platform Detection (/platform)',
        description: 'คำสั่งตรวจจับประเภทผู้เล่นและระบบปฏิบัติการ (Device OS) แบบเรียลไทม์',
      },
      {
        title: 'Lightweight (16 KB) Zero-Lag',
        description: 'คอมไพล์บน Paper API 26.2.build.121-stable ด้วย Java 21 ประหยัดทรัพยากรสูงสุด ไร้ผลกระทบต่อ TPS',
      },
      {
        title: 'Accurate World Coordinate Recall',
        description: 'บันทึกพิกัดโลก (World, X, Y, Z) ที่ผู้เล่นเสียชีวิตลงใน Lore ของไอเทมนาฬิกาโดยตรง',
      },
      {
        title: 'Plug & Play Architecture',
        description: 'ติดตั้งไฟล์ afterdeath.jar แล้วพร้อมใช้งานได้ทันที มี Soft-depend เชื่อมต่อกับ Floodgate อัตโนมัติ',
      },
    ],
    commands: [
      {
        command: '/deathclock',
        description: 'รับนาฬิกาย้อนเวลาไปยังจุดเสียชีวิตล่าสุด (สำหรับทดสอบระบบ)',
        permission: 'geyserexample.deathclock',
      },
      {
        command: '/platform',
        description: 'ตรวจสอบว่าผู้เล่นกำลังเล่นผ่าน Java หรือ Bedrock Edition (Geyser/Floodgate)',
        permission: 'geyserexample.platform',
      },
    ],
    permissions: [
      {
        node: 'geyserexample.platform',
        description: 'อนุญาตให้ตรวจสอบแพลตฟอร์มการเชื่อมต่อของตนเอง',
        default: 'true',
      },
      {
        node: 'geyserexample.deathclock',
        description: 'อนุญาตให้รับนาฬิกาย้อนเวลากลับจุดตาย (Death Clock)',
        default: 'op',
      },
    ],
    installation: [
      'Download afterdeath.jar from the download section below.',
      'Place afterdeath.jar into your server\'s /plugins/ directory.',
      '(Optional) Install Geyser & Floodgate if you wish to enable Bedrock cross-platform support.',
      'Start or restart your Paper/Purpur 26.2 server.',
      'Test functionality using /platform and /deathclock.',
    ],
    configuration:
      'Afterdeath works out of the box with zero required configuration. Fully integrates with Paper 26.2 and Floodgate.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-03',
        fileSize: '16 KB',
        downloadUrl: '/api/download?plugin=afterdeath',
        filename: 'afterdeath.jar',
        changelog: [
          'Official release v1.0.0 for Paper 26.2',
          'Death Clock mechanic: 120s timer & coordinate tracking',
          'Native Geyser/Floodgate Bedrock & Java platform detection (/platform)',
          'Java 21 optimized bytecode with adventure text components',
        ],
      },
    ],
  },
  {
    id: 'voidscape',
    name: 'Voidscape',
    slug: 'voidscape',
    tagline: 'Finite 3-Layer Void Dive & The Abyssal Warden',
    description:
      'Voidscape v1.5.0 - มิติ The Void ดิ่งลึก 3 ชั้นจำกัด (Finite 3-Layer Dive) & Thunder Spires บรรยากาศ Mod แท้ พร้อมบอส The Abyssal Warden และมอนสเตอร์ยักษ์.',
    longDescription:
      'Voidscape transforms the void beneath your world into a fully realized high-stakes dimension on Paper 26.2. Featuring Finite 3-Layer Dive mechanics, Bedrock portal activations at Y <= -59, and atmospheric Thunder Spires. Conquer the titan Abyssal Warden Boss (5,000 HP, 4.5x scale, gravity pull), hunt custom Void Leviathans & Abyssal Shades, and collect Voidic Crystals & Null Fruit. Engineered with 100% zero client lag rain/storm overrides.',
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
        title: 'Finite 3-Layer Void Dive',
        description: 'ระบบมิติดำดิ่ง 3 เลเยอร์ (โลก the_void) ผ่านประตูกล Bedrock Y: -59 สู่เกาะลอยฟ้า Y: 64 และลานประลอง Layer 3',
      },
      {
        title: '💀 The Abyssal Warden Boss',
        description: 'บอสยักษ์ไททันขนาด 4.5 เท่า (5,000 HP) สกิล 1-Hit Kill (ดาเมจ 2,000+) พร้อม Abyssal Gravity Pull ดึงผู้เล่นเข้าลานประลอง',
      },
      {
        title: 'Void Leviathan & Abyssal Shade',
        description: 'มอนสเตอร์ Void ยักษ์: พญาเงาเวหาทมิฬ (Giant Phantom HP 400), ภูตทมิฬกลืนวิญญาณ (Giant Vex HP 280), เงาแห่งความมืด (Shadow Stalker HP 200)',
      },
      {
        title: 'Void Infusion Health Reduction',
        description: 'ความกดดันแห่งความว่างเปล่า ค่อยๆ ลด Max Health ของผู้เล่นทีละ 1 หัวใจ (-2.0 HP) ทุกๆ 60 วินาที (ต่ำสุด 4.0 HP)',
      },
      {
        title: 'Voidic Crystals, Fruit & Shadow Blade',
        description: 'ไอเทม Voidic Crystal, Null Fruit, ดาบ Shadow Blade (สกิล Shadow Dash คูลดาวน์ 6 วินาที), และชุดเกราะ Voidic Armor Set',
      },
      {
        title: 'Zero Client Lag 100% Optimization',
        description: 'ปิดการเรนเดอร์ฝน/พายุในมิติ The Void ถาวร 100% ไร้ปัญหา Client Drop FPS พร้อมเอฟเฟกต์หมอก Darkness/Blindness',
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
        description: 'เสกหรือกำจัดบอส ราชันย์ก้นบึ้งทมิฬ (The Abyssal Warden 5000 HP)',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape spawn <phantom|vex|stalker>',
        description: 'เสกมอนสเตอร์ Void: พญาเงาเวหาทมิฬ, ภูตทมิฬกลืนวิญญาณ, เงาแห่งความมืด',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape give <crystal|fruit|blade|pocket|armor>',
        description: 'เสกไอเทมพิเศษ: Voidic Crystal, Null Fruit, Shadow Blade, Pocket Void, Voidic Armor',
        permission: 'voidscape.admin',
      },
      {
        command: '/voidscape reload',
        description: 'รีโหลดไฟล์คอนฟิก config.yml ของปลั๊กอิน Voidscape',
        permission: 'voidscape.admin',
      },
    ],
    permissions: [
      {
        node: 'voidscape.admin',
        description: 'สิทธิ์ผู้ดูแลระบบ Voidscape สำหรับทุกคำสั่ง',
        default: 'op',
      },
      {
        node: 'voidscape.bypass',
        description: 'ข้ามผลกระทบของเอฟเฟกต์ความกดดัน Void Infusion ใน The Void',
        default: 'op',
      },
    ],
    installation: [
      'Download voidscape.jar from the download section below.',
      'Place voidscape.jar into your server\'s /plugins/ folder.',
      'Restart your Paper 26.2 server completely.',
      'Configuration files are generated at /plugins/Voidscape/config.yml.',
      'Configure boss spawn, world island height, mob chances, and reload with /voidscape reload.',
    ],
    configuration:
      'Voidscape provides extensive YAML configuration for void dimensions, island heights, boss arena coordinates, mob health scales, and rewards.',
    versions: [
      {
        version: '1.5.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-03',
        fileSize: '75 KB',
        downloadUrl: '/api/download?plugin=voidscape',
        filename: 'voidscape.jar',
        changelog: [
          'Voidscape v1.5.0 release for Paper 26.2',
          'Finite 3-Layer Void Dive system with Bedrock Portal trigger (Y <= -59)',
          'The Abyssal Warden titan boss encounter (5,000 HP, 4.5x scale, gravity pull)',
          'Giant Phantom, Giant Vex & Shadow Stalker entity scaling and custom AI',
          'Shadow Blade with Shadow Dash skill & Voidic Armor Set',
          '100% Client Lag Fix: Disabled weather/rain in void dimension',
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
