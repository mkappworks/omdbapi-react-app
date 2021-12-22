import React from "react";

import ReactPaginate from "react-paginate";
import { Pagination } from "../components/Pagination";

const MoviePagination: React.FC<{
  pageCount: number;
  paginationPage: number;
  handlePageClick: (event: { selected: number }) => void;
}> = ({ pageCount, paginationPage, handlePageClick }) => {
  return (
    <Pagination>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={paginationPage}
      />
    </Pagination>
  );
};

export default MoviePagination;
