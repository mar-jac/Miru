import React, { Component } from "react"
import TableContainer from "./aniTable/TableContainer"
import AniForm from "./ani-forms/AniForm"
import AniListContainer from "./ani-list/AniListContainer"
import UserListContainer from "./user-list/UserListContainer"
import MenuBar from "./navbar/menubar"
import history from "../history"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <MenuBar />
                <Switch>
                    <Route path="/home" exact component={TableContainer} />
                    <Router path="/add" exact component={AniForm} />
                    <Router path="/list" exact component={AniListContainer}/>
                    <Router path="/user" exact component={UserListContainer} />
                </Switch>
            </Router>
        )
    }
}
