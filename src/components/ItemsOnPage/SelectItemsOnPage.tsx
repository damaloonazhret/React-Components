import React, { ChangeEvent, ReactElement } from 'react';
import { MainPageState, SetMainPageState } from '../../interfaces/interfaces';

type SelectItemsOnPageProps = {
  setItemsOnPage: (
    items: number,
    setState: (
      value: ((prevState: MainPageState) => MainPageState) | MainPageState
    ) => void
  ) => Promise<void>;
  setState: SetMainPageState;
};

function SelectItemsOnPage({
  setItemsOnPage,
  setState,
}: SelectItemsOnPageProps): ReactElement {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = Number(event.target.value);
    setItemsOnPage(selectedValue, setState);
  };

  return (
    <select name="itemsPerPage" id="itemsPerPage" onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  );
}

export default SelectItemsOnPage;
