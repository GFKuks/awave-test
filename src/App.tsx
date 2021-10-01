import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import NavBar from "./navBar/NavBar";
import PageRouter from "./pageRouter/PageRouter";

import "./app.scss";

export default function App() {
    return (
        <Router>
            <div className="container">
                <NavBar />
                <PageRouter />
            </div>
        </Router>
    );
}