import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function MouseFollower() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springX = useSpring(0, { stiffness: 100, damping: 30 });
  const springY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(74, 127, 167, 0.15), transparent 80%)`,
      }}
      animate={{
        '--x': `${springX.get()}px`,
        '--y': `${springY.get()}px`,
      } as any}
    />
  );
}
