import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bowranplugins — Minecraft Plugins from the Edge of the Void (Paper 26.2)',
  description:
    'Official repository for Bowranplugins on Paper 26.2 (Java 21). Download Afterdeath, Voidscape, AdvancedCombat, AntiFreecam, and NightVisionToggle.',
  keywords: [
    'minecraft plugins',
    'bowranplugins',
    'afterdeath',
    'voidscape',
    'advancedcombat',
    'antifreecam',
    'nightvision',
    'paper 26.2',
    'paper plugins',
    'geyser',
    'floodgate',
    'minecraft server',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
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
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
