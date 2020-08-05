import React from 'react';
import './SongRow.css'
const SongRow = ({ track }) => {
    console.log(track);
    return (
        <div className="songRow">
            {track?.album?.images?.length > 0 &&
                <img className="songRow__album" src={track.album.images[0].url} alt="albumImage" />
            }
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {/* {track?.artists?.map((artist) => artist.name.join(", "))} */}
                    {track?.album?.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;