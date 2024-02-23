import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  openSlider: () => void;
  closeSlider: () => void;
}

export const useMenuState = create<MenuState>((set, get) => ({
  isOpen: false,
  openSlider: () => {
    set({ isOpen: true });
  },
  closeSlider: () => {
    set({ isOpen: false });
  },
}));
