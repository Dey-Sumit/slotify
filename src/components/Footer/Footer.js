import React from 'react';
import RepeatIcon from '@material-ui/icons/Repeat'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import './Footer.css'
import { Grid, Slider } from '@material-ui/core';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="" alt="" className="footer__albumLogo" />
                <div className="footer__songInfo">
                    <h5>Hello</h5>
                    <p>Artist</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item >
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item >
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;