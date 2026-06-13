/**
 * 게임 상태 + 진행도를 localStorage에 저장하는 단일 스토어.
 * SSR에서는 import되어도 side-effect 없음.
 */

export type QuizType = 'mcq' | 'fill';

export interface Question {
  id: string;
  type: QuizType;
  chapter: string;
  prompt: string;
  /** MCQ */
  choices?: string[];
  answer?: number;
  /** fill */
  blanks?: { placeholder: string; answer: string[]; hint?: string }[];
  explanation: string;
  xp: number;
}

export interface AnsweredRecord {
  questionId: string;
  correct: boolean;
  xp: number;
  at: number;
  userGuess?: string[];
}

export interface StreakState {
  current: number;
  best: number;
  lastDay: string | null;
}

export interface State {
  xp: number;
  streak: StreakState;
  answered: Record<string, AnsweredRecord>;
  badges: string[];
}

const KEY = 'jbs:state';

const today = (): string => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const yesterday = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const defaultState = (): State => ({
  xp: 0,
  streak: { current: 0, best: 0, lastDay: null },
  answered: {},
  badges: [],
});

export const load = (): State => {
  if (typeof localStorage === 'undefined') return defaultState();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      ...defaultState(),
      ...parsed,
      streak: { ...defaultState().streak, ...(parsed.streak ?? {}) },
    };
  } catch {
    return defaultState();
  }
};

export const save = (s: State): void => {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(s));
};

export const recordAnswer = (
  q: Question,
  correct: boolean,
  userGuess?: string[]
): { state: State; xpDelta: number; isFirstToday: boolean } => {
  const state = load();
  const prev = state.answered[q.id];
  if (prev?.correct) {
    return { state, xpDelta: 0, isFirstToday: state.streak.lastDay === today() };
  }
  const xpDelta = correct ? q.xp : Math.floor(q.xp * 0.2);
  state.xp = Math.max(0, state.xp + xpDelta);
  state.answered[q.id] = {
    questionId: q.id,
    correct,
    xp: xpDelta,
    at: Date.now(),
    userGuess,
  };

  const t = today();
  if (correct && state.streak.lastDay !== t) {
    if (state.streak.lastDay === yesterday()) {
      state.streak.current += 1;
    } else {
      state.streak.current = 1;
    }
    state.streak.best = Math.max(state.streak.best, state.streak.current);
    state.streak.lastDay = t;
  }

  const total = Object.values(state.answered).filter((a) => a.correct).length;
  const newBadges: string[] = [];
  if (total >= 1 && !state.badges.includes('first-correct')) newBadges.push('first-correct');
  if (total >= 5 && !state.badges.includes('five-correct')) newBadges.push('five-correct');
  if (state.streak.current >= 3 && !state.badges.includes('streak-3')) newBadges.push('streak-3');
  if (state.streak.current >= 7 && !state.badges.includes('streak-7')) newBadges.push('streak-7');
  state.badges.push(...newBadges);

  save(state);
  return { state, xpDelta, isFirstToday: state.streak.lastDay === t };
};

export const reset = (): void => {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(KEY);
};

export const chapterProgress = (
  state: State,
  questions: Question[],
  chapter: string
): number => {
  const inChapter = questions.filter((q) => q.chapter === chapter);
  if (inChapter.length === 0) return 0;
  const solved = inChapter.filter((q) => state.answered[q.id]?.correct).length;
  return solved / inChapter.length;
};
