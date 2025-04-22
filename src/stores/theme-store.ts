import { createStore } from 'zustand/vanilla'

export type ThemeState = {
    theme: string
}

export type ThemeActions = {
    changeTheme: () => void
}

export type ThemeStore = ThemeState & ThemeActions

export const defaultInitState: ThemeState = {
    theme: 'light',
}

export const createThemeStore = (
  initState: ThemeState = defaultInitState,
) => {
  return createStore<ThemeStore>()((set) => ({
    ...initState,
    changeTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  }))
}