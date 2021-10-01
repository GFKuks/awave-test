import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";

import { clearErrors, setErrors } from "../reduxSlices/errorSlice";
import { setProfile } from "../reduxSlices/profileSlice";

function ErrorText(error: string) {
    const style = {
        width: "100%",
        "margin-top": ".25rem",
        "font-size": ".875em",
        color: "#dc3545",
    }
    return (
        <div style={style}>
            {error}
        </div>
    );
}

export default function Register() {
    const dispatch = useAppDispatch();
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwdConfirm, setPwdConfirm] = useState("");

    const handleRegister = (ev: React.MouseEvent) => {
        ev.preventDefault();
        let route = "https://reqres.in/api/register";
    
        let status = 0;
        fetch(route, {
            method: "POST",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        .then((response) => {
            status = response.status;

            return response.json();
        })
        .then(data => {
            if (status !== 200)
                dispatch(setErrors(data.error));
            else {
                // Get token on success.
                // Will set redux with random profile for demo
                dispatch(clearErrors());
                getProfile();
                history.push("/profile");
            }
        })
        .catch(err => dispatch(setErrors(err.error)));
    }

    const getProfile = () => {
        let route = "https://reqres.in/api/users/2";
    
        fetch(route, {
            method: "GET",
        })
        .then((response) => {
            return response.json()
        })
        .then(data => {
            dispatch(setProfile(data.data));
            // Will check this if profile is empty. Clear on logout.
            localStorage.setItem("profile", JSON.stringify(data.data));
        })
        .catch(err => dispatch(setErrors(err.error)));

    }

    const error = useAppSelector((state) => state.errors.value);

    let emailError: JSX.Element = <React.Fragment />;
    let pwdError: JSX.Element = <React.Fragment />;

    if (error.includes("user"))
        emailError = ErrorText(error);
    else if (error.includes("password"))
        pwdError = ErrorText(error);

    const disableSubmit = !password || password !== pwdConfirm;

    return (
        <div>
            <form >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    {emailError}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    {pwdError}
                </div>
                <div className="mb-3">
                    <label htmlFor="pwdConfirm" className="form-label">Password confirm</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwdConfirm"
                        value={pwdConfirm}
                        onChange={(ev) => setPwdConfirm(ev.target.value)}
                    />
                    {pwdError}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(ev) => handleRegister(ev)}
                    disabled={disableSubmit}
                >Register</button>
            </form>
        </div>
    )
}