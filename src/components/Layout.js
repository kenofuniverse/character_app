import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from './Header'
// import Footer from './Footer'

const Layout = ({ children }) => (
  <Container fluid={true}>
    <Header />
    <Container>
      {children}
    </Container>
    {/* <Footer /> */}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
