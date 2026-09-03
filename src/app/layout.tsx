import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CraftVault - Minecraft Plugins Downloader Hub',
  description: 'Download verified high-performance Minecraft plugins for Paper, Spigot, Purpur, Velocity, and BungeeCord servers.',
  keywords: ['minecraft plugins', 'download minecraft plugins', 'spigot plugins', 'paper plugins', 'essentialsx', 'luckperms', 'worldedit', 'geysermc'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
