import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "../shared/helpers";

interface IUserPaginatorProps {
    handlePagination: (page: number) => void;
}

export default function UserPaginator(props: IUserPaginatorProps) {
    const { handlePagination } = props;
    const query = useQuery();
    let page = query.get("page");
    if (!page)
        page = "1";

    const prevBtnClass = page === "1" ? " disabled" : "";
    const nextBtnClass = page === "2" ? " disabled" : "";

    const renderPageNumber = (pageNr: number) => {
        const disabled = Number(page) === pageNr ? " disabled" : "";

        return (
            <li className={`page-item${disabled}`} key={pageNr}>
                <Link className="page-link" to={`?page=${pageNr}`} onClick={() => handlePagination(pageNr)}>{pageNr}</Link>
            </li>
        )
    }

    // Going by what exists on reqres.com
    const pages = [1, 2];

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item${prevBtnClass}`}>
                    <Link className="page-link" to={`?page=${Number(page) - 1}`} onClick={() => handlePagination(Number(page) - 1)}>Previous</Link>
                </li>
                {pages.map(page => renderPageNumber(page))}
                <li className={`page-item${nextBtnClass}`}>
                    <Link className="page-link" to={`?page=${Number(page) + 1}`} onClick={() => handlePagination(Number(page) + 1)}>Next</Link>
                </li>
            </ul>
        </nav>
    );
}