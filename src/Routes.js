import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingContainer from './containers/Landing'
import CharacterContainer from './containers/Character'

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/character/:id" component={CharacterContainer} />
      <Route exact path="/" component={LandingContainer} />
    </Switch>
  </Layout>
)

export default Routes
