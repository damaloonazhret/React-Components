import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Pagination.module.scss';
import MainPageContext from '../MainPageContext/MainPageContext';
import handlePageChange from '../MainPage/handlePageChange';

const Pagination = (): React.ReactElement | null => {
  const navigate = useNavigate();
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    return null;
  }

  const { state, dispatch } = contextValue;
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
          onClick={(): void =>
            handlePageChange({
              pageNumber,
              navigate,
              itemsOnPage,
              dispatch,
            })
          }
          disabled={pageNumber === currentPage}
          style={{
            fontWeight: pageNumber === currentPage ? 'bold' : 'normal',
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
