import {Navbar, Nav} from 'react-bootstrap'
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand className="text-white" href="/">React Api</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/components/Users">User</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/components/Posts">Posts</NavLink>
                            <NavLink className="d-inline p-2 bg-dark text-white"
                                     to="/components/Albums">Albums</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default Navigation
