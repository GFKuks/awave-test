import React from "react";
import { User } from "../models";
import UserPaginator from "./UserPaginator";
import UserTable from "./UserTable";

interface IUsersState {
    users: User[];
    isLoading: boolean;
}

export default class Users extends React.Component<never, IUsersState> {
    /**
     *
     */
    constructor(props: never) {
        super(props);
        
        this.state = {
            users: [],
            isLoading: true,
        }
    }
    ////////////////////
    // Handlers
    ////////////////////

    private loadData(page?: number) {
        this.setState({
            isLoading: true,
        }, () => {
            let route = "https://reqres.in/api/users";
            if (page)
                route += `?page=${page}`;

            fetch(route, {
                method: "GET",
            })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    users: data.data,
                    isLoading: false,
                });
            })
            .catch(err => console.log("err", err));
        })

    }

    ////////////////////
    // Lifecycle
    ////////////////////
    public componentDidMount() {
        this.loadData();
    }


    ////////////////////
    // Rendering
    ////////////////////
    render() {
        return (
            <div>
                <UserTable data={this.state.users} />
                <UserPaginator handlePagination={(page) => this.loadData(page)} />
            </div>
        );
    }
}