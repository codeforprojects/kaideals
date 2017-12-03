import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar inverse>
                <Nav pullRight>
                    <NavItem eventKey={1}><Link to={"/contributors"}>Contributors</Link></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Footer;