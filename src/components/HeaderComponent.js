import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar
                color="light"
                expand="xs"
                sticky="top"
                light
            >
                <NavbarBrand href="/">
                    Draw
                </NavbarBrand>
                <Nav
                    className="mx-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/studio">Studio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;