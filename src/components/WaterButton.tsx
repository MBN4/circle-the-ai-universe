import React from 'react';
import { cn } from '../lib/utils';

interface WaterButtonProps {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export function WaterButton({ variant = 'primary', children, className, ...props }: WaterButtonProps) {
  return (
    <button
      className={cn(
        "relative px-8 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 overflow-hidden group",
        variant === 'primary' 
          ? "bg-dark-accent text-white shadow-lg shadow-dark-accent/20" 
          : "glass dark:glass-dark dark:text-white",
        className
      )}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      {/* Water flow effect layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-wave" />
      </div>
    </button>
  );
}
