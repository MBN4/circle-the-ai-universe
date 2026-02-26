import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export function GlassCard({ children, className, tilt = false, ...props }: GlassCardProps) {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        "glass dark:glass-dark rounded-3xl p-6 relative overflow-hidden group",
        tilt && "perspective-1000",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
