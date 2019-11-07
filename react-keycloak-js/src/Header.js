import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Keycloak-JS POC</Navbar.Brand>
          </Navbar>
                );
            }
        }
export default Header;