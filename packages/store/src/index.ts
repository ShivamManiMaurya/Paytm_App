import { create } from "zustand";

type WalletStore = {
  balance: number;
  updateBalance: (ammount: number) => void;
};

export const useWalletStore = create<WalletStore>((set) => ({
  balance: 0,
  updateBalance: (amount) => set({ balance: amount }),
}));
