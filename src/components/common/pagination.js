import React, { useState } from "react";

const Paginator = ({ totalPage, PerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage) / PerPage; i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(pageNumbers[0]);

  const setPageNumber = (number) => {
    paginate(number);
    setCurrentPage(number);
  };

  const moveNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };

  const moveBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };
  return (
    <>
      <div className="custom-pagination-wrapper">
        <ul className="custom-pagination-list">
          <li className="custom-pagination-item prev">
            <a
              href="javascript:void(0)"
              aria-label="Previous Page"
              onClick={() => moveBack()}
            >
              <i className="icon icon-chevron-left"></i>
            </a>
          </li>

          {pageNumbers.map((number) => (
            <li className="custom-pagination-item">
              <a
                className={number === currentPage && "active"}
                onClick={() => setPageNumber(number)}
                href="javascript:void(0)"
              >
                {number}
              </a>
            </li>
          ))}
          <li className="custom-pagination-item next">
            <a
              href="javascript:void(0)"
              aria-label="Next Page"
              onClick={() => moveNext()}
            >
              <i className="icon icon-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Paginator;
