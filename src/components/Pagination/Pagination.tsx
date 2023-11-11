import React, { ReactElement, useContext } from 'react';
import style from './Pagination.module.scss';
import MainPageContext from '../MainPageContext/MainPageContext';
import handlePageChange from '../MainPage/handlePageChange';

const Pagination = (): ReactElement => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    throw new Error('MainPageContext is not defined');
  }

  const { setState, state, navigate } = contextValue;
  const { itemsCount, itemsOnPage, currentPage } = state;
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
          onClick={async (): Promise<void> =>
            handlePageChange(pageNumber, setState, state, navigate)
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
