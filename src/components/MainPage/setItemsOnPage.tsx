import React from 'react';
import selectItemsOnPage from '../../utils/selectItemsOnPage/selectItemsOnPage';
import { MainPageState } from '../../interfaces/interfaces';

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
      itemsCount: fetchedData.count || 0,
      isLoading: false,
      currentPage: 1,
      itemsOnPage: items,
    }));
  }
};

export default setItemsOnPage;
