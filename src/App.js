import {useState, useEffect } from 'react';
import './App.css';
import Options from './Components/Options';

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
     <div className='title__wrap'>
         <h1>Star Wars</h1>
         <label className='star__label' for="star-wars">Choose a Movie:</label> <br/><br/>
        <select name="star-wars" id="star-wars">
            <option value="">select movie</option>
            {movies.map(mov => {
            return  <Options key={mov.title} title={mov.title}/>
            })}
        </select>
    </div>
  )
}

export default App;
