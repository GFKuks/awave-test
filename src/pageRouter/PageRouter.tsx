import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../login/Login";
import Profile from "../profile/Profile";
import Signup from "../signup/Signup";
import Users from "../users/Users";

export default function PageRouter() {
    return (
        <div>
            <Switch>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Users />
                </Route>
            </Switch>
        </div>
    );
}