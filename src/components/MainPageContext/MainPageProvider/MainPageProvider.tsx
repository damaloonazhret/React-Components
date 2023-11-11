import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPageState } from '../../../interfaces/interfaces';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../../../constants/constants';
import initStarships from '../../../utils/initStarships/initStarships';
import MainPageContext from '../MainPageContext';

const MainPageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<MainPageState>({
    results: [],
    filteredResults: [],
    isLoading: true,
    itemsCount: INITIAL_ITEMS_COUNT,
    currentPage: INITIAL_CURRENT_PAGE,
    itemsOnPage: INITIAL_ITEMS_ON_PAGE,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships(
        state.currentPage,
        state.currentPage,
        state.itemsOnPage
      );
      setState((prevState) => ({
        ...prevState,
        results: fetchedData.results,
        itemsCount: fetchedData.count || INITIAL_ITEMS_COUNT,
        isLoading: false,
      }));
    }

    fetchData();
  }, []);

  const contextValue = useMemo(
    () => ({ state, setState, navigate }),
    [state, setState, navigate]
  );

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageProvider;
