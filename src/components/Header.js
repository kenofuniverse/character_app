import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const Header = () => (
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand as={Link} to='/'>Milo Credit Test</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search Chracters'
          className='mr-sm-2'
        />
        <Button variant='primary'>Search</Button>
      </Form>
    </Container>
  </Navbar>
)

export default Header
