import React, {Component} from "react";
import {Link} from "react-router-dom";

import {Col, Grid, Nav, Navbar, NavItem, Row} from "react-bootstrap";

class Header extends Component {

    render() {
        return (

            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Kai Deals</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1}><Link to="/register">Register</Link></NavItem>
                            <NavItem eventKey={2}><Link to="/login">Login</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid>
                    <Row>
                        <Col lg={3}>
                            <img src="/img/food.svg" className="app-logo" alt="logo"/>
                        </Col>
                        <Col lg={9}>
                            <h1>FIND FLASH DEALS <br /> FOR KAI NEAR YOU</h1>
                        </Col>
                    </Row>
                    <hr />
                </Grid>
            </div>
        );
    }
}

export default Header;

