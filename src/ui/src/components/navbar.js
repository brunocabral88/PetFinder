import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import logo from "../pet-search-icon.png";
import { Link } from "react-router-dom";

const NavBar = () => (
    <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} width={50} />
            <span style={{ color: "white" }}>Pet Finder</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Link className="mr-auto" to="/">
                Home
            </Link>
            <Nav className="mr-sm-2">
                <Nav.Link>
                    <Link to="/login">
                        <span style={{ color: "white" }}>LOGIN</span>
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
