import { ChangeEvent, ReactElement } from 'react';

type SelectItemsOnPageProps = {
  setItemsOnPage: (items: number) => Promise<void>;
};

function SelectItemsOnPage({
  setItemsOnPage,
}: SelectItemsOnPageProps): ReactElement {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = Number(event.target.value);
    setItemsOnPage(selectedValue);
  };

  return (
    <select name="itemsPerPage" id="itemsPerPage" onChange={handleChange}>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  );
}

export default SelectItemsOnPage;
