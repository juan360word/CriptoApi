
import {array, object, string} from 'valibot'

export const CurrencyBot = object ({
    code:string(),
    name:string()
})


// se agararro de la info de laA API
export const ResponseApi = array( object ({
    CoinInfo: object({
        FullName: string(),
        Name: string()
    })
}))

export const pair = object({
    currency: string(),
    cryptocurrency: string()
})