'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isPro: boolean;
  upgradeToPro: () => void;
  downgradeToFree: () => void;
  isProModalOpen: boolean;
  openProModal: () => void;
  closeProModal: () => void;
  isEli5: boolean;
  toggleEli5: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isPro, setIsPro] = useState(false);
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isEli5, setIsEli5] = useState(false);

  useEffect(() => {
    try {
      const storedPro = localStorage.getItem('circle_pro_user');
      if (storedPro) setIsPro(JSON.parse(storedPro));

      const storedEli5 = localStorage.getItem('circle_eli5_mode');
      if (storedEli5) setIsEli5(JSON.parse(storedEli5));
    } catch {}
  }, []);

  const upgradeToPro = () => {
    setIsPro(true);
    localStorage.setItem('circle_pro_user', JSON.stringify(true));
    setIsProModalOpen(false);
  };

  const downgradeToFree = () => {
    setIsPro(false);
    localStorage.setItem('circle_pro_user', JSON.stringify(false));
  };

  const toggleEli5 = () => {
    setIsEli5((prev) => {
      const next = !prev;
      localStorage.setItem('circle_eli5_mode', JSON.stringify(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isPro,
        upgradeToPro,
        downgradeToFree,
        isProModalOpen,
        openProModal: () => setIsProModalOpen(true),
        closeProModal: () => setIsProModalOpen(false),
        isEli5,
        toggleEli5,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}