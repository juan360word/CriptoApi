import { type InferOutput } from 'valibot'
import {CurrencyBot} from '../ValioBot/TypesBot.ts'


 export type Currency = InferOutput<typeof CurrencyBot>
