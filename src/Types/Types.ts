import { type InferOutput } from 'valibot'
import {CurrencyBot,ResponseApi,pair} from '../ValioBot/TypesBot.ts'



 export type Currency = InferOutput<typeof CurrencyBot>
 export type CurrencyResponse = InferOutput<typeof ResponseApi>
 export type Cotiza = InferOutput<typeof pair>
