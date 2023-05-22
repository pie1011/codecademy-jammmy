import React from "react";

function TrackBody(props) {
    return (
        <div className="track-body">
            <h3>{props.track}</h3>
            <p>Artist: {props.artist}</p>
            <p>Album: {props.album}</p>
        </div>
    );
}

export default TrackBody;