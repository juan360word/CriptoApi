
import {object, string} from 'valibot'

export const CurrencyBot = object ({
    code:string(),
    name:string()
})