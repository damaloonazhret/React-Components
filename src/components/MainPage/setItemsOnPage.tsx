import React from 'react';
import selectItemsOnPage from '../../utils/selectItemsOnPage/selectItemsOnPage';
import { MainPageState } from '../../interfaces/interfaces';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
} from '../../constants/constants';

const setItemsOnPage = async (
  items: number,
  setState: React.Dispatch<React.SetStateAction<MainPageState>>
): Promise<void> => {
  setState((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  const fetchedData = await selectItemsOnPage(items);
  if (typeof fetchedData === 'object' && fetchedData) {
    localStorage.clear();
    setState((prevState) => ({
      ...prevState,
      results: fetchedData.results,
      itemsCount: fetchedData.count || INITIAL_ITEMS_COUNT,
      isLoading: false,
      currentPage: INITIAL_CURRENT_PAGE,
      itemsOnPage: items,
    }));
  }
};

export default setItemsOnPage;
