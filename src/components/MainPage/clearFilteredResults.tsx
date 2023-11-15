import { LocalStorageKeys } from '../../interfaces/interfaces';

const clearFilteredResults = (): void => {
  localStorage.removeItem(LocalStorageKeys.DataPageFilter);
};

export default clearFilteredResults;
