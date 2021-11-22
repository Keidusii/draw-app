import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Navbar
                color="light"
                expand="md"
                sticky="top"
                light
            >
                <NavbarBrand href="/">
                    Draw
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="mx-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Draw
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;