import { configureStore } from '@reduxjs/toolkit';
import {
  MainPageAction,
  MainPageState,
} from '../components/Actions/interfaces';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../_constants_/constants';
import ACTIONS from '../components/Actions';

const defaultState: MainPageState = {
  results: [],
  filteredResults: [],
  isLoading: true,
  itemsCount: INITIAL_ITEMS_COUNT,
  currentPage: INITIAL_CURRENT_PAGE,
  itemsOnPage: INITIAL_ITEMS_ON_PAGE,
};

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: MainPageState = defaultState,
  action: MainPageAction
): MainPageState => {
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

const store = configureStore({
  reducer,
});

export default store;
