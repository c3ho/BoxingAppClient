import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

class Navigation extends React.Component{

    render(){
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">{this.props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Options" id="basic-nav-dropdown"> */}
              <NavDropdown.Item href="/members">Members</NavDropdown.Item>
              <NavDropdown.Item href="/events">Upcoming Tournaments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Documentation</NavDropdown.Item>
            {/* </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>);
    }
}

export default Navigation;