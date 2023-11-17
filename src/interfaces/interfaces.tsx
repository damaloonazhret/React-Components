import React, { ReactNode } from 'react';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarshipData {
  count?: number;
  next?: string;
  previous?: null | string;
  results: Starship[];
}

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
export interface SearchButtonProps extends SearchProps {
  searchTerm: string;
}

export interface PaginationActionProps {
  pageNumber: number;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<React.SetStateAction<Starship[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsOnPage: number;
  navigate: (to: string) => void;
}

export enum LocalStorageKeys {
  DataPage = 'data-page',
  DataPageFilter = 'data-page-filter',
}
