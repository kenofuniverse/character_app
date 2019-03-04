import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingContainer from './containers/landing'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={LandingContainer} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
