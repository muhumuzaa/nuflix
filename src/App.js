
import { useEffect, useState } from 'react';
import './App.css';
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=24815130'



const App = () => {

  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState("")

  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data.Search)

    setMovies(data.Search)
    
  }

  function handleSearch(e){
    const value = e.target.value;
    setSearch(value)
  }

  useEffect(()=>{
    searchMovies('spiderman')
  },[])
  return (
    <div className="App">
      <h1>NuFlix</h1>
      <div className='search'>
        <input 
          placeholder='search for movies'
          value={search}
          onChange={handleSearch}
        />
        <img 
          src={SearchIcon}
          alt ="search"
          onClick ={() => searchMovies(search)}
        />
      </div>

      {
      movies?.length > 0? 
      (<div className='container'>
        {movies.map(movie =>(
          <MovieCard movie ={movie}/>
        ))}
      </div>):
      (<div className='empty'><h2>No movies to show</h2></div>)
      }
      
    </div>
  );
}

export default App;
