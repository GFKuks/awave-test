import React from "react";
import { User } from "../models";

interface IUserTableProps {
    data: User[];
}

function UserRow(user: User) {
    return (
        <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
        </tr>
    )
}

export default function UserTable(props: IUserTableProps) {
    const { data } = props;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => UserRow(user))}
            </tbody>
        </table>

    )

}