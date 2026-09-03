import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bowranplugins — Minecraft Plugins from the Edge of the Void',
  description: 'Powerful Minecraft plugins designed to transform your server. Download Afterdeath, Voidscape, and more from Bowranplugins.',
  keywords: ['minecraft plugins', 'bowranplugins', 'afterdeath', 'voidscape', 'paper plugins', 'spigot plugins', 'minecraft server'],
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
