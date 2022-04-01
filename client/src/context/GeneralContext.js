import { createContext, useState } from "react";

const GeneralContext = createContext()

const GeneralProvider = ({children})=>{
    const [loading,setLoading] = useState(false)
    const data = {loading,setLoading}
    return (
        <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
    )
}

export {GeneralContext, GeneralProvider}