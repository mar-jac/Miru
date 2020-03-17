import alt from "../alt"
import Actions from "../actions"

const allURL = "http://localhost:5000/anime"

class AnimeStore {
    constructor() {
        this.anime = []

        this.bindListeners({
            handleAnime: Actions.GET_ANIME
        })
    }

    handleAnime = payload => {
        console.log("Get anime from AnimeStore.");

        fetch(allURL)
            .then(res => res.json())
            .then(json => {
                return this.setState({ anime: json })
            })
    }
}

export default AnimeStore = alt.createStore(AnimeStore, "AnimeStore")
window.AnimeStore = AnimeStore;