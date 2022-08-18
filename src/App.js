import {useState, useEffect } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown';
import StarWarLogo from './Components/StarWarLogo';
import MovieData from './Components/MovieData';
import Table from './Components/Table';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedMovieData, setSelectedMovieData] = useState([]);
  const [movieCharacters, setMovieCharacters] = useState([]);

  const getSelectedValue = (e) => {
     setSelectedValue(e.target.value);
     let movie = movies.find(mov => mov.title === e.target.value);
     setSelectedMovieData(movie);
     setMovieCharacters(movie.characters);
     console.log(movieCharacters);
  } 

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
            <Dropdown 
              movie={movies} 
              getValue={getSelectedValue} 
              selectedMovie={selectedValue}
            />           
        </div>
        <div className='data__tab'>
           <StarWarLogo/>
           <MovieData movieCrawl={selectedMovieData?.opening_crawl}/>
           <Table/>
        </div>
    </div>
  )
}

export default App;
