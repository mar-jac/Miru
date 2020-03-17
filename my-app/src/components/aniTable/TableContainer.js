import React, { Component } from "react"
import Table from "./table"
import ResetButton from "./reset"
import loadingRem from "../../res/gif/loadingRem.gif"
import AnimeStore from "../../stores/AnimeStore"
import Actions from "../../actions/"

export default class TableContainer extends Component {
    state = {
        anime: []
    }
    componentDidMount() {
        AnimeStore.listen(this.onChange)
        Actions.getAnime("")
    }

    componentWillUnmount() {
        AnimeStore.unlisten(this.onChange)
    }

    onChange = store => {
        const { anime } = store
        this.setState({ anime })
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <div className="centered-row" style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <img src={loadingRem} alt="loading-Rem" />
                    <p className="table-title">Anime Info</p>
                    <ResetButton onClick={() => console.log("Reset clicked.")} />
                </div>
                <Table data={this.state.anime} />
            </div>
        )
    }
}
