import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "../shared/helpers";

interface IUserPaginatorProps {
    handlePagination: (page: number) => void;
    page: number;
}

export default function UserPaginator(props: IUserPaginatorProps) {
    const { page, handlePagination } = props;

    const prevBtnClass = page === 1 ? " disabled" : "";
    const nextBtnClass = page === 2 ? " disabled" : "";

    const renderPageNumber = (pageNr: number) => {
        const disabled = page === pageNr ? " disabled" : "";

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
                    <Link className="page-link" to={`?page=${page - 1}`} onClick={() => handlePagination(page - 1)}>Previous</Link>
                </li>
                {pages.map(page => renderPageNumber(page))}
                <li className={`page-item${nextBtnClass}`}>
                    <Link className="page-link" to={`?page=${page + 1}`} onClick={() => handlePagination(page + 1)}>Next</Link>
                </li>
            </ul>
        </nav>
    );
}