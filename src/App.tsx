import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";

import NavBar from "./navBar/NavBar";
import PageRouter from "./pageRouter/PageRouter";
import { setProfile } from "./reduxSlices/profileSlice";

export default function App() {
    const dispatch = useAppDispatch();
    const profile = useAppSelector((state) => state.profile.value);

    const storageProfile = localStorage.getItem("profile");

    if (!profile.id && storageProfile) {
        dispatch(setProfile(JSON.parse(storageProfile)));
    }

    return (
        <Router>
            <div className="container">
                <NavBar />
                <PageRouter />
            </div>
        </Router>
    );
}