import React, { ChangeEvent, ReactElement } from 'react';
import style from './SelectItemsOnPage.module.scss';
import setItemsOnPageChange from '../MainPage/setItemsOnPageChange';
import { SelectItemsOnPageProps } from './ItemsOnPageInterfaces/interfaces';

const SelectItemsOnPage = ({
  setIsLoading,
  setItemsOnPage,
  setCurrentPage,
  setItemsCount,
  setResults,
}: SelectItemsOnPageProps): ReactElement => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = Number(event.target.value);
    setItemsOnPageChange({
      selectedValue,
      setIsLoading,
      setItemsOnPage,
      setCurrentPage,
      setItemsCount,
      setResults,
    });
  };

  return (
    <select
      className={style.itemsPerPage}
      name="itemsPerPage"
      id="itemsPerPage"
      onChange={handleChange}
    >
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  );
};

export default SelectItemsOnPage;
