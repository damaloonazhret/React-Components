import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import style from './SelectItemsOnPage.module.scss';
import setItemsOnPageChange from '../../utils/MainPage/setItemsOnPageChange';

const SelectItemsOnPage = (): React.ReactElement | null => {
  const dispatch = useDispatch();
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
