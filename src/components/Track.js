import React from "react";
import TrackBody from './TrackBody';

function Track(props) {
    return (
        <>
            <TrackBody track={props.musicObject.track} artist={props.musicObject.artist} album={props.musicObject.album} />
        </>
    );
}

export default Track;