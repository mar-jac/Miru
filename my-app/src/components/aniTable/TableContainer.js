import React, { Component } from "react"
import Table from "./table"
import ResetButton from "./reset"
import loadingRem from "../../res/gif/loadingRem.gif"
import AnimeStore from "../../stores/AnimeStore"
import Actions from "../../actions/"

export default class TableContainer extends Component {
    state = {
        allAnime: []
    }
    componentDidMount() {
        AnimeStore.listen(this.onChange)
        Actions.getAllAnime("")
    }

    componentWillUnmount() {
        AnimeStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { allAnime } = store
        this.setState({ allAnime })
    }

    handleDelete = event => {
        const { id } = event.target
        Actions.deleteAnime(id)
    }

    handleReset = () => {
        Actions.resetAnimeTable("")
        Actions.resetAnimeGenreTable("")
        Actions.resetUserTable("")
        Actions.resetReviewTable("")
        Actions.resetUserReviewTable("")
    }
    render() {
        const data = this.state.allAnime.map(allAnime => {
                allAnime.Actions = <i className = "fa fa-trash-alt delete-button" id={allAnime.anime_id} onClick={this.handleDelete} title="Delete"/>

                return allAnime;
        })

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <img src={loadingRem} alt="loading-Rem" />
                    <p className="table-title">Anime Info</p>
                    <ResetButton onClick= {this.handleReset} />
                </div>
                <Table data={data} />
            </div>
        )
    }
}
