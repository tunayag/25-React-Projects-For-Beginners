import React, { useState, useEffect } from 'react'
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';
//90c9d8d4
const API = "http://www.omdbapi.com/?i=tt3896198&apikey=90c9d8d4";


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies("Sherlock")
    }, [])
    return (
        <div className="app">
            <h1>Movie Paradise</h1>
            <div className="search">
                <input type="text" placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))
                        }
                    </div>) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App