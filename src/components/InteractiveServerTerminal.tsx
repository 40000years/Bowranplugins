'use client';

import React, { useState } from 'react';
import { Copy, Check, Play, FileCode2, Terminal as TerminalIcon, Eye } from 'lucide-react';

const sampleConfig = `# Afterdeath v1.0.0 Configuration
version: 1.0.0
check-updates: true

death-mechanics:
  preserve-xp: false
  respawn-delay-ticks: 40
  custom-death-screen: true
  enable-void-passage: true

# Sound & Visual effects
effects:
  play-sound: "entity.wither.spawn"
  volume: 0.8
  particle: "SOUL_FIRE_FLAME"
  particle-count: 35

# Custom commands on death
death-commands:
  enabled: true
  execute-as-console:
    - "title %player% times 10 70 20"
    - "title %player% subtitle {\\"text\\":\\"Entering the Void...\\",\\"color\\":\\"dark_purple\\"}"
`;

export function InteractiveServerTerminal() {
  const [activeTab, setActiveTab] = useState<'console' | 'config' | 'chat'>('console');
  const [copied, setCopied] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[16:32:01 INFO] [Paper] Initializing Bowranplugins runtime...',
    '[16:32:01 INFO] [Afterdeath] Loaded 3 custom death sequences.',
    '[16:32:02 INFO] [Afterdeath] Enabled successfully (0.02ms startup).',
    '[16:32:02 INFO] [Voidscape] Loaded Void boundary listener.',
    '[16:32:02 INFO] [Voidscape] Registered Purpur world hooks.',
    '[16:32:03 INFO] [Server] Done (1.42s)! Server running at 20.0 TPS.',
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerEvent = () => {
    const timestamp = new Date().toLocaleTimeString();
    const newLogs = [
      `[${timestamp} INFO] [Event] Player 'Notch' fell into the Void!`,
      `[${timestamp} INFO] [Afterdeath] Intercepted death tick. Triggering Void sequence...`,
      `[${timestamp} INFO] [Voidscape] Custom gravity field applied. Teleporting to checkpoint.`,
    ];
    setLogs((prev) => [...prev, ...newLogs]);
  };

  return (
    <div className="server-console-window" role="region" aria-label="Interactive Server Preview">
      {/* Titlebar */}
      <div className="console-titlebar">
        <div className="console-dots">
          <span className="console-dot console-dot-red" />
          <span className="console-dot console-dot-yellow" />
          <span className="console-dot console-dot-green" />
        </div>

        <div className="console-tabs">
          <button
            type="button"
            className={`console-tab ${activeTab === 'console' ? 'active' : ''}`}
            onClick={() => setActiveTab('console')}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <TerminalIcon style={{ width: '0.75rem', height: '0.75rem' }} />
              server.log
            </span>
          </button>
          <button
            type="button"
            className={`console-tab ${activeTab === 'config' ? 'active' : ''}`}
            onClick={() => setActiveTab('config')}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <FileCode2 style={{ width: '0.75rem', height: '0.75rem' }} />
              config.yml
            </span>
          </button>
          <button
            type="button"
            className={`console-tab ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Eye style={{ width: '0.75rem', height: '0.75rem' }} />
              In-Game Chat
            </span>
          </button>
        </div>

        <div>
          {activeTab === 'config' ? (
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-sm"
              style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                background: 'var(--bg-card-hover)',
                color: 'var(--text-primary)',
              }}
            >
              {copied ? (
                <>
                  <Check style={{ width: '0.75rem', height: '0.75rem', color: 'var(--success)' }} />
                  Copied
                </>
              ) : (
                <>
                  <Copy style={{ width: '0.75rem', height: '0.75rem' }} />
                  Copy YAML
                </>
              )}
            </button>
          ) : activeTab === 'console' ? (
            <button
              type="button"
              onClick={handleTriggerEvent}
              className="btn btn-sm"
              title="Click to simulate a player death event"
              style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.55rem',
                background: 'var(--accent-glow-strong)',
                color: 'var(--accent)',
              }}
            >
              <Play style={{ width: '0.65rem', height: '0.65rem' }} />
              Simulate Event
            </button>
          ) : (
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Minecraft 1.21.x</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="console-body">
        {activeTab === 'console' && (
          <div>
            {logs.map((log, idx) => {
              const match = log.match(/^(\[\d{2}:\d{2}:\d{2}\])\s*(\[[^\]]+\])\s*(.*)$/);
              const time = match ? match[1] : '';
              const tag = match ? match[2] : '';
              const message = match ? match[3] : log;
              const isEvent = tag.includes('EVENT') || tag.includes('Event');

              return (
                <div key={idx} className="log-line" style={{ display: 'flex', gap: '0.45rem', alignItems: 'baseline', fontSize: '0.76rem', lineHeight: 1.5 }}>
                  <span className="log-time" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>{time}</span>
                  <span className={isEvent ? 'log-level-success' : 'log-level-info'} style={{ flexShrink: 0 }}>
                    {tag}
                  </span>
                  <span className="log-message" style={{ color: 'var(--text-secondary)' }}>{message}</span>
                </div>
              );
            })}
            <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--success)' }}>❯</span>
              <span className="cursor-blink">_</span>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <pre
            style={{
              margin: 0,
              fontFamily: 'inherit',
              fontSize: '0.78rem',
              lineHeight: 1.5,
              color: 'var(--text-primary)',
              whiteSpace: 'pre-wrap',
            }}
          >
            {sampleConfig}
          </pre>
        )}

        {activeTab === 'chat' && (
          <div className="mc-chat-container">
            <div className="mc-chat-line" style={{ color: '#aaa' }}>
              <span style={{ color: '#55ff55' }}>[Server]</span> System ready on Paper-Purpur build #128.
            </div>
            <div className="mc-chat-line" style={{ color: '#fff' }}>
              &lt;<span style={{ color: '#55ffff' }}>Steve</span>&gt; Who configured the death sequence on this server?
            </div>
            <div className="mc-chat-line" style={{ color: '#ff5555' }}>
              ☠ Notch succumbed to the Unknown (Afterdeath active)
            </div>
            <div className="mc-chat-line" style={{ color: '#aa00aa', fontStyle: 'italic' }}>
              ✦ The Void shifts beneath your feet... (Voidscape)
            </div>
            <div className="mc-chat-line" style={{ color: '#ffff55' }}>
              &lt;<span style={{ color: '#ffaa00' }}>ServerAdmin</span>&gt; Running Bowranplugins suite v1.0.0
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
