import { create } from "zustand";

type TLoadingState = {
  loading: boolean;
  targetRoute: string | null;
  setLoading: (val: boolean, route?: string | null) => void;
};

export const useSidebarLoadingStore = create<TLoadingState>((set) => ({
  loading: false,
  targetRoute: null,
  setLoading: (val, route = null) =>
    set({ loading: val, targetRoute: val ? route : null }),
}));
