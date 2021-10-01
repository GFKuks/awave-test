import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users" >Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile" >Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login" >Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup" >Signup</Link>
            </li>
        </ul>
    )
}