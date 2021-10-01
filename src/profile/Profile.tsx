import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setErrors } from "../reduxSlices/errorSlice";

function SuccessText(success: string) {
    const style = {
        width: "100%",
        marginTop: ".25rem",
        fontSize: ".875em",
        color: "#236f21",
        border: "green"
    }
    return (
        <div style={style}>
            {`Good job! Update at: ${success}`}
        </div>
    );
}

export default function Profile() {
    const profile = useAppSelector((state) => state.profile.value);
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [success, setSuccess] = useState("");

    useEffect(() => {
        setEmail(profile.email);
        setFirstName(profile.first_name);
        setLastName(profile.last_name);
    }, [profile])
    

    const handleUpdate = (ev: React.MouseEvent) => {
        ev.preventDefault();
        let route = "https://reqres.in/api/users/2";
    
        fetch(route, {
            method: "PUT",
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                email,
                firstName,
                lastName,
            })
        })
        .then((response) => response.json())
        .then(data => setSuccess(data.updatedAt))
        .catch(err => dispatch(setErrors(err.error)));
    }

    let successMsg: JSX.Element = <React.Fragment />
    if (success) {
        successMsg = SuccessText(success);
    }


    return (
        <div className="row">
            <div className="col">
                <form>
                    {successMsg}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input
                            type="firstName"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                            onChange={(ev) => setFirstName(ev.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">last name</label>
                        <input
                            type="lastName"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                            onChange={(ev) => setLastName(ev.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(ev) => handleUpdate(ev)}>Submit</button>
                </form>
            </div>
            <div className="col">
                <img src={profile.avatar} />
            </div>
        </div>
    )
}