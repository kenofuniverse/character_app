import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='/'>Milo Credit Test</Navbar.Brand>
    <Nav className='mr-auto'>
      <Nav.Link href='/'>Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl
        type='text'
        placeholder='Search Chracters'
        className='mr-sm-2'
      />
      <Button variant='outline-primary'>Search</Button>
    </Form>
  </Navbar>
)

export default Header
