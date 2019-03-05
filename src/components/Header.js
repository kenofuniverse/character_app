import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container
} from 'react-bootstrap'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const handleSearch = e => {
    e.preventDefault()
    window.location.href = `/search/${keyword}`
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Milo Credit Test
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
        <Form inline onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search Chracters"
            className="mr-sm-2"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
