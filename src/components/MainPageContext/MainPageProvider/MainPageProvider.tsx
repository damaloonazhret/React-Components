import React, { useEffect, useMemo, useReducer } from 'react';
import MainPageContext from '../MainPageContext';
import initStarships from '../../../utils/initStarships/initStarships';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../../../_constants_/constants';
import { MainPageAction, MainPageState } from '../interfaces';

export const ACTIONS = {
  SET_RESULTS: 'SET_RESULTS',
  SET_FILTERED_RESULTS: 'SET_FILTERED_RESULTS',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_ITEMS_COUNT: 'SET_ITEMS_COUNT',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_ITEMS_ON_PAGE: 'SET_ITEMS_ON_PAGE',
} as const;

const mainPageReducer: React.Reducer<MainPageState, MainPageAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ACTIONS.SET_RESULTS:
      return { ...state, results: action.payload };
    case ACTIONS.SET_FILTERED_RESULTS:
      return { ...state, filteredResults: action.payload };
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ITEMS_COUNT:
      return { ...state, itemsCount: action.payload };
    case ACTIONS.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case ACTIONS.SET_ITEMS_ON_PAGE:
      return { ...state, itemsOnPage: action.payload };
    default:
      return state;
  }
};

const MainPageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<
    React.Reducer<MainPageState, MainPageAction>
  >(mainPageReducer, {
    results: [],
    filteredResults: [],
    isLoading: true,
    itemsCount: INITIAL_ITEMS_COUNT,
    currentPage: INITIAL_CURRENT_PAGE,
    itemsOnPage: INITIAL_ITEMS_ON_PAGE,
  });

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships(state.itemsOnPage);
      dispatch({ type: ACTIONS.SET_RESULTS, payload: fetchedData.results });
      dispatch({
        type: ACTIONS.SET_ITEMS_COUNT,
        payload: fetchedData.count || INITIAL_ITEMS_COUNT,
      });
      dispatch({ type: ACTIONS.SET_IS_LOADING, payload: false });
    }
    fetchData();
  }, [state.itemsOnPage]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <MainPageContext.Provider value={contextValue}>
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageProvider;
