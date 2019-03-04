import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from './Header'
// import Footer from './Footer'
import '../styles/layout.scss'

const Layout = ({ title, children }) => (
  <div className="layout">
    <Header/>
    <Container className="layout__container">
      <h1 className="layout__page-title">
        {title}
      </h1>
      {children}
    </Container>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
}

export default Layout
