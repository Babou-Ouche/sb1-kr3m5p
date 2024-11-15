import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    tiktokHandle: string;
  } | null;
  tiktokToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  connectTikTok: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      tiktokToken: null,
      login: async (email: string, password: string) => {
        // Simulation d'une connexion
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({
          isAuthenticated: true,
          user: {
            name: 'Michel Dupont',
            email,
            tiktokHandle: '@michelcreator'
          }
        });
      },
      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
          tiktokToken: null
        });
      },
      connectTikTok: async () => {
        // Simulation de connexion à l'API TikTok
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({
          tiktokToken: 'simulated_tiktok_token'
        });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);