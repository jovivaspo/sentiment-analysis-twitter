import './ButtonAnalyse.css'
import { urls } from '../services/urls'
import { helpHttp } from '../services/helpHttp'


const ButtonAnalyse = ({tweets}) => {

  const handleAnalyse = async () => {
    console.log(tweets)
    const results = await helpHttp().post(urls().analyse, {
      headers:{
        "Content-Type": "application/json",
      },
      body:{
       tweets
      }
    })
    console.log(results)
  }
   
  return (
    <button onClick={handleAnalyse} className='buttonAnalyse'>Analizar</button>
  )
}

export default ButtonAnalyse