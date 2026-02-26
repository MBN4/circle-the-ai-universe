import React from 'react';
import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1931] overflow-hidden"
    >
      {/* Improved Water Flowing Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-[-20%] bg-[radial-gradient(circle_at_50%_50%,#1e3a8a_0%,transparent_70%)] blur-[100px]"
        />
        <motion.div
          animate={{
            y: ["0%", "30%", "0%"],
            x: ["5%", "-5%", "5%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-[-20%] bg-[radial-gradient(circle_at_30%_70%,#3b82f6_0%,transparent_60%)] blur-[80px]"
        />
      </div>

      {/* Center Circle Animation - Single Circle */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#4a7fa7"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </svg>
          {/* Inner pulse */}
          <motion.div 
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white font-bold text-2xl tracking-[0.5em] ml-[0.5em]"
        >
          CIRCLE
        </motion.div>
      </div>
    </motion.div>
  );
}
