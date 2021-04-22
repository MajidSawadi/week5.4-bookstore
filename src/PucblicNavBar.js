import React from 'react'
import 'react-bootstrap'
import {Link } from 'react-router-dom'
import {Navbar , Nav, Form, Button, FormControl} from 'react-bootstrap'
const PucblicNavBar = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/reading">Reading List</Nav.Link>
      <Nav.Link as={Link} to="/books/:id">Books</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default PucblicNavBar
