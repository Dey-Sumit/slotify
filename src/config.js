//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

const clientId = "76cc39bb8e51421888b70bd198c4412e"

const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectURI = "http://localhost:3000/"

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-recently-played"
]

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getAccessTokenFromUrl = () =>
    window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})

// http://localhost:3000/
//         #access_token = BQBrnPOsLy0dAjH7YqnW - Ela5Ot3czoS8UiS1DOxEIl39RTF - eJN63UzJzlGg717X8usSJQ766nuRSkpdbJD0VTcUIX8zq1HHxw6nyNWeZsTFUnAXUK4w38wPXgDYW1AdEkZuQAiW02uePFKwbStO0ltc4Cqjo70_7 - eoCi3ru0KacdwLfDp
//     & token_type=Bearer & expires_in=3600