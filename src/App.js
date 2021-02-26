import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './MyComponents/Header.js'
import ListPage from './MyComponents/ListPage.js'
import DetailsPage from './MyComponents/DetailsPage.js'
import CreatePage from './MyComponents/CreatePage.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/characters"
              exact
              component={ListPage}
            />
            <Route
              path="/characters/:characterId"
              exact
              component={DetailsPage}
            />
            <Route
              path="/create"
              exact
              component={CreatePage}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

