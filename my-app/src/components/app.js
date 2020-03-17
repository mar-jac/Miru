import React, { Component } from "react"
import Table from "././aniTable/table"
import TableContainer from "./aniTable/TableContainer"
import MenuBar from "./navbar/menubar"
import history from "../history"
import { Router, Route, Switch } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <MenuBar />
                <Switch>
                    <Route path="/home" exact component={TableContainer} />
                    <Route path="/test" exact component={Table} />
                </Switch>
            </Router>
        )
    }
}
