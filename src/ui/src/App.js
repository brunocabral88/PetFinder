import React from "react";
import "./App.css";
import Map from "./components/map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/login";
import NavBar from "./components/navbar";

function App() {
    return (
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
    );
}

export default App;
