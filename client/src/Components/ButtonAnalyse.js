import { useAnalyse } from '../Hooks/useAnalyse'
import './ButtonAnalyse.css'

const ButtonAnalyse = () => {
 
const {handleAnalyse} = useAnalyse()

  return (
    <button onClick={handleAnalyse} className='buttonAnalyse'>Analizar</button>
  )
}

export default ButtonAnalyse