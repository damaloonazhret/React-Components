import { LocalStorageKeys } from '../../_interfaces_/interfaces';

const clearFilteredResults = (): void => {
  localStorage.removeItem(LocalStorageKeys.DataPageFilter);
};

export default clearFilteredResults;
