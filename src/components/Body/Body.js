import React from 'react';
import './Body.css'
import Header from './Header/Header';
import { useDataLayerValue } from '../../DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow/SongRow';

const Body = () => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <Header />
            <div className="body__info">
                {discover_weekly?.images?.length > 0 &&
                    <img src={discover_weekly.images[0].url} alt="cover" />}
                <div className="body__infoText">
                    {/* <strong>PLAYLIST</strong> */}
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__play-button" />
                    <FavoriteIcon fontsize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks?.items &&
                    discover_weekly.tracks.items.map((item) =>
                        <SongRow track={item.track} key={item.id} />
                    )
                }
            </div>
        </div>
    );
};

export default Body;