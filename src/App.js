import {useState, useEffect } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import StarWarLogo from './Components/StarWarLogo';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(data => {
      if(data) setMovies(data.results);
      setIsLoading(false);
    });
  },[]);
  
  {if(isLoading) return <h1>Loading...</h1>}

  return (
     <div className='app__container'>
       <div className='title__wrap'>
            <h1>Star Wars</h1>
            <Dropdown movie={movies}/>           
        </div>
        <div className='data__tab'>
           <StarWarLogo/>
        </div>
    </div>
  )
}

export default App;
