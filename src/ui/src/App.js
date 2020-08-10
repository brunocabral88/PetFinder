import React, { useState } from "react";
import "./App.css";
import Map from "./components/map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/login";
import NavBar from "./components/navbar";
import AuthContext from './contexts/AuthContext';
import loginService from "./services/loginService";


function App() {

    const userToken = loginService.getToken();
    const [isLoggedIn, setIsLoggedIn] = useState(userToken !== null);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Router>
                <NavBar />

                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <Map
                            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `600px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
