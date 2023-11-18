import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pagination.module.scss';
import handlePageChange from '../../utils/MainPage/handlePageChange';
import { MainPageState } from '../Actions/interfaces';

const Pagination = (): React.ReactElement | null => {
  const navigate = useNavigate();
  const { itemsCount, itemsOnPage, currentPage } = useSelector(
    (state: MainPageState) => state
  );
  const dispatch = useDispatch();

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
