
import Form from './Componets/Form'
import Title from './Componets/Title'
import { UseCrypto } from './ZustandStore/StoreZu'
import './App.css'
import { useEffect } from 'react'

function App() {

  const fetchCrypto = UseCrypto((state) => state.fetchCrypto )

  useEffect(() => {
  fetchCrypto
  },[])

  return (
    <>
     <Title/>
     <Form/>
    </>
  )
}

export default App
