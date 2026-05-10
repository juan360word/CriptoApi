
import { create } from "zustand";
import type { CurrencyResponse } from '../Types/Types.ts'
import { getApi, DataPrice } from "../Services/ServiceCrypto.tsx";

type cryptoStore = {
    crypto: CurrencyResponse,
    fetchCrypto: () => Promise<void>
    fetchData: (pair: { currency: string, cryptocurrency: string }) => Promise<void>  // ✅ tipo explícito
}

export const UseCrypto = create<cryptoStore>((set) => ({
    crypto: [],
    fetchCrypto: async () => {
        const crypto = await getApi()
        set({ crypto })
    },
    fetchData: async (pai: typeof pair) => {
        await DataPrice(pai)  
        // Aca me quede 
    }
}))



