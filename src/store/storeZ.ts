import { create } from "zustand";

interface IMoneyUser {
    money: number
    addMoney: (count: number) => void
    subMoney: () => void
}

interface ICountUser {
    counter: number
    increment: () => void
    decrement: () => void
}

export const useMoneyStore = create<IMoneyUser>(set => ({
    money: 0,
    addMoney: (count: number) => set(state => ({ money: state.money + count })),
    subMoney: () => set(state => ({ money: state.money - 1 })),


}))

export const useCountStore = create<ICountUser>(set => ({
    counter: 1,
    increment: () => set(state => ({ counter: state.counter + 1 })),
    decrement: () => set(state => {
        if (state.counter > 1) {
            return { counter: state.counter - 1 };
        } else {
            return { counter: state.counter }
        }
        
    }),
}))