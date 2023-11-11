import React, { ReactElement } from 'react';
import { PaginationProps } from '../../interfaces/interfaces';
import style from './Pagination.module.scss';

const Pagination = ({
  itemsCount,
  currentPage,
  onPageChange,
  itemsOnPage,
  setState,
  state,
  navigate,
}: PaginationProps): ReactElement => {
  const totalPages = Math.ceil(itemsCount / itemsOnPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={style.pagination}>
      {pageNumbers.map((pageNumber) => (
        <button
          className={style.pagination__button}
          type="button"
          key={pageNumber}
          onClick={(): void =>
            onPageChange(pageNumber, setState, state, navigate)
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
