'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AI_TOOLS, AITool } from '@/lib/data';

interface StackContextType {
  savedIds: number[];
  toggleSave: (id: number) => void;
  isSaved: (id: number) => boolean;
  upvotes: Record<number, number>;
  upvoteTool: (id: number) => void;
  savedTools: AITool[];
}

const StackContext = createContext<StackContextType | undefined>(undefined);

export function StackProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [upvotes, setUpvotes] = useState<Record<number, number>>({});

  useEffect(() => {
    try {
      const storedSaved = localStorage.getItem('circle_saved_tools');
      if (storedSaved) setSavedIds(JSON.parse(storedSaved));

      const storedUpvotes = localStorage.getItem('circle_upvotes');
      if (storedUpvotes) {
        setUpvotes(JSON.parse(storedUpvotes));
      } else {
        const initial: Record<number, number> = {};
        AI_TOOLS.forEach((tool) => {
          initial[tool.id] = tool.upvotes;
        });
        setUpvotes(initial);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const toggleSave = (id: number) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('circle_saved_tools', JSON.stringify(next));
      return next;
    });
  };

  const isSaved = (id: number) => savedIds.includes(id);

  const upvoteTool = (id: number) => {
    setUpvotes((prev) => {
      const current = prev[id] || 0;
      const next = { ...prev, [id]: current + 1 };
      localStorage.setItem('circle_upvotes', JSON.stringify(next));
      return next;
    });
  };

  const savedTools = AI_TOOLS.filter((tool) => savedIds.includes(tool.id));

  return (
    <StackContext.Provider value={{ savedIds, toggleSave, isSaved, upvotes, upvoteTool, savedTools }}>
      {children}
    </StackContext.Provider>
  );
}

export function useStack() {
  const context = useContext(StackContext);
  if (!context) throw new Error('useStack must be used within StackProvider');
  return context;
}