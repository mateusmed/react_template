import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


function TopNavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                    <Nav.Link href="/datatable">DataTable</Nav.Link>
                    <Nav.Link href="/formExample1">FormExample1</Nav.Link>
                    <Nav.Link href="/formExample2">FormExample2</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/anotherAction">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/separatedLink">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNavBar;



















