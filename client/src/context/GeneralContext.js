import { createContext, useState } from "react";

const GeneralContext = createContext()

const GeneralProvider = ({children})=>{
    const [loading,setLoading] = useState(false)
    const [alert, setAlert] = useState({
        type:'',
        message:''
    })
    const [user, setUser] = useState({
        name:'',
        username:''
    })
    const [tweets,setTweets] = useState([])

  
    const data = { loading, setLoading, alert, setAlert, user, setUser, tweets, setTweets }

    return (
        <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
    )
}

export {GeneralContext, GeneralProvider}