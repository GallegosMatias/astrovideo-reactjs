import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

import '../styles/Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results); //See whats going on with the fetch
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl]);

    // console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* {several row_posters} */}

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"} ${movie.poster_path == null && "broken_row"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.original_title}/>
                ))}
            </div>

        </div>
    )
}

export default Row;
