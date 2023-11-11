import React, { ChangeEvent, ReactElement, useContext } from 'react';
import style from './SelectItemsOnPage.module.scss';
import setItemsOnPage from '../MainPage/setItemsOnPage';
import MainPageContext from '../MainPageContext/MainPageContext';

const SelectItemsOnPage = (): ReactElement => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    throw new Error('MainPageContext is not defined');
  }

  const { setState } = contextValue;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = Number(event.target.value);
    setItemsOnPage(selectedValue, setState);
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
