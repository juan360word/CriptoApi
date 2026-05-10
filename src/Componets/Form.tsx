import { UseCrypto } from '../ZustandStore/StoreZu.ts'
import {currenciesData} from '../Data/Data.ts'
import type { Cotiza } from '../Types/Types.ts'
import { useEffect, useState } from 'react'
import Error from '../Error/Error.tsx'



const Form = () => {

    const [error,setError] = useState('')
    const Cryptos = UseCrypto((state) => state.crypto )
    const CryptosData = UseCrypto((state) => state.fetchCrypto)
    

    const [pair,setpair] = useState<Cotiza>({
        currency:'',
        cryptocurrency:''
    })

    useEffect(() => {
        CryptosData()
    }  , [])

    const hanldeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setpair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const hanldeSumit = (e : React.SubmitEvent<HTMLFormElement>) => {
     e.preventDefault()

     if(Object.values(pair).includes('')){
        setError('All fields are required')
        return
     }
     setError('')
     CryptosData()
    }

  return (
    <>
    <form  className=" mx-auto w-4xl p-10 mt-12"
            style={{
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
            }}
            action=""
            onSubmit={hanldeSumit}
            >
        {error && <Error>{error}</Error>}
        <div className="flex flex-col items-center justify-evenly gap-20">

        
        <div className="  text-6xl">
            <label htmlFor="currency">currency: </label>
            <select name="currency" value={pair.currency} onChange={hanldeChange}>
                <option value="">- - Select - -</option>
                {currenciesData.map((item) => (
                    <option value={item.code} key={item.code}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="  text-6xl">
            <label htmlFor="cryptocurrency">cryptocurrency: </label>
            <select name="cryptocurrency" value={pair.cryptocurrency} onChange={hanldeChange}>
                <option value="">- - Select - -</option>
                {Cryptos.map((item) => (
                    <option value={item.CoinInfo.Name} key={item.CoinInfo.FullName}>
                        {item.CoinInfo.FullName}
                    </option>
                ))}
            </select>
        </div>
            
        <input type="submit" className="border p-6 w-xs cursor-pointer hover:bg-blue-600 hover:transition  ease hover:text-white rounded-3xl text-5xl" value="Quote" />

        </div>
    </form>
    </>
  )
}

export default Form