export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: [],
    // token: "BQAC5v50UeTaNpvxgvUbmTDC4K6PkU2BrMZ2m1prkD0z54qpbw…gN-3yferlcwHhHdlu5Nw4nzhTkSQhO2R-8ljI-7E4sX79Y7Ru"
}

const reducer = (state, action) => {
    console.log(action);
    const { type, payload } = action
    switch (type) {
        case 'SET_USER':
            return {
                ...state,
                user: payload
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: payload
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: payload
            }
        case 'SET_DISCOVER_WEEKLY':
            console.log(type, payload);
            return {
                ...state,
                discover_weekly: payload
            }

        default:
            return state
    }
}

export default reducer;