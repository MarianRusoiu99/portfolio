import create from "zustand"

const store = (set) => ({
     menuState: false,
     setMenuState: (menuState) => set(() => ({menuState: !menuState}))
})

export const useStore = create(store);