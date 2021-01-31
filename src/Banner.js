import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

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

    console.log(movie);

    return (
        <header>
            {/*background image*/}
            {/*title*/}
            {/*div > 2 buttons*/}
            {/*description*/}
        </header>
    )
}

export default Banner;
