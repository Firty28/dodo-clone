import { create } from "zustand";


interface ISelectedProducts {
    selectedProducts: {
        price: number
        title: string
        countPizza: number
        urlImage?: string

    }[],
    addSelectedProducts: (price: number, title: string, countPizza: number, urlImage?: string) => void
    sumSelectedProducts?: () => void
}


export const useSelectedProducts = create<ISelectedProducts>(set => ({
    selectedProducts: [],
    addSelectedProducts: (price: number, title: string, countPizza: number) => set(state => ({
        selectedProducts:
            [
                ...state.selectedProducts,
                {
                    price: price,
                    title: title,
                    countPizza: countPizza
                }
            ]
    }))
}))