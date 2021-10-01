import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import NavBar from "./navBar/NavBar";
import PageRouter from "./pageRouter/PageRouter";

export default function App() {
    return (
        <Router>
            <NavBar />
            <PageRouter />
        </Router>
    );
}