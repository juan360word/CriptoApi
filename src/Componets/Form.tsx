
import {currenciesData} from '../Data/Data.ts'

const Form = () => {
  return (
    <>
    <form  className=" mx-auto w-4xl p-10 mt-12"
            style={{
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
            }}
            action="">
        
        <div className="flex flex-col items-center justify-evenly gap-20">

        
        <div className="  text-6xl">
            <label htmlFor="currency">currency: </label>
            <select name="currency" id="">
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
            <select name="cryptocurrency" id="">
                <option value="">- - Select - -</option>
            </select>
        </div>
            
        <input type="submit" className="border p-6 w-xs cursor-pointer hover:bg-blue-600 hover:transition  ease hover:text-white rounded-3xl text-5xl" value="Quote" />

        </div>
    </form>
    </>
  )
}

export default Form