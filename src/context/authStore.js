import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create(persist(
    (set) => ({
        authenticated: false,
        login: (authenticated) => set({authenticated}),
        logout: () => set({ authenticated: false }),
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => sessionStorage)
      }
))