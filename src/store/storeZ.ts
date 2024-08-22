import { create } from "zustand";

interface IMoneyUser {
    money: number
    addMoney: (count: number) => void
    subMoney: () => void
}

export const useMoneyStore = create<IMoneyUser>(set => ({
    money: 0,
    addMoney: (count: number) => set(state => ({ money: state.money + count })),
    subMoney: () => set(state => ({ money: state.money - 1 })),
}))