import React from "react";
import { usePagination, DOTS } from "./../../../services/usePagination";
import { useTranslation } from "react-i18next";

import ArrowBackDark from "./../../../assets/images/icon/arrow-back-dark.png";

import "./pagination.styles.scss";

const Pagination = (props) => {
  const { t } = useTranslation();

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
          <button
            className="pagination-btn"
            disabled={currentPage === 1}
            onClick={onPrevious}
          >
            <span className="pagination-arrow pagination-arrow--prev">
              <img src={ArrowBackDark} alt="pagination-arrow-prev" />
            </span>
            <span>{t("Previous_Page")}</span>
          </button>
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
        <div>
          <button
            className="pagination-btn"
            disabled={currentPage === lastPage}
            onClick={onNext}
          >
            <span>{t("Next_Page")}</span>
            <span className="pagination-arrow pagination-arrow--next">
              <img src={ArrowBackDark} alt="pagination-arrow-next" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
