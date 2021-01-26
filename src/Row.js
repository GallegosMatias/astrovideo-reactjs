import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
   const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            /*console.log(request.data.results); //See whats going on with the fetch*/
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/*several row_posters*/}

                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className="row_poster" 
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.name}/>
                ))}
            </div>

        </div>
    )
}

export default Row;
