import { create } from 'zustand';

export const useCounter = create((set) => ({
  counter: 0,
  // Actions
  increment: (step: number) => set((state: { counter: number }) => ({ counter: state.counter + (step ?? 1) })),
  decrement: (step: number) => set((state: { counter: number }) => ({ counter: state.counter - (step ?? 1) })),
}));
