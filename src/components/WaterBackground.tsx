'use client';

import React, { useEffect, useRef } from 'react';

interface WavePoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

export function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      vx: 0,
      vy: 0,
      radius: 120,
      isMoving: false,
    };

    let mouseTimeout: NodeJS.Timeout;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = (mouse.x - mouse.prevX) * 0.5;
      mouse.vy = (mouse.y - mouse.prevY) * 0.5;
      mouse.isMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 100);
    };

    const spacing = 45;
    let points: WavePoint[] = [];

    const initGrid = () => {
      points = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * spacing;
          const py = y * spacing;
          points.push({
            x: px,
            y: py,
            originX: px,
            originY: py,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    initGrid();

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(26, 61, 99, 0.25)');
      gradient.addColorStop(1, 'rgba(10, 25, 49, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 4;
          p.vx -= (dx / dist) * force + mouse.vx * 0.2;
          p.vy -= (dy / dist) * force + mouse.vy * 0.2;
        }

        const idleWave = Math.sin(step + p.originX * 0.01 + p.originY * 0.01) * 0.8;
        p.vy += idleWave * 0.1;

        p.vx += (p.originX - p.x) * 0.05;
        p.vy += (p.originY - p.y) * 0.05;

        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;
      }

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(74, 127, 167, 0.08)';
      ctx.lineWidth = 1;

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const index = y * cols + x;
          const p = points[index];
          if (!p) continue;

          if (x < cols - 1) {
            const rightPoint = points[index + 1];
            if (rightPoint) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(rightPoint.x, rightPoint.y);
            }
          }

          if (y < rows - 1) {
            const bottomPoint = points[index + cols];
            if (bottomPoint) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(bottomPoint.x, bottomPoint.y);
            }
          }
        }
      }
      ctx.stroke();

      for (let i = 0; i < points.length; i += 3) {
        const p = points[i];
        const distToOrigin = Math.hypot(p.x - p.originX, p.y - p.originY);

        if (distToOrigin > 1) {
          const alpha = Math.min(distToOrigin / 15, 0.4);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(179, 207, 229, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}