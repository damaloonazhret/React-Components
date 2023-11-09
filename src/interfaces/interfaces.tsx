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

export interface StarshipItemProps {
  name: string;
  manufacturer: string;
  cost: string;
  length: string;
  passengers: string;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
}

export interface SearchProps {
  onSearch: (props: SearchButtonProps) => void;
  setState: SetMainPageState;
  state: MainPageState;
  results: Starship[];
  filteredResults: Starship[];
}
export interface SearchButtonProps extends SearchProps {
  searchTerm: string;
}

export interface MainPageState {
  results: Starship[];
  filteredResults: Starship[];
  isLoading: boolean;
  itemsCount: number;
  currentPage: number;
  itemsOnPage: number;
}

export interface StarshipListProps {
  results: Starship[];
}

export type SetMainPageState = React.Dispatch<
  React.SetStateAction<MainPageState>
>;

export interface PaginationProps {
  itemsCount: number;
  currentPage: number;
  onPageChange: (
    pageNumber: number,
    setState: (
      value: ((prevState: MainPageState) => MainPageState) | MainPageState
    ) => void,
    state: MainPageState,
    navigate: (to: string) => void
  ) => void;
  itemsOnPage: number;
  setState: SetMainPageState;
  state: MainPageState;
  navigate: (to: string) => void;
}
