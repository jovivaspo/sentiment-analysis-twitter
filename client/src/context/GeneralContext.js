import { createContext, useState } from "react";

const GeneralContext = createContext()

const GeneralProvider = ({children})=>{
    const [loading,setLoading] = useState(false)
    const [alert,setAlert] = useState({
        type:'',
        message:''
    })
    const data = {loading,setLoading,alert,setAlert}
    return (
        <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
    )
}

export {GeneralContext, GeneralProvider}