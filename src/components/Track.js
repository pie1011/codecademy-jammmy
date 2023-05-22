import React from "react";
import TrackBody from './TrackBody';

function Track(props) {
    return (
        <div class="track">
        <h1>Track</h1>
        <p>
            <TrackBody track={props.musicObject.track} />
        </p>
        </div>
    );
}

export default Track;