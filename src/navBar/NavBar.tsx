import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { clearErrors } from "../reduxSlices/errorSlice";
import { clearProfile } from "../reduxSlices/profileSlice";
import { clearUsers } from "../reduxSlices/userSlice";

import { RootState } from "../store";

export default function NavBar() {
    const profile = useSelector((state: RootState) => state.profile.value);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("profile");
        dispatch(clearErrors());
        dispatch(clearProfile());
        if (location.pathname !== "/")
            // Logging out in home path results in empty table.
            // Assumed this is preferable
            dispatch(clearUsers());
    }

    let section: JSX.Element;

    if (profile.id) {
        section = (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile" >Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={() => handleLogout()} >Logout</Link>
                </li>
            </React.Fragment>
        );
    } else {
        section = (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup" >Signup</Link>
                </li>
            </React.Fragment>
        )
    }

    return (
        <ul className="nav navbar-dark bg-light">
            <li className="nav-item">
                <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users" >Users</Link>
            </li>
            {section}
        </ul>
    )
}