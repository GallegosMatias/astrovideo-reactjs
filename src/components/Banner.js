import React, { useState, useEffect } from 'react';

import axios from '../utils/axios';
import requests from '../utils/requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchSpaceDocumentaries);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();

    }, []);

    //Movie backdrop validation
    if(movie.backdrop_path === null){
        window.location.reload();
    }

    console.table(movie);
    console.log(`${movie?.backdrop_path}`);
    console.log(movie.backdrop_path);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_button">Play</div>
                <div className="banner_button">My List</div>

                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
        </header>
    )
}

export default Banner;
