import React, { ReactNode } from 'react';
import { MainPageAction } from '../components/Actions/interfaces';
import { Starship } from './globalInterfaces';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
}

export interface SearchProps {
  onSearch: (newFilteredResults: Starship[]) => void;
  results: Starship[];
  filteredResults?: Starship[];
}

export interface PaginationActionProps {
  pageNumber: number;
  itemsOnPage: number;
  navigate: (to: string) => void;
  dispatch: React.Dispatch<MainPageAction>;
}

export enum LocalStorageKeys {
  DataPage = 'data-page',
  DataPageFilter = 'data-page-filter',
}
