import React from "react";
import { useAppSelector } from "../hooks";

export default function ProfileBrief() {
    const profile = useAppSelector((state) => state.profile.value);

    if (!profile.id)
        return null;

    return (
        <div className="row">
            <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">First Name</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={profile.first_name}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Last name</label>
                        <input
                            type="firstName"
                            className="form-control"
                            id="firstName"
                            value={profile.last_name}
                            disabled
                        />
                    </div>
                </form>
            </div>
            <div className="col">
                <img src={profile.avatar} />
            </div>
        </div>
    )
}