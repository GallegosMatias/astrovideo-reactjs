import React, { useState, useEffect } from 'react';

import axios from '../utils/axios';
import requests from '../utils/requests';

import '../styles/Banner.css';

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

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>

                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner;
