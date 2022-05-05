import './App.css';
import Search from './Components/Search'
import { useContext } from 'react';
import { GeneralContext } from './context/GeneralContext';
import Alert from './Components/Alert';
import Username from './Components/Username';
import ButtonAnalyse from './Components/ButtonAnalyse';
import Header from './Components/Header';
import ButtonGraph from './Components/ButtonGraph';
import Spinner from './Components/Spinner';
import Graph from './Components/Graph';





function App() {
  const { loading, user, tweets } = useContext(GeneralContext)

  return (
    <div className="App">
      <div className="containerApp">
        <Header />
        <Search />
        {user.username && <Username />}
        {tweets.length > 0 &&  tweets[0]?.state && <Graph/>}
        {!loading && tweets.length > 0 && !tweets[0]?.state && <ButtonAnalyse/>}
        {!loading && tweets.length > 0 &&  tweets[0]?.state && <ButtonGraph/>}
        {loading && <Spinner/>}
        <Alert />
      </div>
    </div>
  )
}


export default App;
