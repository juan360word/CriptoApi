import axios from "axios";
import { create } from "zustand";


async function GetApi() {
    const url = '/asset/v2/metadata?assets=BTC&asset_lookup_priority=SYMBOL&quote_asset=USD&asset_language=en-US'
    const {data : {Data}} = await axios(url)
    console.log(Data)
}

export const UseCrypto = create(() => ({
    fetchCrypto: () => {
        GetApi()
    }
}))