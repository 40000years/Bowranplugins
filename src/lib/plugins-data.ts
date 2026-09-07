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
        fileSize: '13 KB',
        downloadUrl: '/api/download?plugin=afterdeath',
        filename: 'afterdeath.jar',
        changelog: [
          'Latest build update: Bytecode optimization & performance tuning (13 KB)',
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
        releaseDate: '2024-09-07',
        fileSize: '70 KB',
        downloadUrl: '/api/download?plugin=voidscape',
        filename: 'voidscape.jar',
        changelog: [
          'Latest build update: Memory optimizations & boss entity tuning (70 KB)',
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
  {
    id: 'advanced-combat',
    name: 'AdvancedCombat',
    slug: 'advanced-combat',
    tagline: 'Bedrock & Vanilla Combat Parity for Paper & Geyser',
    description:
      'ระบบความสมดุลการต่อสู้ (Combat Parity) รองรับ Java & Bedrock Edition — ปลดล็อก Mace Smash, การฟันกวาด Sweep Attack ของดาบสำหรับ Bedrock และระบบ Axe Shield Stun.',
    longDescription:
      'AdvancedCombat bridges the gap between Java and Bedrock combat mechanics on Paper 26.2 servers with Geyser and Floodgate. Enjoy authentic Mace Smash attack physics, Java-style Sweep Attacks for Bedrock Edition players, and realistic Axe Shield Stun disable effects (5-second shield penalty). Designed with zero latency overhead and native Floodgate API hooks.',
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
        title: 'Mace Smash Attack Physics',
        description: 'จำลองแรงกระแทกและดาเมจตกจากที่สูงของกระบอง Mace ให้สมบูรณ์แบบข้ามแพลตฟอร์มทั้ง Java และ Bedrock',
      },
      {
        title: 'Bedrock Sweep Attack Parity',
        description: 'ผู้เล่น Bedrock สามารถใช้การฟันกวาดคลื่นพลังดาบ (Sweep Attack) โดนมอนสเตอร์รอบข้างเหมือนฝั่ง Java 100%',
      },
      {
        title: 'Axe Shield Stun Penalty',
        description: 'เมื่อใช้ขวานโจมตีใส่เป้าหมายที่กำลังบล็อกด้วยโล่ โล่จะถูก Disable ปลดการป้องกันทันทีเป็นเวลา 5 วินาที พร้อมเสียงกระแทก',
      },
      {
        title: 'Native Floodgate Hook',
        description: 'ตรวจสอบประเภทผู้เล่น Java/Bedrock แบบไดนามิกผ่าน Floodgate API โดยไม่กระทบการต่อสู้ดั้งเดิมของฝั่ง Java',
      },
      {
        title: 'Lightweight & Zero TPS Drop',
        description: 'ขนาดไฟล์เพียง 15 KB ทำงานระดับ Event Listener น้ำหนักเบา ไม่สร้าง Packet ขยะบนเซิร์ฟเวอร์',
      },
    ],
    commands: [
      {
        command: '/advancedcombat',
        description: 'คำสั่งจัดการปลั๊กอิน AdvancedCombat (usage: /advancedcombat [reload])',
        permission: 'advancedcombat.admin',
      },
    ],
    permissions: [
      {
        node: 'advancedcombat.admin',
        description: 'อนุญาตให้ใช้คำสั่งรีโหลดและจัดการปลั๊กอิน AdvancedCombat',
        default: 'op',
      },
    ],
    installation: [
      'Download advanced-combat.jar from the download section below.',
      'Place advanced-combat.jar into your server\'s /plugins/ folder.',
      '(Optional) Ensure Floodgate is installed for Bedrock client detection.',
      'Restart your Paper 26.2 server.',
      'Configure options in /plugins/AdvancedCombat/config.yml if needed.',
    ],
    configuration:
      'AdvancedCombat comes with an easy-to-use config.yml allowing server owners to customize stun duration, sweep damage multipliers, and sound effects.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '15 KB',
        downloadUrl: '/api/download?plugin=advanced-combat',
        filename: 'advanced-combat.jar',
        changelog: [
          'Official release v1.0.0 for Paper 26.2',
          'Mace Smash fall-distance damage scaling & kinetic particles',
          'Bedrock Sweep Attack listener & sweep particle FX',
          'Axe Shield Stun: 5s cooldown disabling mechanic',
          'Full Floodgate API integration',
        ],
      },
    ],
  },
  {
    id: 'anti-freecam',
    name: 'AntiFreecam',
    slug: 'anti-freecam',
    tagline: 'Silent Container & Valuable Masking against Freecam',
    description:
      'ระบบปกป้องกล่องสมบัติและแร่มีค่าจากโมด Freecam & Spectator Hacks — บล็อกการมองเห็นและซ่อนไอเทมในหีบสไตล์ Paper Anti-Xray ไร้เสียงรบกวน.',
    longDescription:
      'AntiFreecam prevents illegitimate wall-peeking and container scanning by Freecam, Tweakeroo, and ReplayMod clients. Utilizing server-side Line-of-Sight (LoS) Raycasting and Silent Container Masking, contents of chests, shulker boxes, and rare ores remain completely concealed until players are within legitimate physical proximity and view.',
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
        title: 'Silent Container Masking',
        description: 'กล่องและ Shulker Box จะไม่ส่ง Packet รายการไอเทมให้ Client จนกว่าจะคลิกเปิดกล่องจริง',
      },
      {
        title: 'Line-of-Sight Raycasting',
        description: 'คำนวณเส้นสายตาจากตำแหน่งหัวของตัวละครจริง หากมุมมอง Freecam ลอยทะลุกำแพง จะถูกบล็อกการเรนเดอร์',
      },
      {
        title: 'Ghost Camera Prevention',
        description: 'ตรวจจับแพ็กเก็ตพิกัดผิดปกติและตัดการเชื่อมโยงข้อมูลบล็อกที่เป็นความลับโดยอัตโนมัติ',
      },
      {
        title: 'Asynchronous Thread Safety',
        description: 'คำนวณเรย์แคสต์บน Asynchronous Worker Thread ไร้ผลกระทบต่อ TPS 20.0 แม้มีผู้เล่นออนไลน์จำนวนมาก',
      },
    ],
    commands: [
      {
        command: '/antifreecam',
        description: 'คำสั่งจัดการระบบ AntiFreecam (usage: /antifreecam [reload])',
        permission: 'antifreecam.admin',
      },
    ],
    permissions: [
      {
        node: 'antifreecam.admin',
        description: 'สิทธิ์ผู้ดูแลระบบสำหรับคำสั่งรีโหลดและตั้งค่า AntiFreecam',
        default: 'op',
      },
    ],
    installation: [
      'Download anti-freecam.jar from the download section below.',
      'Place anti-freecam.jar into your server\'s /plugins/ directory.',
      'Restart your Paper/Purpur 26.2 server.',
      'No extra configuration required — works silently out of the box.',
    ],
    configuration:
      'Configuration options allow administrators to tune raycast tolerance, masked block types, and log levels in /plugins/AntiFreecam/config.yml.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '12 KB',
        downloadUrl: '/api/download?plugin=anti-freecam',
        filename: 'anti-freecam.jar',
        changelog: [
          'Official release v1.0.0 for Paper 26.2',
          'Silent container packet withholding engine',
          'Line-of-sight raycasting anti-wallpeek algorithm',
          'Asynchronous multi-threaded verification',
        ],
      },
    ],
  },
  {
    id: 'nightvision-toggle',
    name: 'NightVisionToggle',
    slug: 'nightvision-toggle',
    tagline: 'Infinite Night Vision Toggle with Persistent State',
    description:
      'คำสั่งเปิด-ปิดการมองเห็นในความมืดแบบไร้ขีดจำกัด (/nv, /nightvision) — คงสถานะความสว่างต่อเนื่องแม้ตาย ย้ายโลก หรือ Reconnect ประหยัดสเปก ไร้แสงกะพริบ.',
    longDescription:
      'NightVisionToggle gives server players and builders smooth, unlimited night vision with persistent state tracking. Unlike standard potion commands that expire on death or world transitions, NightVisionToggle remembers each player\'s preference across sessions and respawns, completely eliminating visual flicker and server tick overhead.',
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
        title: 'Persistent State Retention',
        description: 'จดจำสถานะเปิด/ปิดของผู้เล่นไว้ในฐานข้อมูล ปลั๊กอินจะคืนสถานะให้ทันทีหลังเกิดใหม่หรือย้ายเซิร์ฟเวอร์',
      },
      {
        title: 'Zero Flicker Transition',
        description: 'ปรับใช้ PotionEffect Ambient แบบไร้อนุภาคกวนสายตา ไร้อาการภาพกะพริบตอนเอฟเฟกต์ใกล้หมด',
      },
      {
        title: 'Intuitive Command Aliases',
        description: 'รองรับคำสั่งรวดเร็ว /nv, /nightvision พร้อมซับคอมมานด์ on, off, toggle, status',
      },
      {
        title: 'Paper 26.2 Native API',
        description: 'ขนาดไฟล์เพียง 11 KB รันบน Paper API รุ่นล่าสุด ใช้ CPU ต่ำกว่า 0.001% ของเซิร์ฟเวอร์',
      },
    ],
    commands: [
      {
        command: '/nv',
        description: 'เปิดหรือปิดการมองเห็นในความมืด (usage: /nv [on|off|toggle|status|reload])',
        permission: 'nightvision.use',
      },
      {
        command: '/nightvision',
        description: 'คำสั่งเต็มสำหรับเปิดหรือปิด Night Vision (alias ของ /nv)',
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
        description: 'อนุญาตให้ใช้คำสั่งรีโหลดคอนฟิกของปลั๊กอิน NightVisionToggle',
        default: 'op',
      },
    ],
    installation: [
      'Download nightvision-toggle.jar from the download section below.',
      'Place nightvision-toggle.jar into your server\'s /plugins/ folder.',
      'Restart your Paper 26.2 server.',
      'Grant the nightvision.use permission to player groups.',
      'Players can now type /nv to toggle night vision freely.',
    ],
    configuration:
      'NightVisionToggle creates config.yml with configurable messages, default states, particle visibility, and sound toggles.',
    versions: [
      {
        version: '1.0.0',
        minecraftVersions: ['26.2'],
        releaseDate: '2024-09-07',
        fileSize: '11 KB',
        downloadUrl: '/api/download?plugin=nightvision-toggle',
        filename: 'nightvision-toggle.jar',
        changelog: [
          'Official release v1.0.0 for Paper 26.2',
          'Persistent player night vision tracking across deaths & relogs',
          'Subcommands: /nv [on|off|toggle|status|reload]',
          'Zero-particle ambient night vision effect',
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
