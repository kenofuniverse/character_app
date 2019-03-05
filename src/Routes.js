import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingContainer from './containers/Landing'
import CharacterContainer from './containers/Character'
import MultiCharactersContainer from './containers/MultiCharacters'
import SearchContainer from './containers/Search'

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/character/:id" component={CharacterContainer} />
      <Route path="/characters/:ids" component={MultiCharactersContainer} />
      <Route path="/search/:keyword" component={SearchContainer} />
      <Route exact path="/" component={LandingContainer} />
    </Switch>
  </Layout>
)

export default Routes
