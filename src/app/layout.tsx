import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bowranplugins — รวมปลั๊กอิน Minecraft (Paper / Spigot)',
  description:
    'เว็บรวมปลั๊กอิน Minecraft สำหรับเซิร์ฟเวอร์ Paper และ Purpur ดาวน์โหลดไฟล์ .jar ไปใช้งานได้ทันที',
  keywords: [
    'minecraft plugins',
    'ปลั๊กอิน minecraft',
    'bowranplugins',
    'afterdeath',
    'evergarden',
    'voidscape',
    'advancedcombat',
    'antifreecam',
    'nightvision',
    'advancemagic',
    'advance-magic',
    'paper 26.2',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('bowranplugins-theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body><ThemeProvider><Navbar />{children}<Footer /></ThemeProvider></body>
    </html>
  );
}
