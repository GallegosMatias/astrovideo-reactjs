import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
   const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, []);

    return (
        <div>
            <h2>{title}</h2>
            {/* container -> posters */}

        </div>
    )
}

export default Row;
