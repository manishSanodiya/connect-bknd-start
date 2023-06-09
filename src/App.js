import React, { useState,useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovies from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const fetchMoviesHandler = useCallback(async()=> {
    setIsLoading(true);
    setError(null);
    try{
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok){
        throw new Error('Something Went Wrong! ');
      }
      const data = await response.json();
  
      const transformedData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedData);
    }catch(error){
      setError(error.message);
    }
   
    setIsLoading(false);
  },[])
  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler])

  let content = <p>No Movies Found</p>
  if(movies.length>0){
    content=<MoviesList movies={movies} />
  }
  if(error){
    content=<p>{error}</p>
  }
  if(isLoading){
    content= <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <AddMovies/>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {/* { !isLoading && movies.length>0 && <MoviesList movies={movies} />}
       {!isLoading && movies.length===0 && !error && <p>No Movies Found.</p>}
       {!isLoading && error && <p>{error}</p>}
       {isLoading && <p>Loading...</p>} */}
       {content}
      </section>
    </React.Fragment>
  );
}

export default App;
