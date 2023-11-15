import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
} from '../../_constants_/constants';
import selectItemsOnPageData from '../../utils/selectItemsOnPage/selectItemsOnPageData';
import { SelectItemsOnPageChange } from './mainPageInterfaces/interfaces';

const setItemsOnPageChange = async ({
  selectedValue,
  setIsLoading,
  setItemsOnPage,
  setCurrentPage,
  setItemsCount,
  setResults,
}: SelectItemsOnPageChange): Promise<void> => {
  setIsLoading(true);
  const fetchedData = await selectItemsOnPageData(selectedValue);
  if (typeof fetchedData === 'object' && fetchedData) {
    localStorage.clear();
    setIsLoading(false);
    setItemsOnPage(selectedValue);
    setCurrentPage(INITIAL_CURRENT_PAGE);
    setItemsCount(fetchedData.count || INITIAL_ITEMS_COUNT);
    setResults(fetchedData.results);
  }
};

export default setItemsOnPageChange;
