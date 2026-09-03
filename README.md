# 📦 CraftVault - Minecraft Plugin Downloader WebApp

CraftVault is a modern, high-performance web application designed for discovering and downloading verified Minecraft server plugins (Paper, Spigot, Purpur, Velocity, BungeeCord). Built with **Next.js 14 App Router** and **TypeScript**, it is 100% ready for instant deployment on **Vercel**.

---

## 🌟 Key Features

- ⚡ **Next.js 14 App Router & TypeScript**: Production-grade stability and type safety.
- 🎨 **Minecraft Cyber-Dark Aesthetic**: Emerald / Obsidian dark theme with glassmorphism UI.
- 🔍 **Real-time Search & Multi-Filter**: Filter plugins by category, server platform, and Minecraft version.
- 📦 **Direct .JAR Download API**: Integrated Next.js Serverless API Route (`/api/download`) handling plugin downloads.
- 🛡️ **Verified Metadata & Guides**: Step-by-step installation guides, dependencies, and version changelogs.
- 🚀 **Vercel Zero-Config Ready**: Fully optimized for Vercel deployment with built-in API proxy routes.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🚀 Deploying to Vercel

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Minecraft Plugin Downloader"
   git remote add origin https://github.com/YOUR_USERNAME/minecraft-plugin-downloader.git
   git push -u origin main
   ```

2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Select your GitHub repository and click **Deploy**. Vercel will automatically detect Next.js and build your application!
