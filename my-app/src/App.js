import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Searchpage from './pages/SearchPage';
import Historypage from './pages/HistoryPage';
import Navbar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  const [apiResults, setApiResults] = useState(['test'])
  const [searchHistory, setSearchHistory] = useState([])
  
  const getSearchResults = async (queryString)=>{
    let res
    try{
      res = await fetch(`http://hn.algolia.com/api/v1/search?query=${queryString}`)
      res =  await res.json()
      setApiResults(res.hits)
    }
    catch (error){
      alert(error)
    }
  }
  const updateSearchHistory = (queryString)=> {
    const newArray = [...searchHistory]
    newArray.push(queryString)
    setSearchHistory(newArray)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Searchpage getSearchResults={getSearchResults} updateSearchHistory={updateSearchHistory} apiResults={apiResults}/>}/>
          <Route path='/search'element={<Searchpage getSearchResults={getSearchResults} updateSearchHistory={updateSearchHistory} apiResults={apiResults}/>}/>
          <Route path='/history' element={<Historypage searchHistory={searchHistory}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
