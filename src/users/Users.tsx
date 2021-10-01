import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../hooks";

import { setErrors } from "../reduxSlices/errorSlice";
import { setUsers } from "../reduxSlices/userSlice";
import { useQuery } from "../shared/helpers";
import { RootState } from "../store";
import UserPaginator from "./UserPaginator";
import UserTable from "./UserTable";

export default function Users() {
    const dispatch = useDispatch();
    
    // Get page from query param
    const query = useQuery();
    let page = query.get("page");
    if (!page)
        page = "1";

    // Initial load
    useEffect(() => {
        loadData(Number(page));
    }, []);

    // Getting users from store
    const users = useAppSelector((state) => state.users.value);
    
    const loadData = (page?: number) => {
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
            dispatch(setUsers(data.data));
        })
        .catch(err => dispatch(setErrors(err.error)));
    }

    return (

        <div>
            <UserTable data={users} />
            <UserPaginator page={Number(page)} handlePagination={(page) => loadData(page)} />
        </div>
    );
}