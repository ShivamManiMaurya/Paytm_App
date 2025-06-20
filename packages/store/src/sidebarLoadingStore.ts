import { create } from "zustand";

type TLoadingState = {
  loading: boolean;
  setLoading: (val: boolean) => void;
};

export const useSidebarLoadingStore = create<TLoadingState>((set) => ({
  loading: false,
  setLoading: (val) => set({ loading: val }),
}));
