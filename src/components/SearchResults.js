import React from "react";
import Track from './Track';
import { music } from '../musicData';


function SearchResults() {
    return (
        <div>
        <h1>Search Results</h1>
        <p>
            {
                music.map(song => {
                    <Track musicObject={song} />
                })
            }
        </p>
        </div>
    );
}

export default SearchResults;
