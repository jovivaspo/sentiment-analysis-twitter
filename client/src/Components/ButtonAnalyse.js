import './ButtonAnalyse.css'
import { urls } from '../services/urls'
import { helpHttp } from '../services/helpHttp'
import { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext'


const ButtonAnalyse = ({ tweets }) => {
  const { setAlert, setTweets, loading, setLoading } = useContext(GeneralContext)

  const handleAnalyse = async () => {
    try {
      setLoading(true)
      const copyTweets = tweets
      setTweets([])
      helpHttp().post(urls().analyse, {
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          tweets
        }
      })
        .then(res => {
          console.log("Probando",loading)
          console.log(res)
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
        })

    } finally {
      setLoading(false)
    }

  }
console.log(loading)

  return (
    <button onClick={handleAnalyse} className='buttonAnalyse'>{tweets[0]?.state? 'Gráfico' : 'Analizar'}</button>
  )
}

export default ButtonAnalyse