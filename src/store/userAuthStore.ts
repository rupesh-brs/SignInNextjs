import { create } from 'zustand';

interface AuthState {
  userId: string;
  isUserIdValid: boolean;
  password: string;
  setUserId: (id: string) => void;
  validateUserId: () => void;
  setPassword: (password: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  userId: '', 
  isUserIdValid: false, 
  password: '',
  setUserId: (id) => set({ userId: id }),
  validateUserId: () => set((state) => ({
    isUserIdValid: state.userId === 'vsfnyros', 
  })),
  setPassword: (password) => set({ password }),
}));

export default useAuthStore;