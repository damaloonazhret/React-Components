import React, { ChangeEvent, useContext } from 'react';
import style from './SelectItemsOnPage.module.scss';
import setItemsOnPageChange from '../../utils/MainPage/setItemsOnPageChange';
import MainPageContext from '../MainPageContext/MainPageContext';

const SelectItemsOnPage = (): React.ReactElement | null => {
  const contextValue = useContext(MainPageContext);
  if (!contextValue) return null;
  const { dispatch } = contextValue;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = Number(event.target.value);
    setItemsOnPageChange({
      selectedValue,
      dispatch,
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
