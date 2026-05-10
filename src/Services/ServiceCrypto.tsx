
import {safeParse} from 'valibot'
import { ResponseApi } from "../ValioBot/TypesBot";
import axios from "axios";
import { pair } from '../ValioBot/TypesBot';

export async function getApi() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    
    try {
        const {
            data: { Data },
        } = await axios.get<{ Data: unknown }>(url)
        const Result = safeParse(ResponseApi, Data)
        

        if (Result.success) {
            return Result.output
        }
        return []
    } catch (err) {
        console.error('getApi:', err)
        return []
    }
}

export async function DataPrice(pai: typeof pair) {
    console.log(pai)
}