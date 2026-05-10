import type { ReactNode } from "react"


type errorprops = {
    children: ReactNode
}


const Error = ({children} : errorprops) => {
  return (
    <>
        <p className="text-red-600 text-3xl pt-5">{children}</p>
    </>
  )
}

export default Error