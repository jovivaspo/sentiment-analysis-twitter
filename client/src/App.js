import './App.css';
import { BsTwitter } from 'react-icons/bs'
import Search from './Components/Search'
import Spinner from './Components/Spinner';
import { useContext } from 'react';
import { GeneralContext } from './context/GeneralContext';


function App() {
  const {loading} = useContext(GeneralContext)
  return (
    <div className="App">
      <div className='titleContainerApp'>
        <h1 className='titleApp'>Sentiment Anaylisis</h1>
        <BsTwitter className='titleIcon' />
      </div>
      <Search />
     {loading && <Spinner/>}
    </div>
  )
}

export default App;
