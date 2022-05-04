import { useContext } from "react"
import { GeneralContext } from "../context/GeneralContext"
import { helpHttp } from "../services/helpHttp"
import { urls } from "../services/urls"

const useAnalyse = () => {
    const { setLoading, setAlert, setTweets, tweets } = useContext(GeneralContext)


    const handleAnalyse = async () => {
        try {
            const copyTweets = tweets
            setTweets([])
            setLoading(true)
            const res = await helpHttp().post(urls().analyse, {
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    tweets
                }
            })
            if (res.error) {
                setTweets(copyTweets)
                setAlert({
                    type: 'error',
                    message: 'Ups, algo salió mal'
                })
                return false
            }
            setTweets(res.tweets)
            setAlert({
                type: 'info',
                message: 'Analisis completado'
            })
    } catch (err) {
        console.log(err)
    } finally {
        setLoading(false)
    }
}

return { handleAnalyse }

}

export { useAnalyse }