import alt from "../alt"
import Actions from "../actions"

const allURL = "http://localhost:5000/allAnime/"
const deleteURL = "http://localhost:5000/deleteAnime/"
const resetURL = "http://localhost:5000/resetAnime"
const resetAnimeGenreURL = "http://localhost:5000/resetAnimeGenre"

class AnimeStore {
    constructor() {
        this.allAnime = []

        this.bindListeners({
            handleAnime: Actions.GET_ALL_ANIME,
            handleDeleteAnime: Actions.DELETE_ANIME,
            handleResetAnime: Actions.RESET_ANIME_TABLE,
            handleResetAnimeGenre: Actions.RESET_ANIME_GENRE_TABLE
        })
    }

    handleAnime = payload => {
        console.log("Get anime from AnimeStore.");

        fetch(allURL)
            .then(res => res.json())
            .then(json => {
                return this.setState({ allAnime: json })
            })
    }

    handleDeleteAnime = id => {
        console.log(`AnimeStore :: handle delete called on uid ${id}`)
        fetch(`${deleteURL}${id}`).then(() => {
          this.handleAnime("")
        })
      }

    handleResetAnime = payload => {
        console.log(`AnimeStore :: handle reset anime table ${payload}`)
        fetch(resetURL).then(() => {
            this.handleAnime("")
        })
    }

    handleResetAnimeGenre = payload => {
        console.log(`AnimeStore :: handle reset anime genre table that has a ${payload}`)
        fetch(`${resetAnimeGenreURL}`)
    }
}

export default AnimeStore = alt.createStore(AnimeStore, "AnimeStore")
window.AnimeStore = AnimeStore;