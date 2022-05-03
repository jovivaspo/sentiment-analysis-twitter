import './App.css';
import Search from './Components/Search'
import Spinner from './Components/Spinner';
import { useContext } from 'react';
import { GeneralContext } from './context/GeneralContext';
import Alert from './Components/Alert';
import Username from './Components/Username';
import ButtonAnalyse from './Components/ButtonAnalyse';
import Header from './Components/Header';


function App() {
  const { loading, user, tweets } = useContext(GeneralContext)
  console.log(loading)
  return (
    <div className="App">
      <div className="containerApp">
        <Header />
        <Search />
        {user.username && <Username />}
        {tweets.length > 0 && !loading && <ButtonAnalyse tweets={tweets} />}
        {loading && <Spinner />}
        <Alert />
      </div>
    </div>
  )
}

export default App;
