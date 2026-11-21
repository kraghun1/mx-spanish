const STORAGE_KEY = 'mexico-spanish-progress'

export type Progress = {
  correct: number
  attempted: number
  bestStreak: number
}

const defaultProgress: Progress = {
  correct: 0,
  attempted: 0,
  bestStreak: 0,
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultProgress }
    const parsed = JSON.parse(raw) as Partial<Progress>
    return {
      correct: Number(parsed.correct) || 0,
      attempted: Number(parsed.attempted) || 0,
      bestStreak: Number(parsed.bestStreak) || 0,
    }
  } catch {
    return { ...defaultProgress }
  }
}

export function saveProgress(progress: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function recordAnswer(
  progress: Progress,
  wasCorrect: boolean,
  currentStreak: number,
): Progress {
  const next: Progress = {
    correct: progress.correct + (wasCorrect ? 1 : 0),
    attempted: progress.attempted + 1,
    bestStreak: Math.max(progress.bestStreak, currentStreak),
  }
  saveProgress(next)
  return next
}
