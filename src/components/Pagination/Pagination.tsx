import React, { ReactElement } from 'react';
import { PaginationProps } from '../../interfaces/interfaces';

function Pagination({
  itemsCount,
  currentPage,
  onPageChange,
  itemsOnPage,
}: PaginationProps): ReactElement {
  const totalPages = Math.ceil(itemsCount / itemsOnPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      {pageNumbers.map((pageNumber) => (
        <button
          type="button"
          key={pageNumber}
          onClick={(): void => onPageChange(pageNumber)}
          disabled={pageNumber === currentPage}
          style={{ fontWeight: pageNumber === currentPage ? 'bold' : 'normal' }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
