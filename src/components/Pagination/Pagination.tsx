import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Pagination.module.scss';
import { PaginationProps } from './interfaces';

const Pagination = ({
  itemsCount,
  currentPage,
  onPageChange,
  itemsOnPage,
  setIsLoading,
  setResults,
  setCurrentPage, // navigate,
}: PaginationProps): ReactElement => {
  const totalPages = Math.ceil(itemsCount / itemsOnPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const navigate = useNavigate();

  return (
    <div className={style.pagination}>
      {pageNumbers.map((pageNumber) => (
        <button
          className={style.pagination__button}
          type="button"
          key={pageNumber}
          onClick={(): void =>
            onPageChange({
              pageNumber,
              setIsLoading,
              setResults,
              setCurrentPage,
              itemsOnPage,
              navigate,
            })
          }
          disabled={pageNumber === currentPage}
          style={{ fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
