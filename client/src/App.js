import './App.css';
import { BsTwitter } from 'react-icons/bs'
import Search from './Components/Search'
import Spinner from './Components/Spinner';
import { useContext } from 'react';
import { GeneralContext } from './context/GeneralContext';
import Alert from './Components/Alert';
import Username from './Components/Username';
import ButtonAnalyse from './Components/ButtonAnalyse';


function App() {
  const {loading,user,tweets} = useContext(GeneralContext)
  return (
    <div className="App">
      <div className='titleContainerApp'>
        <h1 className='titleApp'>Sentiment Anaylisis</h1>
        <BsTwitter className='titleIcon' />
      </div>
      <Search />
      {user.username && <Username/> }
      {tweets.length > 0 && <ButtonAnalyse tweets={tweets}/>}
     {loading && <Spinner/>}
     <Alert/>
    </div>
  )
}

export default App;
