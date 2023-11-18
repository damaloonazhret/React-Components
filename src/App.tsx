import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainPage from './components/MainPage/MainPage';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from './_constants_/constants';
import { MainPageAction, MainPageState } from './components/Actions/interfaces';
import ACTIONS from './components/Actions';

const defaultState = {
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
const store = configureStore({ reducer });

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
