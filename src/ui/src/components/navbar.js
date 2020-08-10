import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import logo from "../pet-search-icon.png";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import loginService from "../services/loginService";

const NavBar = () => {

    const authContext = useContext(AuthContext);

    const logout = () => {
        loginService.logout();
        authContext.setIsLoggedIn(false);
    }

    return <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} width={50} alt="logo" />
                    <span style={{ color: "white" }}>Pet Finder</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Link className="mr-auto" to="/">
                        Home
                    </Link>
                    <Nav className="mr-sm-2">
                        {authContext.isLoggedIn 
                            ? <NavDropdown title="Hi there">
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            : <Nav.Link>
                                <Link to="/login">
                                    <span style={{ color: "white" }}>LOGIN</span>
                                </Link>
                            </Nav.Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
}
    

export default NavBar;
