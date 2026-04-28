import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'ail_progress';

interface ProgressData {
  completedSections: Record<string, boolean>;
  completedAt: Record<string, string>;
}

const loadProgress = (): ProgressData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        completedSections: parsed.completedSections || {},
        completedAt: parsed.completedAt || {},
      };
    }
  } catch {
    // ignore parse errors
  }
  return { completedSections: {}, completedAt: {} };
};

const saveProgress = (data: ProgressData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
};

/**
 * Custom hook for tracking chapter progress via localStorage.
 * Tracks completed sections per chapter.
 * Key format: 'ail_progress'
 *
 * Returns: { completedSections, markComplete, getChapterProgress, resetProgress }
 */
export const useChapterProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  // Sync across tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setProgress(loadProgress());
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const { completedSections, completedAt } = progress;

  /**
   * Mark a section as complete (or toggle it off).
   * @param chapterNumber - chapter number
   * @param sectionId - section id
   */
  const markComplete = useCallback(
    (chapterNumber: number, sectionId: number) => {
      setProgress(prev => {
        const key = `${chapterNumber}-${sectionId}`;
        const nextSections = { ...prev.completedSections };
        const nextAt = { ...prev.completedAt };

        if (nextSections[key]) {
          delete nextSections[key];
          delete nextAt[key];
        } else {
          nextSections[key] = true;
          nextAt[key] = new Date().toISOString();
        }

        const next: ProgressData = {
          completedSections: nextSections,
          completedAt: nextAt,
        };
        saveProgress(next);
        return next;
      });
    },
    [],
  );

  /**
   * Get chapter progress as a percentage (0-100).
   * @param chapterNumber - chapter number
   * @param totalSections - total number of sections in the chapter (default 3)
   */
  const getChapterProgress = useCallback(
    (chapterNumber: number, totalSections: number = 3): number => {
      const prefix = `${chapterNumber}-`;
      const completedCount = Object.keys(completedSections).filter(
        key => key.startsWith(prefix) && completedSections[key],
      ).length;

      if (totalSections <= 0) return 0;
      return Math.min(100, Math.round((completedCount / totalSections) * 100));
    },
    [completedSections],
  );

  /**
   * Reset all progress data.
   */
  const resetProgress = useCallback(() => {
    const empty: ProgressData = { completedSections: {}, completedAt: {} };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  return {
    completedSections,
    completedAt,
    markComplete,
    getChapterProgress,
    resetProgress,
  };
};

export default useChapterProgress;
