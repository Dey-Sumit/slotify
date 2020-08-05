import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getAccessTokenFromUrl } from './config';
import Player from './components/Player/Player';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getAccessTokenFromUrl()
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        payload: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      }
      )
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          payload: playlists.items
        })
      })

      spotify.getPlaylist('5O0lR7LiAE5kPqw0XEDKRn').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          payload: response
        })
      })
    }

    window.location.hash = ""
  }, [dispatch])


  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }

    </div>
  );
}

export default App;
