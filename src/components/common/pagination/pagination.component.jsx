import React from "react";
import { usePagination, DOTS } from "./../../../services/usePagination";
import "./pagination.styles.scss";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <div className="pagination-container">
        {/* Prev Section */}
        <div>
          <li className="pagination-item" onClick={onPrevious}>
            <button disabled={currentPage === 1}>قبلی</button>
          </li>
        </div>
        {/* Number Rage Section */}
        <div className="pagination-number-range-area">
          {paginationRange.map((pageNumber, idx) => {
            return pageNumber === DOTS ? (
              <li key={idx} className="pagination-item dots">
                &#8230;
              </li>
            ) : (
              <li
                key={idx}
                className={`pagination-item ${
                  pageNumber === currentPage ? "selected" : ""
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        </div>
        {/* Next Section */}
        <div className="pagination-item" onClick={onNext}>
          <button disabled={currentPage === lastPage}>بعدی</button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
