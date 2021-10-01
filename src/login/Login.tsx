import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";

import { setErrors } from "../reduxSlices/errorSlice";

export default function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (ev: React.MouseEvent) => {
        ev.preventDefault();
        let route = "https://reqres.in/api/login";
    
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
                dispatch(setErrors(data.error))

            console.log("data", data);
        })
        .catch(err => dispatch(setErrors(err.error)));
    }

    const error = useAppSelector((state) => state.errors.value);

    console.log("error", error);

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control invalid"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We"ll never share your email with anyone else.</div>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(ev) => handleLogin(ev)}>Submit</button>
            </form>
        </div>
    )
}