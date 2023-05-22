import React from "react";
import TrackBody from './TrackBody';

function Track(props) {
    return (
        <>
            <h2>Track</h2>
            <TrackBody track={props.musicObject.track} artist={props.musicObject.artist} album={props.musicObject.album} />
        </>
    );
}

export default Track;