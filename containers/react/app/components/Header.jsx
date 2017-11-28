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
                            Kai Deals
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">Dealer Login</NavItem>
                        </Nav>
                        <Nav pullRight>
                           <NavItem><Link to={"/registration"}>Register</Link></NavItem>
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

