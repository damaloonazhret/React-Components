import { Starship } from '../../_interfaces_/globalInterfaces';

export interface MainPageState {
  results: Starship[];
  filteredResults: Starship[];
  isLoading: boolean;
  itemsCount: number;
  currentPage: number;
  itemsOnPage: number;
}

export type MainPageAction =
  | { type: 'SET_RESULTS'; payload: Starship[] }
  | { type: 'SET_FILTERED_RESULTS'; payload: Starship[] }
  | { type: 'SET_IS_LOADING'; payload: boolean }
  | { type: 'SET_ITEMS_COUNT'; payload: number }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_ITEMS_ON_PAGE'; payload: number };
