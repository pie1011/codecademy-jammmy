import React from "react";

function TrackBody(props) {
    return (
        <div class="track-body">
        <h1>Track Body</h1>
        <p>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </p>
        </div>
    );
}

export default TrackBody;