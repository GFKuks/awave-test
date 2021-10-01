import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../store";

export default function NavBar() {
    
    const profile = useSelector((state: RootState) => state.profile.value);

    let section: JSX.Element;

    if (profile.id) {
        section = (
            <li className="nav-item">
                <Link className="nav-link" to="/profile" >Profile</Link>
            </li>
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