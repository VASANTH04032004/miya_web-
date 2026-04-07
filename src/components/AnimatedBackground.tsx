import React, { useEffect, useRef, useCallback, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const LightningCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [flashOpacity, setFlashOpacity] = useState(0);

  const createBoltPath = useCallback((startX: number, startY: number, endX: number, endY: number, displacement: number): [number, number][] => {
    if (displacement < 4) {
      return [[startX, startY], [endX, endY]];
    }

    const midX = (startX + endX) / 2 + (Math.random() - 0.5) * displacement;
    const midY = (startY + endY) / 2 + (Math.random() - 0.5) * displacement * 0.5;

    const left = createBoltPath(startX, startY, midX, midY, displacement / 1.8);
    const right = createBoltPath(midX, midY, endX, endY, displacement / 1.8);

    return [...left, ...right.slice(1)];
  }, []);

  const drawGlowingBolt = useCallback((ctx: CanvasRenderingContext2D, points: [number, number][], width: number, color: string, glowColor: string, glowSize: number, alpha: number) => {
    if (points.length < 2) return;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Outer aura (wide soft glow)
    ctx.shadowBlur = glowSize * 3;
    ctx.shadowColor = glowColor;
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = width * 4;
    ctx.globalAlpha = alpha * 0.15;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();

    // Mid glow
    ctx.shadowBlur = glowSize * 1.5;
    ctx.shadowColor = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = width * 2;
    ctx.globalAlpha = alpha * 0.4;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();

    // Core bright line
    ctx.shadowBlur = glowSize;
    ctx.shadowColor = '#e9d5ff';
    ctx.strokeStyle = '#e9d5ff';
    ctx.lineWidth = width;
    ctx.globalAlpha = alpha * 0.9;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();

    // Ultra-bright center
    ctx.shadowBlur = glowSize * 0.5;
    ctx.shadowColor = '#ffffff';
    ctx.strokeStyle = '#f3e8ff';
    ctx.lineWidth = width * 0.4;
    ctx.globalAlpha = alpha * 0.7;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i][0], points[i][1]);
    }
    ctx.stroke();

    ctx.restore();
  }, []);

  const triggerLightning = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const boltCount = 1 + Math.floor(Math.random() * 2);

    for (let b = 0; b < boltCount; b++) {
      const startX = canvas.width * (0.15 + Math.random() * 0.7);
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = canvas.height * (0.4 + Math.random() * 0.5);

      // Main bolt
      const mainPath = createBoltPath(startX, -10, endX, endY, 140);
      drawGlowingBolt(ctx, mainPath, 2.5, '#a855f7', '#7c3aed', 30, 1);

      // 2-4 branches
      const branchCount = 2 + Math.floor(Math.random() * 3);
      for (let br = 0; br < branchCount; br++) {
        const branchIndex = Math.floor(mainPath.length * (0.2 + Math.random() * 0.5));
        if (branchIndex >= mainPath.length) continue;

        const brStart = mainPath[branchIndex];
        const brEndX = brStart[0] + (Math.random() - 0.5) * 250;
        const brEndY = brStart[1] + 50 + Math.random() * 150;
        const branchPath = createBoltPath(brStart[0], brStart[1], brEndX, brEndY, 60);
        drawGlowingBolt(ctx, branchPath, 1.5, '#c084fc', '#9333ea', 20, 0.6);

        // Sub-branches
        if (Math.random() < 0.5 && branchPath.length > 3) {
          const subIdx = Math.floor(branchPath.length * 0.5);
          const subStart = branchPath[subIdx];
          const subPath = createBoltPath(subStart[0], subStart[1], subStart[0] + (Math.random() - 0.5) * 120, subStart[1] + 30 + Math.random() * 80, 30);
          drawGlowingBolt(ctx, subPath, 1, '#d8b4fe', '#a855f7', 12, 0.35);
        }
      }

      // Impact glow at end point
      const gradient = ctx.createRadialGradient(endX, endY, 0, endX, endY, 80);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.3)');
      gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.1)');
      gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(endX - 80, endY - 80, 160, 160);
    }

    // Screen flash sequence
    setFlashOpacity(0.08);
    setTimeout(() => setFlashOpacity(0.03), 50);
    setTimeout(() => setFlashOpacity(0.06), 100);
    setTimeout(() => setFlashOpacity(0.02), 150);
    setTimeout(() => setFlashOpacity(0), 250);

    // Fade out bolt
    let fadeAlpha = 1;
    const fadeInterval = setInterval(() => {
      fadeAlpha -= 0.12;
      if (fadeAlpha <= 0) {
        clearInterval(fadeInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.globalAlpha = fadeAlpha;
    }, 20);

    setTimeout(() => {
      clearInterval(fadeInterval);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 300);

  }, [createBoltPath, drawGlowingBolt]);

  useEffect(() => {
    const scheduleNext = () => {
      const delay = 2500 + Math.random() * 6000;
      return setTimeout(() => {
        triggerLightning();
        // Double-strike chance
        if (Math.random() < 0.45) {
          setTimeout(triggerLightning, 80 + Math.random() * 150);
        }
        timerId = scheduleNext();
      }, delay);
    };
    let timerId = scheduleNext();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', handleResize);
    };
  }, [triggerLightning]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-20 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* Neon purple screen flash */}
      <div
        className="fixed inset-0 z-20 pointer-events-none"
        style={{
          backgroundColor: `rgba(147, 51, 234, ${flashOpacity})`,
          transition: 'background-color 60ms ease-out',
        }}
      />
    </>
  );
};

// Ambient electric arcs — small constant sparks
const AmbientSparks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animId: number;

    interface Spark {
      x: number;
      y: number;
      life: number;
      maxLife: number;
      size: number;
      vx: number;
      vy: number;
    }

    const sparks: Spark[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new sparks randomly
      if (Math.random() < 0.08) {
        sparks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          life: 0,
          maxLife: 30 + Math.random() * 40,
          size: 1 + Math.random() * 2,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;

        if (s.life >= s.maxLife) {
          sparks.splice(i, 1);
          continue;
        }

        const progress = s.life / s.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#a855f7';
        ctx.fillStyle = '#c084fc';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[15] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-void-950 bg-mesh-gradient animate-mesh overflow-hidden pb-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: 'transparent' },
          particles: {
            color: { value: ['#a855f7', '#7c3aed', '#c084fc'] },
            links: {
              color: '#a855f7',
              distance: 150,
              enable: true,
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 30,
            },
            opacity: { value: 0.15 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Purple ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-raiden-500/8 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0 pointer-events-none gpu-accelerate"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-raiden-700/8 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 z-0 pointer-events-none gpu-accelerate"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-raiden-400/6 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000 z-0 pointer-events-none gpu-accelerate"></div>

      {/* Lightning systems */}
      <AmbientSparks />
      <LightningCanvas />

      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
